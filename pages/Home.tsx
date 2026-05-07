import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart, Building2, Target, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal-950/40 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover scale-[1.02] transform hover:scale-[1.05] transition-transform duration-[20s] ease-out opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-transparent z-10 h-[30vh]" />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center mt-20">
          <Reveal direction="up" delay={200}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <h2 className="text-gold-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-light">
                Private Advisory
              </h2>
              <div className="h-[1px] w-12 bg-gold-500/50" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
              Strategic Acquisition. <br />
              <span className="italic text-white/70">Unbiased Advocacy.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={600}>
            <p className="text-zinc-300/80 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 text-balance">
              We guide distinguished investors and portfolio builders through complex markets with precision. Secure high-performing assets backed by rigorous due diligence.
            </p>
          </Reveal>

          <Reveal direction="up" delay={800}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button onClick={() => navigate(PageRoutes.CONTACT)}>Book a Strategy Call</Button>
              <Button variant="outline" onClick={() => navigate(PageRoutes.SERVICES)}>Explore Methodology</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Big Difference - Split Layout */}
      <section className="py-32 md:py-48 bg-[#0C0C0B] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold-500/20 translate-x-4 -translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                  alt="Strategic Consulting" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-[3s] ease-in-out"
                />
                <div className="absolute inset-0 max-h-full bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-charcoal-900 border border-gold-500/20 p-10 shadow-2xl hidden md:block backdrop-blur-md">
                <p className="font-serif text-3xl text-gold-500 mb-2 tracking-tight">The Big Difference</p>
                <p className="text-xs tracking-widest text-zinc-400 uppercase font-light">Structure Vs. Transaction</p>
              </div>
            </div>
          </Reveal>
          
          <div className="space-y-16">
            <Reveal direction="left" delay={200}>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight text-balance">
                Most buyer's agents operate <br/>
                <span className="italic text-gold-500 font-light">transactionally.</span>
              </h2>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="space-y-8">
                <div className="border-l border-charcoal-800 pl-6 hover:border-gold-500/30 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-white mb-2">The Industry Standard</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    Find a deal, negotiate the price, close the purchase, and move on to the next client. The approach is incomplete and short-sighted.
                  </p>
                </div>
                
                <div className="border-l-[2px] border-gold-500 pl-6 bg-gradient-to-r from-gold-500/[0.03] to-transparent py-4">
                  <h3 className="text-2xl font-serif text-gold-400 mb-3">The NPC Standard</h3>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    We operate strategically. We examine your full financial position, long-term goals, borrowing capacity, scalability potential, and portfolio trajectory. We build the strategy before we ever search for an asset.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={500}>
              <p className="text-xl font-serif text-white/90 italic tracking-wide">
                "The right property matters. But the right strategy matters more."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Target Audience: Who we sit with */}
      <section className="py-32 bg-charcoal-950 border-t border-charcoal-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-900/5 to-transparent z-0" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <Reveal direction="up">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-6 font-light block">Our Partnership</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight">Who We Sit With</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "First-Time Investors",
                desc: "Those who want expert guidance to start their investment journey the right way, avoiding critical mistakes."
              },
              {
                title: "Wealth-Building Professionals",
                desc: "High-income earners looking to build long-term wealth through strategic, hands-off property acquisition."
              },
              {
                title: "Scaling Investors",
                desc: "Those wanting to grow beyond 1–2 properties with a structured, repeatable, and scalable system."
              },
              {
                title: "Strategy Seekers",
                desc: "People who want absolute clarity and data execution—not guesswork—driving their multi-million dollar decisions."
              }
            ].map((audience, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div className="bg-gold-500/[0.05] border border-gold-500/50 p-10 h-full transition-all duration-700 flex flex-col justify-between group hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)] relative overflow-hidden">
                  <div>
                    <h3 className="text-xl font-serif text-gold-400 mb-4 transition-colors">{audience.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm group-hover:text-zinc-300 transition-colors duration-500">
                      {audience.desc}
                    </p>
                  </div>
                  <Target className="w-5 h-5 text-gold-500/50 mt-8 transition-all duration-700 group-hover:text-gold-400 group-hover:rotate-12 group-hover:scale-125" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Anti-Pitch */}
      <section className="py-24 bg-[#0C0C0B] border-t border-charcoal-900 border-b border-gold-500/10">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-snug mb-6">
                Excellence requires <span className="italic text-gold-500 font-light">alignment.</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                NPC Services is a boutique advisory firm. We restrict our client intake to maintain institutional-grade rigor on every acquisition. We are not suited for everyone.
              </p>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal direction="left" delay={200}>
              <div className="space-y-6 border border-gold-500/50 bg-gold-500/[0.05] p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(194,163,100,0.14)]">
                <h3 className="text-gold-500 text-[10px] uppercase tracking-[0.2em]">Our Process Requires:</h3>
                <ul className="space-y-4">
                  {['Commitment to a long-term strategy', 'Willingness to follow data-driven guidance', 'A focus on building wealth, not chasing deals'].map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm font-light leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            
            <Reveal direction="left" delay={400}>
              <div className="space-y-6 border border-gold-500/50 bg-gold-500/[0.05] p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(194,163,100,0.14)]">
                <h3 className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">We are NOT suited for:</h3>
                <ul className="space-y-4">
                  {['People looking for quick wins or shortcuts', 'Emotional buyers driven by impulse', 'Those unwilling to follow a structured process'].map((notFit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle size={16} className="text-charcoal-700 mt-0.5 shrink-0" />
                      <span className="text-zinc-500 text-sm font-light leading-relaxed">{notFit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services List - Clean Editorial Layout */}
      <section className="py-32 md:py-40 bg-charcoal-950">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 border-r border-charcoal-800 pr-12 hidden lg:block">
              <Reveal direction="right">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-light block mb-6">Expert Advisory</span>
                <h2 className="text-5xl font-serif text-white leading-[1.1] tracking-tight">Core <br/>Capabilities</h2>
                <div className="mt-16 w-[1px] h-32 bg-gold-500/30" />
              </Reveal>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center">
              {[
                { title: "Buyer Representation", desc: "Complete end-to-end management of the acquisition process. Unparalleled access to off-market stock." },
                { title: "Portfolio Strategy", desc: "Reviewing and optimizing existing assets for better yield, capital growth, and tax efficiency." },
                { title: "Strategic Negotiation", desc: "Securing the premium asset at the optimal price through experienced deal-making and auction bidding." }
              ].map((service, idx) => (
                <Reveal key={idx} delay={idx * 100} direction="up">
                  <div className={`p-8 mb-6 border border-gold-500/50 bg-gold-500/[0.05] group transition-all duration-700 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.14)] ${idx === 0 ? '' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                      <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold-400 transition-colors md:w-1/3">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 font-light leading-relaxed md:w-2/3 group-hover:text-zinc-300 transition-colors">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
              
              <Reveal delay={400} direction="up">
                <div className="mt-16">
                  <Button variant="secondary" onClick={() => navigate(PageRoutes.SERVICES)}>View All Services</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Atmospheric */}
      <section className="py-40 relative border-t border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?q=80&w=2574&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover opacity-20 filter blur-sm grayscale"
          />
          <div className="absolute inset-0 bg-charcoal-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-charcoal-950" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-panel rounded-3xl p-16 md:p-24 shadow-2xl">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">Begin Your Acquisition</h2>
            <p className="text-zinc-300/80 mb-12 max-w-xl mx-auto font-light text-lg">
              Schedule a confidential discussion to assess your current position and architect your investment objectives.
            </p>
            <Button onClick={() => navigate(PageRoutes.CONTACT)}>Request a Consultation</Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};