import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function WhatIsIspPage() {
  return (
    <>
      <Helmet>
        <title>What Is an ISP and How Does It Assign Your IP Address? — ipdetect.tools</title>
        <meta name="description" content="Your ISP is the gateway between your home and the internet. Learn how ISPs work, how they assign IP addresses, and why that matters for connectivity and privacy." />
        <link rel="canonical" href="https://ipdetect.tools/blog/what-is-an-isp" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What Is an ISP and How Does It Assign Your IP Address?" />
        <meta property="og:url" content="https://ipdetect.tools/blog/what-is-an-isp" />
      </Helmet>

      <article className="max-w-2xl mx-auto">
        <div className="mb-6"><Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm">&larr; Back to Blog</Link></div>
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Networking</span>
        <h1 className="text-3xl font-black text-white mt-2 mb-3">What Is an ISP and How Does It Assign Your IP Address?</h1>
        <p className="text-slate-500 text-sm mb-10">Published May 11, 2026 · 5 min read</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Every time you load a webpage, stream a video, or send an email, that data travels through your <strong className="text-white">Internet Service Provider</strong> — your ISP. It's the company that physically connects your home to the internet's backbone, and it plays a central role in how your IP address works.</p>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">What an ISP Actually Does</h2>
          <p>An ISP maintains physical infrastructure — fiber cables, coaxial cables, cell towers, or satellite systems — that connects your home or device to a global network of interconnected routers. Without an ISP, your devices have no path to the public internet.</p>
          <p>ISPs operate at different tiers. Tier 1 ISPs (like AT&T, Deutsche Telekom, or NTT) own massive backbone networks that span countries and continents and peer directly with each other. Tier 2 and Tier 3 ISPs buy transit from Tier 1 providers and resell it to businesses and consumers. When you pay a monthly internet bill, you're paying a Tier 2 or Tier 3 provider who is, in turn, paying for access upstream.</p>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">How Your ISP Assigns Your IP Address</h2>
          <p>IP addresses are hierarchically allocated. The global authority (IANA) divides the IPv4 and IPv6 address space into large blocks, which it allocates to five regional registries (ARIN, RIPE, APNIC, LACNIC, AFRINIC). Those registries allocate smaller blocks to ISPs within their region. ISPs then assign individual addresses to their customers.</p>
          <p>For home customers, this assignment happens via <strong className="text-white">DHCP</strong> (Dynamic Host Configuration Protocol). When your router connects to your ISP's network, it sends a request and the ISP's DHCP server responds with an IP address, a lease duration, and routing information. At the end of the lease (typically 24–48 hours), your router requests a renewal — which usually results in the same IP, but not always.</p>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">What Your ISP Can See</h2>
          <p>Because all your traffic passes through your ISP's network, they have significant visibility into your activity:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Which domains you're connecting to (even with HTTPS, the domain name is visible via DNS lookups)</li>
            <li>How much data you're transferring and when</li>
            <li>Which IP addresses your device contacts</li>
            <li>Which customer was assigned which IP address at any given time</li>
          </ul>
          <p>What they can't easily see: the content of encrypted HTTPS traffic. Using encrypted DNS (DNS over HTTPS or DNS over TLS) also hides your domain lookups from your ISP.</p>

          <h2 className="text-xl font-bold text-cyan-400 mt-8">Why Your ISP Name Shows Up in IP Lookups</h2>
          <p>When a website or tool looks up your IP address, one of the first things it finds is your ISP's name. That's because IP address blocks are registered to organizations in public databases (WHOIS/RDAP). The IP range your address belongs to is registered to your ISP, making the association visible to anyone who queries those databases.</p>

          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-2xl p-5 mt-6">
            <p className="font-semibold text-white mb-1">See your ISP right now.</p>
            <p className="text-sm text-slate-400">Visit <Link to="/" className="text-cyan-400 hover:underline">ipdetect.tools</Link> to see your current IP address and the ISP name associated with it — the same information any website you connect to can immediately see.</p>
          </div>
        </div>
      </article>
    </>
  );
}
