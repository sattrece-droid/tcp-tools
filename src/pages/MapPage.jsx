import { Helmet } from 'react-helmet-async';
import { useIpData } from '../hooks/useIpData';
import GeoMap from '../components/map/GeoMap';
import AdSlot from '../components/layout/AdSlot';

export default function MapPage() {
  const { data, loading, error } = useIpData();

  return (
    <>
      <Helmet>
        <title>My IP Location on Map — IP Geolocation Tool</title>
        <meta name="description"
          content="View your approximate location on an interactive map based on your IP address. Powered by IP geolocation lookup." />
        <link rel="canonical" href="https://yourdomain.com/map" />
      </Helmet>

      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
            IP Geolocation <span className="text-cyan-400">Map</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Based on your IP address <span className="text-slate-200 font-mono">{loading ? '...' : data?.ip}</span>, 
            here is your approximate location.
          </p>
        </section>

        <AdSlot slotId="top-leaderboard" />

        <div className="bg-slate-800 border border-slate-700 p-2 rounded-2xl overflow-hidden shadow-2xl">
          <GeoMap 
            lat={data?.lat} 
            lon={data?.lon} 
            label={`${data?.city || 'Location'}, ${data?.country || ''}`} 
          />
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-xl text-center text-red-400 text-sm">
            Failed to load geolocation data.
          </div>
        )}

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
            <h2 className="text-lg font-bold text-white mb-3">How does this work?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every device connected to the internet is assigned a unique IP address. Internet Service Providers (ISPs) 
              own ranges of these addresses and assign them to specific geographic regions. We use a geolocation database 
              to match your IP address to a physical location.
            </p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
            <h2 className="text-lg font-bold text-white mb-3">Is this my exact address?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              No. IP geolocation is accurate at a city or regional level, but it cannot show your exact house or street address. 
              The coordinates displayed are typically the location of your ISP's nearest data center or routing hub.
            </p>
          </div>
        </section>

        <AdSlot slotId="bottom-banner" />
      </div>
    </>
  );
}
