import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import PortCheckerPage from './pages/PortCheckerPage';
import PrivacyPage from './pages/PrivacyPage';

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
