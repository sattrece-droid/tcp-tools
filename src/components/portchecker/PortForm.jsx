import { useState, useEffect } from 'react';

const QUICK_PORTS = [
  { label: 'HTTP', port: 80 },
  { label: 'HTTPS', port: 443 },
  { label: 'SSH', port: 22 },
  { label: 'FTP', port: 21 },
  { label: 'MySQL', port: 3306 },
  { label: 'PostgreSQL', port: 5432 },
  { label: 'RDP', port: 3389 },
];

export default function PortForm({ onCheck, loading, detectedIp }) {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('80');
  const [mode, setMode] = useState('my-ip'); // 'my-ip' or 'custom'

  useEffect(() => {
    if (mode === 'my-ip' && detectedIp) {
      setHost(detectedIp);
    } else if (mode === 'custom') {
      setHost('');
    }
  }, [mode, detectedIp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (host && port) {
      onCheck(host, parseInt(port, 10));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-xl">
      <div className="flex bg-slate-900 p-1 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => setMode('my-ip')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
            mode === 'my-ip' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Check My IP
        </button>
        <button
          type="button"
          onClick={() => setMode('custom')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
            mode === 'custom' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Custom Host
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
            Hostname or IP Address
          </label>
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            disabled={mode === 'my-ip'}
            placeholder="e.g. google.com or 8.8.8.8"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all disabled:opacity-50"
            required
          />
        </div>

        <div>
          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
            Port Number
          </label>
          <input
            type="number"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            placeholder="1-65535"
            min="1"
            max="65535"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            required
          />
        </div>

        <div className="pt-2">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3 ml-1">Quick Select</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_PORTS.map((p) => (
              <button
                key={p.port}
                type="button"
                onClick={() => setPort(p.port.toString())}
                className="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors border border-slate-600/30"
              >
                {p.label} ({p.port})
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 text-slate-900 font-black py-4 rounded-xl mt-4 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking Port...
            </span>
          ) : (
            'Scan Port'
          )}
        </button>
      </div>
    </form>
  );
}
