export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">ipdetect.tools</span>
            <span>&copy; {currentYear}</span>
            <span className="hidden md:inline">•</span>
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          </div>
          <div className="text-center md:text-right">
            Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">OpenStreetMap</a> contributors • Tiles &copy; <a href="https://www.maptiler.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">MapTiler</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-400">
          Utility-focused networking tools for the modern web.
        </div>
      </div>
    </footer>
  );
}
