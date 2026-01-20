import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
              Your Dedicated Property Partner
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
              Strategic Acquisition. <br />
              <span className="italic text-zinc-400">Unbiased Advocacy.</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
              We guide investors and portfolio builders through complex markets with precision. 
              Secure high-performing assets backed by rigorous due diligence and expert negotiation.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button onClick={() => navigate(PageRoutes.CONTACT)}>Book a Strategy Call</Button>
              <Button variant="outline" onClick={() => navigate(PageRoutes.SERVICES)}>Explore Methodology</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-charcoal-800 pt-12">
              <div className="space-y-4">
                <ShieldCheck className="text-gold-500 w-10 h-10 mb-4" />
                <h3 className="text-xl font-serif text-white">Risk Mitigation</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  We don't just find property; we eliminate risk. Every acquisition is vetted against strict capital growth and yield criteria.
                </p>
              </div>
              <div className="space-y-4">
                <PieChart className="text-gold-500 w-10 h-10 mb-4" />
                <h3 className="text-xl font-serif text-white">Data-Led Strategy</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Move beyond emotion. Our advisory relies on macro-economic trends, local market saturation, and infrastructure pipelines.
                </p>
              </div>
              <div className="space-y-4">
                <TrendingUp className="text-gold-500 w-10 h-10 mb-4" />
                <h3 className="text-xl font-serif text-white">Wealth Preservation</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  We structure portfolios for longevity. Our focus is on generational wealth transfer and sustainable asset performance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section className="py-32 bg-charcoal-950 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold-500/30" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                alt="Strategic Consulting" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold-500/30" />
            </div>
          </Reveal>
          
          <div className="space-y-8">
            <Reveal delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                Seamlessly Unlock Your <br/>
                <span className="text-gold-500">Investment Potential</span>
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-zinc-400 leading-relaxed">
                The Australian property market is complex, but your strategy shouldn't be. 
                NPC Services acts as your exclusive representative, removing the noise of sales agents and marketing hype.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Whether you are a busy professional, a business owner, or an expat, we provide the time, expertise, and access required to secure off-market grade assets.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <Button variant="outline" onClick={() => navigate(PageRoutes.ABOUT)} className="mt-4">
                Our Philosophy
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brief Services */}
      <section className="py-32 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-gold-500 text-xs tracking-[0.2em] uppercase">Expert Advisory & Assistance</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">Core Capabilities</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Buyer Representation", desc: "Complete end-to-end management of the acquisition process." },
              { title: "Portfolio Strategy", desc: "Reviewing and optimizing existing assets for better yield." },
              { title: "Negotiation", desc: "Securing the best possible price through experienced deal-making." }
            ].map((service, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="p-8 border border-charcoal-700 bg-charcoal-950/50 hover:border-gold-500/50 transition-colors duration-500 group h-full">
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="w-8 h-[1px] bg-gold-500/50 group-hover:w-16 transition-all duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={400}>
            <div className="flex justify-center mt-16">
              <Button variant="secondary" onClick={() => navigate(PageRoutes.SERVICES)}>View All Services</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 bg-charcoal-950 relative overflow-hidden">
        {/* Decorative Gold Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-gold-500/50" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-12">What Sets NPC Apart</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
             <Reveal delay={200}>
               <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-xl">1</div>
                 <div>
                   <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Total Independence</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">We take no fees from vendors or developers. Our loyalty is contractually bound to you, the purchaser.</p>
                 </div>
               </div>
             </Reveal>
             
             <Reveal delay={300}>
               <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-xl">2</div>
                 <div>
                   <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Full Market Access</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">Access to 'silent' listings and off-market opportunities unavailable to the general public.</p>
                 </div>
               </div>
             </Reveal>

             <Reveal delay={400}>
               <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-xl">3</div>
                 <div>
                   <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Partner Ecosystem</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">Backed by a trusted network of solicitors, accountants, and strategists for holistic advice.</p>
                 </div>
               </div>
             </Reveal>

             <Reveal delay={500}>
               <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-xl">4</div>
                 <div>
                   <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Calm Execution</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">We remove emotion from the transaction, ensuring you never overpay due to pressure.</p>
                 </div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-900/10 border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-serif text-white mb-6">Start Your Journey with Confidence</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Schedule a confidential discussion to assess your current position and investment objectives.
            </p>
            <Button onClick={() => navigate(PageRoutes.CONTACT)}>Request a Consultation</Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};