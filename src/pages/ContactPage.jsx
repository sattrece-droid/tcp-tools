import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — ipdetect.tools</title>
        <meta name="description" content="Get in touch with the ipdetect.tools team. Report bugs, suggest features, or ask questions about our free networking utilities." />
        <link rel="canonical" href="https://ipdetect.tools/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact — ipdetect.tools" />
        <meta property="og:description" content="Reach out with questions, bug reports, or feature suggestions." />
        <meta property="og:url" content="https://ipdetect.tools/contact" />
      </Helmet>

      <div className="max-w-xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-3">Contact Us</h1>
          <p className="text-slate-400 leading-relaxed">
            Found a bug, want to suggest a feature, or just have a question? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <form
          action="https://formspree.io/f/ipdetecttools"
          method="POST"
          className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jane Smith"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane@example.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="bug">Report a Bug</option>
              <option value="feature">Feature Suggestion</option>
              <option value="general">General Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us how we can help..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-2xl text-sm text-slate-400">
          You can also reach us at <span className="text-cyan-400">hello@ipdetect.tools</span>. We typically respond within 1–2 business days.
        </div>
      </div>
    </>
  );
}
