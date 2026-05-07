import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 via-charcoal-950 to-charcoal-950 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal direction="down">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">Initiate Mandate</h3>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white mb-8 leading-[1.05] tracking-tight">
              Begin the <br/>
              <span className="italic text-gold-500 font-light">Conversation.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-light leading-relaxed text-balance">
              We invite you to an exclusive discovery session to architect your investment objectives. Discretion is absolute.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 md:pb-48 bg-charcoal-950 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-charcoal-900/50 backdrop-blur-3xl transform -skew-x-[4deg] hidden md:block" />
            <div className="bg-gold-500/[0.05] backdrop-blur-xl p-8 md:p-16 border border-gold-500/50 shadow-2xl relative z-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)]">
              <Reveal direction="right" delay={200}>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Contact Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                      placeholder="+61 400 000 000"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Acquisition Brief</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500 resize-none"
                      placeholder="Outline your investment objectives or specific property interests."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button fullWidth onClick={(e) => e.preventDefault()}>Submit Enquiry</Button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-16 py-12 md:pl-8">
            <Reveal direction="left" delay={400}>
              <div className="border border-gold-500/50 bg-gold-500/[0.05] p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(194,163,100,0.14)]">
                <h3 className="text-white font-serif text-3xl mb-8 tracking-tight">Direct Access</h3>
                <div className="space-y-6 text-zinc-400 font-light text-lg">
                  <a href="mailto:admin@npcservices.com.au" className="block hover:text-gold-500 transition-colors w-fit">admin@npcservices.com.au</a>
                  <a href="tel:+61286093299" className="block hover:text-gold-500 transition-colors w-fit">(02) 8609 3299</a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={500}>
              <div className="border border-gold-500/50 bg-gold-500/[0.05] p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(194,163,100,0.14)]">
                <h3 className="text-white font-serif text-3xl mb-8 tracking-tight">Private Offices</h3>
                <div className="space-y-12">
                  <div className="group border-b border-gold-500/10 pb-5 last:border-b-0 transition-all duration-500 hover:translate-x-2">
                    <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-gold-400 transition-colors">Sydney HQ</h4>
                    <p className="text-zinc-500 text-sm leading-loose font-light group-hover:text-zinc-400 transition-colors">Level 35, Tower One<br/>International Towers<br/>Barangaroo NSW 2000</p>
                  </div>
                  <div className="group border-b border-gold-500/10 pb-5 last:border-b-0 transition-all duration-500 hover:translate-x-2">
                    <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-gold-400 transition-colors">Melbourne</h4>
                    <p className="text-zinc-500 text-sm leading-loose font-light group-hover:text-zinc-400 transition-colors">101 Collins Street<br/>Melbourne VIC 3000</p>
                  </div>
                  <div className="group border-b border-gold-500/10 pb-5 last:border-b-0 transition-all duration-500 hover:translate-x-2">
                    <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-gold-400 transition-colors">Brisbane</h4>
                    <p className="text-zinc-500 text-sm leading-loose font-light group-hover:text-zinc-400 transition-colors">Level 1, 192A Ann St<br/>Brisbane QLD 4000</p>
                  </div>
                  <div className="group border-b border-gold-500/10 pb-5 last:border-b-0 transition-all duration-500 hover:translate-x-2">
                    <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-gold-400 transition-colors">Perth</h4>
                    <p className="text-zinc-500 text-sm leading-loose font-light group-hover:text-zinc-400 transition-colors">Brookfield Place<br/>125 St Georges Terrace<br/>Perth WA 6000</p>
                  </div>
                  <div className="group border-b border-gold-500/10 pb-5 last:border-b-0 transition-all duration-500 hover:translate-x-2">
                    <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-gold-400 transition-colors">Adelaide</h4>
                    <p className="text-zinc-500 text-sm leading-loose font-light group-hover:text-zinc-400 transition-colors">Westpac House<br/>91 King William St<br/>Adelaide SA 5000</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};