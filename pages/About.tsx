import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* About Hero */}
      <section className="pt-32 pb-20 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
               Where Vision Meets <br/>
               <span className="text-gold-500">Trusted Expertise.</span>
             </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="max-w-3xl border-l-2 border-gold-500 pl-8 py-2">
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                NPC Services was founded on a simple premise: Real estate investors deserve 
                the same level of strategic advisory as corporate stakeholders.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <Reveal>
              <h3 className="text-gold-500 text-xs tracking-widest uppercase">Our Identity</h3>
              <h2 className="text-3xl font-serif text-white">Seasoned Experts, Trusted Guidance</h2>
              <p className="text-zinc-400 leading-relaxed">
                We are not a transactional sales agency. We are a boutique advisory firm dedicated to the buyer. 
                In an industry often clouded by conflicting interests, we stand firmly on your side of the table.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Our approach is rooted in patience and precision. We believe that a declined property is often more 
                valuable than a purchased one—if that property does not meet the rigorous standards of your portfolio strategy.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-white text-lg font-serif mb-2">Research-Led</h4>
                  <p className="text-sm text-zinc-500">Every recommendation is backed by comprehensive data analysis.</p>
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-2">Client-Aligned</h4>
                  <p className="text-sm text-zinc-500">We operate on a fixed-fee basis to ensure total neutrality.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" 
                alt="Office Meeting" 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-charcoal-800 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Our Investment Philosophy</h2>
            <p className="text-zinc-400">
              Wealth is not built by chasing trends. It is built by acquiring quality assets with intrinsic value 
              and holding them through market cycles.
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              head: "Deliberate Action",
              text: "We do not rush. We wait for the right asset, at the right price, that aligns perfectly with your long-term goals."
            },
            {
              head: "Holistic View",
              text: "A property does not exist in a vacuum. We consider tax implications, financing structures, and exit strategies before making an offer."
            },
            {
              head: "Advocacy First",
              text: "Negotiation is an art. We leverage our market knowledge to secure terms that protect your capital and enhance your yield."
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="bg-charcoal-900 p-10 border-t border-gold-500/20 hover:border-gold-500 transition-colors duration-500 group">
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{item.head}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-luxury-gradient flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2 className="text-3xl font-serif text-white mb-8">Experience the Difference</h2>
          <Button onClick={() => navigate(PageRoutes.TEAM)}>Meet Our Partner Network</Button>
        </Reveal>
      </section>
    </Layout>
  );
};