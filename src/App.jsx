import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { IpDataProvider } from './context/IpDataContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

const MapPage = lazy(() => import('./pages/MapPage'));
const PortCheckerPage = lazy(() => import('./pages/PortCheckerPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-32 text-slate-500 text-sm">
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <IpDataProvider>
        <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/port-checker" element={<PortCheckerPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </IpDataProvider>
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  );
}
