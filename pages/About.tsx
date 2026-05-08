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
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 to-transparent z-0" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal direction="down">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">Our Identity</h3>
          </Reveal>
          <Reveal direction="up" delay={200}>
             <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white mb-12 leading-[1.05] tracking-tight">
               Where Vision Meets <br/>
               <span className="italic text-gold-500 font-light">Trusted Expertise.</span>
             </h1>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <div className="max-w-3xl border-l-[1px] border-gold-500/50 pl-8 md:pl-12 py-2">
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-balance">
                NPC Services was founded on a simple premise: Real estate investors deserve 
                the same level of strategic, unbiased advisory as institutional stakeholders.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Split - Editorial Layout */}
      <section className="py-32 bg-[#0C0C0B]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-12">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-[1.2]">
                Seasoned Experts, <br/>
                <span className="text-gold-400">Trusted Guidance.</span>
              </h2>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
                <p>
                  We are not a transactional sales agency. We are a boutique advisory firm dedicated to the buyer. 
                  In an industry often clouded by conflicting interests, we stand firmly on your side of the table.
                </p>
                <p>
                  Our approach is rooted in patience and precision. We believe that a declined property is often more 
                  valuable than a purchased one—if that property does not meet the rigorous standards of your portfolio strategy.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 relative">
            <Reveal direction="left" delay={300} className="h-full">
              <div className="relative h-full min-h-[500px] w-full">
                <div
                  role="img"
                  aria-label="Property advisory meeting"
                  className="absolute inset-0 w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                  style={{ backgroundImage: `url("${import.meta.env.BASE_URL}ChatGPT%20Image%20May%208,%202026,%2003_43_35%20AM.png")` }}
                />
                <div className="absolute inset-0 mix-blend-multiply bg-gold-900/10 pointer-events-none" />
                <div className="absolute -inset-4 border border-gold-500/20 translate-x-4 translate-y-4 pointer-events-none hidden md:block" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Mission Grid */}
      <section className="py-24 bg-charcoal-950 border-y border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal direction="up">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-12 text-center">Our Core Directives</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-800">
            {[
              {
                title: "Advocate with Integrity",
                desc: "We represent your interests with honesty, transparency, and unwavering dedication. Your trust is our most valuable asset, and we protect it at every turn."
              },
              {
                title: "Deliver Tailored Strategies",
                desc: "Every client's situation is unique. We craft personalised property strategies that reflect your goals, budget, timeline, and risk tolerance. It's never a one-size-fits-all approach."
              },
              {
                title: "Provide Expert Guidance",
                desc: "With deep market knowledge, strategic negotiation skills, and comprehensive due diligence, we ensure you're equipped with the insights needed to make confident decisions."
              },
              {
                title: "Ensure Peace of Mind",
                desc: "Property decisions can feel overwhelming. We simplify the complex, manage the details, and keep you informed so you can move forward with confidence and clarity."
              }
            ].map((mission, index) => (
              <Reveal key={index} delay={index * 100} direction="up" className="bg-[#0C0C0B]">
                <div className="p-12 md:p-16 h-full bg-gold-500/[0.05] border border-gold-500/50 transition-all duration-700 group flex flex-col justify-center hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)] relative overflow-hidden">
                  <div className="w-12 h-[1px] bg-gold-500/50 mb-8 group-hover:w-24 transition-all duration-700" />
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{mission.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-lg">{mission.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Over Emotion Manifesto */}
      <section className="py-40 bg-[#0C0C0B] relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/5 to-[#0C0C0B]" />
        <div className="max-w-5xl mx-auto relative z-10 glass-panel p-16 md:p-24 rounded-2xl shadow-2xl">
          <Reveal direction="up">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-8">The Manifesto</span>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.3] tracking-tight mb-12">
              <span className="italic">"A great location</span> with average property beats the reverse every time. <span className="italic text-gold-500">Cash flow</span> keeps you in the game. <span className="text-gold-500">Strategy</span> comes before property."
            </h2>
            <p className="text-zinc-500 font-light tracking-[0.2em] uppercase text-sm">Data &gt; Emotion</p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section - Dark Luxury Grid */}
      <section className="py-32 md:py-48 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <Reveal direction="up">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-8">The Framework</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight leading-[1.1]">Our Investment Philosophy</h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed max-w-2xl text-balance">
                Wealth is not built by chasing trends. It is built by acquiring quality assets with intrinsic value 
                and holding them through market cycles.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[
              {
                num: "01",
                head: "Deliberate Action",
                text: "We do not rush. We wait for the right asset, at the right price, that aligns perfectly with your long-term goals."
              },
              {
                num: "02",
                head: "Holistic View",
                text: "A property does not exist in a vacuum. We consider tax implications, financing structures, and exit strategies before making an offer."
              },
              {
                num: "03",
                head: "Advocacy First",
                text: "Negotiation is an art. We leverage our market knowledge to secure terms that protect your capital and enhance your yield."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150} direction="up">
                <div className="group border border-gold-500/50 bg-gold-500/[0.05] p-8 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)] relative overflow-hidden">
                  <span className="text-gold-500/50 font-serif text-3xl block mb-6 italic">{item.num}</span>
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{item.head}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Roadmap Section */}
      <section className="py-32 md:py-48 bg-[#0C0C0B] relative border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-4xl mb-24 relative z-10">
            <Reveal direction="up">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-8">The Process</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-tight leading-[1.1]">The 8-Stage Property<br/>Portfolio Roadmap</h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed text-balance max-w-3xl">
                Most people think property investing is about buying a single property. It's not. It's about building a system that allows you to acquire multiple assets over time — strategically, sustainably, and without burning out financially. The difference between someone who owns one property and someone who builds a portfolio is simple: they follow a structured process.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 relative z-10">
            {[
              {
                title: "Strategy & Goal Setting",
                desc: "Define your goals, timeline, and risk tolerance. Know where you're going before you start."
              },
              {
                title: "Finance & Capacity",
                desc: "Know your numbers before you act. Confirm your borrowing capacity and establish a finance-ready position."
              },
              {
                title: "Market Research",
                desc: "Choose the right battlefield. We identify high-growth areas and infrastructure-driven locations."
              },
              {
                title: "Property Selection",
                desc: "Buy with data, not emotion. We evaluate rental yield, growth potential, and strict risk factors."
              },
              {
                title: "Acquisition & Negotiation",
                desc: "Secure the deal properly. We deploy expert negotiation strategies to acquire the asset at the right price."
              },
              {
                title: "Settlement & Setup",
                desc: "Turn the asset into a performing investment. Appoint management, secure a tenant, and finalize legal transitions."
              },
              {
                title: "Portfolio Optimisation",
                desc: "Make the asset work harder. Continuous performance reviews, rent adjustments, and tax efficiency."
              },
              {
                title: "Scaling & Repeat",
                desc: "Build momentum. Leverage built-up equity and improved borrowing capacity to acquire your next asset."
              }
            ].map((stage, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div className="relative p-8 border border-gold-500/50 bg-gold-500/[0.05] transition-all duration-700 group h-full hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)] overflow-hidden">
                  <span className="text-gold-500/30 font-serif text-4xl block mb-6 italic group-hover:text-gold-500/70 transition-colors duration-500">0{i+1}</span>
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors tracking-wide pr-4 w-5/6">{stage.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-900 to-[#0C0C0B] flex flex-col items-center justify-center text-center px-6 border-t border-gold-500/10">
        <Reveal direction="up">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block mb-6">Take the Next Step</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 tracking-tight">Experience the Difference.</h2>
          <Button onClick={() => navigate(PageRoutes.TEAM)}>Meet Our Partner Network</Button>
        </Reveal>
      </section>
    </Layout>
  );
};