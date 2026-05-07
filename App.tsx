import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Services = React.lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })));
const Team = React.lazy(() => import('./pages/Team').then((module) => ({ default: module.Team })));
const Insights = React.lazy(() => import('./pages/Insights').then((module) => ({ default: module.Insights })));
const Contact = React.lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions').then((module) => ({ default: module.TermsConditions })));

const RouteFallback: React.FC = () => (
  <div className="min-h-screen bg-charcoal-950 flex items-center justify-center text-gold-500 text-xs uppercase tracking-[0.3em]">
    Loading NPC Services
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
