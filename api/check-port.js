import net from 'net';

// Ports that are never checked — prevents abuse
const BLOCKED_PORTS = new Set([25, 465, 587]); // SMTP (spam prevention)

// Validates hostname / IP4 / IP6, rejects private ranges
function isValidHost(host) {
  if (!host || host.length > 253) return false;
  const privatePatterns = [
    /^127\./,           // loopback
    /^10\./,            // private
    /^192\.168\./,      // private
    /^172\.(1[6-9]|2\d|3[01])\./,  // private
    /^::1$/,            // IPv6 loopback
    /^localhost$/i,     // localhost
  ];
  return !privatePatterns.some(p => p.test(host));
}

export default async function handler(req, res) {
  // CORS header — only needed if calling from different origin in dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { host, port } = req.body ?? {};

  const portNum = parseInt(port, 10);
  if (!portNum || portNum < 1 || portNum > 65535) {
    return res.status(400).json({ error: 'Port must be between 1 and 65535' });
  }
  if (BLOCKED_PORTS.has(portNum)) {
    return res.status(400).json({ error: 'That port cannot be checked' });
  }
  if (!isValidHost(host)) {
    return res.status(400).json({ error: 'Invalid or disallowed host' });
  }

  const result = await checkTcp(host, portNum, 5000); // 5-second timeout
  return res.status(200).json(result);
};

function checkTcp(host, port, timeoutMs) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let settled = false;

    const done = (open, error = null) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve({ open, host, port, error });
    };

    socket.setTimeout(timeoutMs);
    socket.on('connect', () => done(true));
    socket.on('timeout', () => done(false, 'timeout'));
    socket.on('error', (e) => done(false, e.code ?? e.message));
    socket.connect(port, host);
  });
}
