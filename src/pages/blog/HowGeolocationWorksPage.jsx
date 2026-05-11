import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HowGeolocationWorksPage() {
  return (
    <>
      <Helmet>
        <title>How IP Geolocation Works — And Why It's Often Wrong — ipdetect.tools</title>
        <meta name="description" content="IP geolocation maps your IP address to a physical location. Learn how the mapping works, why it's frequently inaccurate, and what that means for location-based services." />
        <link rel="canonical" href="https://ipdetect.tools/blog/how-ip-geolocation-works" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How IP Geolocation Works — And Why It's Often Wrong" />
        <meta property="og:url" content="https://ipdetect.tools/blog/how-ip-geolocation-works" />
      </Helmet>

      <article className="max-w-2xl mx-auto">
        <div className="mb-6"><Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm">&larr; Back to Blog</Link></div>
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Geolocation</span>
        <h1 className="text-3xl font-black text-white mt-2 mb-3">How IP Geolocation Works — And Why It's Often Wrong</h1>
        <p className="text-slate-500 text-sm mb-10">Published May 11, 2026 · 5 min read</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Websites know your approximate location before you tell them anything. They're not reading your mind — they're using <strong className="text-white">IP geolocation</strong>, a system that maps IP addresses to physical locations. It works surprisingly well at the country and city level. But at finer precision, it breaks down in ways that catch people off guard.</p>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">How the Mapping Is Built</h2>
          <p>IP geolocation databases are compiled by companies like MaxMind, IP2Location, and others. They build their databases from multiple sources:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li><strong className="text-slate-300">WHOIS and registry data</strong> — IP blocks are registered to organizations with address information. A block registered to a São Paulo ISP is likely serving São Paulo users.</li>
            <li><strong className="text-slate-300">BGP routing data</strong> — Border Gateway Protocol announcements reveal which networks announce which IP ranges and from which locations.</li>
            <li><strong className="text-slate-300">Active probing</strong> — Measuring network latency from known locations to estimate where an IP is physically connected.</li>
            <li><strong className="text-slate-300">User-submitted data</strong> — Some databases incorporate location signals voluntarily provided by users or applications.</li>
          </ul>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">Why It's Often Inaccurate</h2>
          <p>IP geolocation is not GPS. The physical location of the infrastructure serving an IP block doesn't always match where the end user is. Common reasons for inaccuracy:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li><strong className="text-slate-300">Centralized ISP infrastructure</strong> — A regional ISP might route all its customers through a data center in a different city. Your IP looks like it's in that city even if you're 200 km away.</li>
            <li><strong className="text-slate-300">IP block reassignment</strong> — When ISPs acquire, sell, or reassign IP blocks, databases take time to update. You might show a location from a previous owner.</li>
            <li><strong className="text-slate-300">Mobile networks</strong> — Mobile carriers route traffic through national hubs. A user in one city can appear to be in another city entirely.</li>
            <li><strong className="text-slate-300">VPNs and proxies</strong> — Traffic routed through a VPN server appears to originate from that server's location.</li>
            <li><strong className="text-slate-300">Database staleness</strong> — Commercial geolocation databases update regularly, but there's always lag between infrastructure changes and database updates.</li>
          </ul>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">Accuracy by Level</h2>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-slate-400"><th className="text-left py-1 pr-6">Level</th><th className="text-left py-1">Typical Accuracy</th></tr></thead>
              <tbody className="text-slate-300">
                <tr><td className="py-1 pr-6 text-slate-400">Country</td><td>95–99%</td></tr>
                <tr><td className="py-1 pr-6 text-slate-400">Region/State</td><td>55–80%</td></tr>
                <tr><td className="py-1 pr-6 text-slate-400">City</td><td>50–75%</td></tr>
                <tr><td className="py-1 pr-6 text-slate-400">Postal code</td><td>20–30%</td></tr>
                <tr><td className="py-1 pr-6 text-slate-400">Street address</td><td>Not possible via IP</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">What Geolocation Is Actually Used For</h2>
          <p>Despite its imprecision, IP geolocation is useful at the scale it's accurate at. Streaming services use country-level accuracy to enforce content licensing. Ad networks use it for regional targeting. Fraud detection systems flag when a user's IP country doesn't match their billing address. Security systems use it to detect impossible travel — a login from a new country minutes after one from home.</p>
          <p>None of these applications require street-level accuracy, which is why IP geolocation remains widely used despite its known limitations.</p>

          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-2xl p-5 mt-6">
            <p className="font-semibold text-white mb-1">See where your IP is mapped right now.</p>
            <p className="text-sm text-slate-400">Use the <Link to="/map" className="text-cyan-400 hover:underline">ipdetect.tools IP Map</Link> to see where your current IP address is geolocation-mapped. If it's off, that's a normal result of the limitations described above.</p>
          </div>
        </div>
      </article>
    </>
  );
}
