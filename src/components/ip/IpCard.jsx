import { useState } from 'react';
import IpDetailRow from './IpDetailRow';
import { getFlagEmoji } from '../../utils/flagEmoji';

export default function IpCard({ data, loading, error }) {
  const [copying, setCopying] = useState(false);

  const handleCopy = () => {
    if (data?.ip) {
      navigator.clipboard.writeText(data.ip);
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
    }
  };

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl text-center">
        <p className="text-red-400 font-medium">Failed to detect IP address. Please check your connection.</p>
        <p className="text-red-500 text-xs mt-2">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-xl shadow-cyan-900/10">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-2">My Public IP Address</h2>
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
            {loading ? (
              <span className="inline-block w-48 h-10 bg-slate-700 animate-pulse rounded-lg"></span>
            ) : (
              data?.ip
            )}
          </span>
          {!loading && (
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg transition-all ${
                copying ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
              title="Copy IP Address"
            >
              {copying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <IpDetailRow label="ISP / Provider" value={data?.isp} loading={loading} />
        <IpDetailRow label="City" value={data?.city} loading={loading} />
        <IpDetailRow label="Region" value={data?.region} loading={loading} />
        <IpDetailRow 
          label="Country" 
          value={data ? `${data.country} ${getFlagEmoji(data.countryCode)}` : null} 
          loading={loading} 
        />
      </div>
    </div>
  );
}
