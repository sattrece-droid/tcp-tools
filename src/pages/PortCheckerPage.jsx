import { Helmet } from 'react-helmet-async';
import { useIpData } from '../hooks/useIpData';
import { usePortCheck } from '../hooks/usePortCheck';
import PortForm from '../components/portchecker/PortForm';
import PortResult from '../components/portchecker/PortResult';
import AdSlot from '../components/layout/AdSlot';

export default function PortCheckerPage() {
  const { data: ipData } = useIpData();
  const { checkPort, result, loading, error } = usePortCheck();

  return (
    <>
      <Helmet>
        <title>Port Checker — Test If a Port Is Open or Closed</title>
        <meta name="description"
          content="Check if any TCP port is open or closed on your IP or any hostname. Supports ports 1–65535. Free online port scanner." />
        <link rel="canonical" href="https://ipdetect.tools/port-checker" />
      </Helmet>

      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
            Port <span className="text-cyan-400">Checker</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Test if a specific port is open on your network or a remote server. 
            Useful for troubleshooting firewalls and port forwarding.
          </p>
        </section>

        <AdSlot slotId="top-leaderboard" />

        <div className="max-w-xl mx-auto">
          <PortForm 
            onCheck={checkPort} 
            loading={loading} 
            detectedIp={ipData?.ip} 
          />
          <PortResult result={result} error={error} />
        </div>

        <AdSlot slotId="mid-content-rect" />

        <section className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Understanding Port Status</h2>
          <div className="grid gap-8 md:grid-cols-2 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Open
              </h3>
              <p>
                An "Open" status means a service is actively listening for connections on this port and the firewall 
                is allowing traffic through. This is what you want for services like web servers (80/443).
              </p>
            </div>
            <div>
              <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Closed / Filtered
              </h3>
              <p>
                A "Closed" status usually means no service is listening on that port. "Filtered" means a firewall 
                is dropping the packets. Our tool handles both as "Closed" for simplicity.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">Common Ports</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <li><span className="text-slate-200">21:</span> FTP</li>
                <li><span className="text-slate-200">22:</span> SSH</li>
                <li><span className="text-slate-200">80:</span> HTTP</li>
                <li><span className="text-slate-200">443:</span> HTTPS</li>
                <li><span className="text-slate-200">3306:</span> MySQL</li>
                <li><span className="text-slate-200">3389:</span> RDP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">Why check ports?</h3>
              <p>
                Port checking is essential when setting up a home server, gaming server, or website. 
                It verifies that your port forwarding rules are working correctly and your ISP isn't blocking traffic.
              </p>
            </div>
          </div>
        </section>

        <AdSlot slotId="bottom-banner" />
      </div>
    </>
  );
}
