import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const articles = [
  {
    path: '/blog/what-is-a-public-ip-address',
    tag: 'IP Basics',
    title: 'What Is a Public IP Address and Why Does It Change?',
    summary: 'Your public IP is how the internet identifies your connection — but it can change without warning. Here\'s how it works and what that means for you.',
  },
  {
    path: '/blog/ipv4-vs-ipv6',
    tag: 'Networking',
    title: 'IPv4 vs. IPv6: What\'s the Difference and Why Does It Matter?',
    summary: 'The internet is running out of IPv4 addresses. IPv6 was built to fix that. Learn what changed, why it took so long, and how it affects you today.',
  },
  {
    path: '/blog/how-to-check-if-a-port-is-open',
    tag: 'Port Checker',
    title: 'How to Check If a Port Is Open (And Why It Matters)',
    summary: 'Open and closed ports control what traffic reaches a server. Learn what ports are, how to check them, and what to do when a port isn\'t behaving as expected.',
  },
  {
    path: '/blog/what-your-ip-address-reveals',
    tag: 'Privacy',
    title: 'What Does Your IP Address Actually Reveal About You?',
    summary: 'Everyone says your IP address exposes your location — but how accurate is that really? The truth is more nuanced than most people realize.',
  },
  {
    path: '/blog/how-to-hide-your-ip-address',
    tag: 'Privacy',
    title: 'How to Hide Your IP Address: VPN, Proxy, and Tor Explained',
    summary: 'Three common methods to mask your IP address — and when each one makes sense. They\'re not all created equal.',
  },
  {
    path: '/blog/what-is-an-isp',
    tag: 'Networking',
    title: 'What Is an ISP and How Does It Assign Your IP Address?',
    summary: 'Your ISP is the gateway between your home network and the internet. Understanding how it works helps you troubleshoot connection problems faster.',
  },
  {
    path: '/blog/how-ip-geolocation-works',
    tag: 'Geolocation',
    title: 'How IP Geolocation Works — And Why It\'s Often Wrong',
    summary: 'Websites use your IP to guess your location. But the method is imprecise and frequently wrong. Here\'s how it works and where it breaks down.',
  },
  {
    path: '/blog/dynamic-vs-static-ip',
    tag: 'IP Basics',
    title: 'Dynamic vs. Static IP Addresses: What\'s the Difference?',
    summary: 'Most home connections get a dynamic IP that changes periodically. Static IPs stay fixed. Learn when each type is used and which one you probably have.',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Helmet>
        <title>Networking Guides & Tutorials — ipdetect.tools Blog</title>
        <meta name="description" content="Plain-English guides on IP addresses, networking, ports, geolocation, privacy, and more. Free tutorials from ipdetect.tools." />
        <link rel="canonical" href="https://ipdetect.tools/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Networking Guides & Tutorials — ipdetect.tools Blog" />
        <meta property="og:description" content="Plain-English guides on IP addresses, ports, geolocation, and privacy." />
        <meta property="og:url" content="https://ipdetect.tools/blog" />
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Networking Guides</h1>
          <p className="text-slate-400">Plain-English explanations of IP addresses, ports, geolocation, and network privacy.</p>
        </div>

        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.path}
              to={a.path}
              className="block bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/40 p-6 rounded-2xl transition-colors group"
            >
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">{a.tag}</span>
              <h2 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">{a.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{a.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
