import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'What Is My IP', path: '/' },
    { name: 'IP Map', path: '/map' },
    { name: 'Port Checker', path: '/port-checker' },
  ];

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        <Link to="/" className="text-xl font-bold text-cyan-400 tracking-tight flex items-center gap-2">
          <span className="bg-cyan-400 text-slate-900 px-2 py-0.5 rounded text-sm font-black italic">TCP</span>
          TOOLS
        </Link>
        <div className="flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
