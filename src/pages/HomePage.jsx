import { Helmet } from 'react-helmet-async';
import { useIpData } from '../hooks/useIpData';
import IpCard from '../components/ip/IpCard';
import AdSlot from '../components/layout/AdSlot';

export default function HomePage() {
  const { data, loading, error } = useIpData();

  return (
    <>
      <Helmet>
        <title>What Is My IP Address — See Your IPv4, IPv6 & Location</title>
        <meta name="description"
          content="Instantly see your public IP address, ISP, city, and country. Shows both IPv4 and IPv6. No sign-up required." />
        <meta property="og:title" content="What Is My IP Address" />
        <meta property="og:description"
          content="Detect your public IP, ISP, and location in one click." />
        <meta property="og:url" content="https://yourdomain.com/" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            What Is My <span className="text-cyan-400">IP?</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your public IP address is your digital fingerprint on the internet. 
            Below is the information visible to websites you visit.
          </p>
        </section>

        <AdSlot slotId="top-leaderboard" />

        <IpCard data={data} loading={loading} error={error} />

        <AdSlot slotId="mid-content-rect" />

        <section className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">What is a public IP address?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A public IP address is an IP address that can be accessed over the Internet. Like a physical mailing address, 
                your public IP address is the address that's used to route internet traffic to your specific device.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">How accurate is IP geolocation?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                IP-based geolocation can typically pinpoint your city or region, but it's rarely accurate enough to find your exact 
                street address. Your ISP owns the IP and assigns it to you.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">What is the difference between IPv4 and IPv6?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                IPv4 uses a 32-bit address (e.g., 192.168.1.1), while IPv6 uses a 128-bit address. IPv6 was created to deal 
                with the exhaustion of IPv4 addresses and provides 340 undecillion unique addresses.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-2">Is my IP address private?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No, your public IP address is visible to every website you visit and every server you connect to. 
                If you want to hide your IP, you should use a VPN or a Proxy service.
              </p>
            </div>
          </div>
        </section>

        <AdSlot slotId="bottom-banner" />
      </div>
    </>
  );
}
