import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

// Placeholder pages for routes
const MapPage = () => <div className="text-white text-center py-20">Map Page Coming Soon...</div>;
const PortCheckerPage = () => <div className="text-white text-center py-20">Port Checker Coming Soon...</div>;
const PrivacyPage = () => <div className="text-white text-center py-20">Privacy Policy Coming Soon...</div>;

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/port-checker" element={<PortCheckerPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
