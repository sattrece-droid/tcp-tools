import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — ipdetect.tools</title>
        <meta name="description" content="About ipdetect.tools — free networking utilities including IP address detection, geolocation mapping, and port checking. No sign-up required." />
        <link rel="canonical" href="https://ipdetect.tools/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About — ipdetect.tools" />
        <meta property="og:description" content="Free networking utilities — IP detection, geolocation map, and port checker." />
        <meta property="og:url" content="https://ipdetect.tools/about" />
      </Helmet>

      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-3">About ipdetect.tools</h1>
          <p className="text-slate-400 leading-relaxed">
            ipdetect.tools is a free, privacy-focused suite of networking utilities. No account required,
            no data stored, no tracking — just fast, accurate tools for understanding your network connection.
          </p>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-cyan-400">What We Offer</h2>
          <ul className="space-y-3 text-slate-400">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">IP Detection</span>
              <span>Instantly see your public IP address, ISP, city, country, and connection type.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">IP Map</span>
              <span>Visualize your approximate geolocation on an interactive map based on your IP address.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">Port Checker</span>
              <span>Test whether a specific port is open or closed on any host — useful for firewall troubleshooting and server configuration.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl space-y-3">
          <h2 className="text-xl font-bold text-cyan-400">Privacy First</h2>
          <p className="text-slate-400 leading-relaxed">
            We believe networking tools should work for you, not harvest your data. ipdetect.tools processes
            your IP address only to deliver the requested service — we don't log it, store it, or sell it.
            The only cookies on this site come from Google AdSense, which funds the service.
          </p>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl space-y-3">
          <h2 className="text-xl font-bold text-cyan-400">Who It's For</h2>
          <p className="text-slate-400 leading-relaxed">
            Whether you're a developer debugging a firewall rule, a remote worker checking your connection's
            geolocation, or just curious what your IP address is — ipdetect.tools gives you the answer
            instantly, without making you jump through hoops.
          </p>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl space-y-3">
          <h2 className="text-xl font-bold text-cyan-400">Get in Touch</h2>
          <p className="text-slate-400 leading-relaxed">
            Have a question, found a bug, or want to suggest a feature? We'd love to hear from you.
            Visit our <a href="/contact" className="text-cyan-400 hover:underline">contact page</a> to reach us.
          </p>
        </div>
      </div>
    </>
  );
}
