import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — TCP Tools</title>
        <meta name="description" content="Privacy Policy for TCP Tools. Learn how we handle your data and IP information." />
        <link rel="canonical" href="https://yourdomain.com/privacy" />
      </Helmet>

      <div className="prose prose-invert max-w-none bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl">
        <h1 className="text-3xl font-black text-white mb-6">Privacy Policy</h1>
        
        <p className="text-slate-400 mb-4">
          Last Updated: April 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">1. Information We Collect</h2>
          <p className="text-slate-400">
            TCP Tools is designed to be a privacy-first utility. We do not require account registration. 
            When you use our tools (What Is My IP, IP Map, or Port Checker), we process your IP address 
            solely to provide the requested service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">2. How We Use Data</h2>
          <p className="text-slate-400">
            Your IP address is used to:
          </p>
          <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
            <li>Display your current public IP address to you.</li>
            <li>Perform a geolocation lookup via third-party APIs.</li>
            <li>Execute a port scan from our server to your specified destination.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">3. Third-Party Services</h2>
          <p className="text-slate-400 mb-2">
            We use the following third-party providers:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-1">
            <li><strong>freeipapi.com / ipwho.is:</strong> For IP geolocation data.</li>
            <li><strong>MapTiler / OpenStreetMap:</strong> For displaying geographic maps.</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites.</li>
            <li><strong>Vercel:</strong> For hosting and serverless function execution.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">4. Cookies</h2>
          <p className="text-slate-400">
            We do not set first-party cookies. However, our advertising partner (Google AdSense) may set 
            cookies to personalize your advertising experience. You can opt-out of personalized advertising 
            by visiting Google's Ads Settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-cyan-400 mb-3">5. Contact</h2>
          <p className="text-slate-400">
            If you have any questions about this Privacy Policy, please contact us via our GitHub repository.
          </p>
        </section>
      </div>
    </>
  );
}
