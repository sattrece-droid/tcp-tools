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
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const BlogIndexPage = lazy(() => import('./pages/blog/BlogIndexPage'));
const WhatIsPublicIpPage = lazy(() => import('./pages/blog/WhatIsPublicIpPage'));
const Ipv4VsIpv6Page = lazy(() => import('./pages/blog/Ipv4VsIpv6Page'));
const HowToCheckPortPage = lazy(() => import('./pages/blog/HowToCheckPortPage'));
const WhatIpRevealsPage = lazy(() => import('./pages/blog/WhatIpRevealsPage'));
const HideYourIpPage = lazy(() => import('./pages/blog/HideYourIpPage'));
const WhatIsIspPage = lazy(() => import('./pages/blog/WhatIsIspPage'));
const HowGeolocationWorksPage = lazy(() => import('./pages/blog/HowGeolocationWorksPage'));
const DynamicVsStaticIpPage = lazy(() => import('./pages/blog/DynamicVsStaticIpPage'));

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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogIndexPage />} />
                <Route path="/blog/what-is-a-public-ip-address" element={<WhatIsPublicIpPage />} />
                <Route path="/blog/ipv4-vs-ipv6" element={<Ipv4VsIpv6Page />} />
                <Route path="/blog/how-to-check-if-a-port-is-open" element={<HowToCheckPortPage />} />
                <Route path="/blog/what-your-ip-address-reveals" element={<WhatIpRevealsPage />} />
                <Route path="/blog/how-to-hide-your-ip-address" element={<HideYourIpPage />} />
                <Route path="/blog/what-is-an-isp" element={<WhatIsIspPage />} />
                <Route path="/blog/how-ip-geolocation-works" element={<HowGeolocationWorksPage />} />
                <Route path="/blog/dynamic-vs-static-ip" element={<DynamicVsStaticIpPage />} />
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
