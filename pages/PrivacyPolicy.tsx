import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'NPC Services | Privacy Policy';
  }, []);

  return (
    <Layout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,rgba(194,163,100,0.12),transparent_34%)]" />
        <div className="max-w-[900px] mx-auto relative z-10 text-center">
          <Reveal direction="down">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">Website Policy</h3>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
              Privacy <span className="italic text-gold-500 font-light">Policy</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              NPC Services is preparing a full Privacy Policy for publication. For privacy-related questions or data requests,
              please contact us at <a href="mailto:admin@npcservices.com.au" className="text-gold-400 hover:text-white transition-colors">admin@npcservices.com.au</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};
