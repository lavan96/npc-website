import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Search, TrendingUp, Handshake, FileSearch, LineChart, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      num: "01",
      icon: Search,
      title: "Buyer Representation",
      description: "A comprehensive sourcing and acquisition vanguard. We govern the entire transaction lifecycle—from the initial brief to the exchange of contracts—guaranteeing access to the top 1% of off-market properties before they reach public portals."
    },
    {
      num: "02",
      icon: TrendingUp,
      title: "Portfolio Strategy",
      description: "A clinical diagnostic of your current asset base. We identify underperforming assets, architect opportunities for equity release, and structure a risk-adjusted roadmap for future acquisitions."
    },
    {
      num: "03",
      icon: FileSearch,
      title: "Due Diligence",
      description: "Rigorous feasibility stress-testing. Our analysts conduct micro-economic reviews, comparable sales algorithms, rental yield forecasting, and capital growth projections to mathematically validate every decision."
    },
    {
      num: "04",
      icon: Handshake,
      title: "Negotiation",
      description: "We act as a firewall between you and the vendor. Our expert deal-structuring strategies are engineered to strip emotion from the table and secure the asset on terms heavily weighted in your favor."
    },
    {
      num: "05",
      icon: LineChart,
      title: "Post-Purchase Optimization",
      description: "Our alliance does not terminate at settlement. We conduct rigorous annual portfolio audits to ensure your assets continue to compound and perform against our predefined benchmarks."
    }
  ];

  return (
    <Layout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 to-transparent z-0" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal direction="down">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">Our Capabilities</h3>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white mb-12 leading-[1.05] tracking-tight text-balance">
              Strategic <span className="italic text-gold-500 font-light">Execution.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl text-balance border-l border-gold-500/50 pl-6">
              We do not sell services; we engineer outcomes. Our mandate is to insulate your capital against market volatility and accelerate your transition from active income to passive wealth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The 5-Step Acquisition Journey */}
      <section className="py-32 md:py-48 bg-[#0C0C0B] px-6 relative border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-20">
             <Reveal direction="up">
               <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-6">The Journey Ahead</span>
               <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight text-balance max-w-2xl">
                 The 5-Step Acquisition Protocol
               </h2>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                title: "New Property Chapter",
                desc: "Initial consultation to understand goals, lifestyle needs, financial position, and timeline to create a tailored strategy."
              },
              {
                title: "Financial Consultation",
                desc: "Work with our strategist to confirm borrowing capacity, structure finance optimally, and set a clear budget framework."
              },
              {
                title: "Presentation of Property",
                desc: "We present a meticulously structured report covering 67 refined sections of market, financial, and risk data.",
                highlight: true
              },
              {
                title: "Negotiation & Positioning",
                desc: "Strategic representation where we aggressively leverage market insights to secure the best possible terms and price."
              },
              {
                title: "Countdown to Settlement",
                desc: "Complete end-to-end coordination with solicitors and brokers to ensure flawless execution and handover."
              }
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up" className="h-full">
                <div className={`p-8 h-full border ${step.highlight ? 'bg-gold-500/[0.05] border-gold-500/50' : 'bg-charcoal-900/30 border-charcoal-800 hover:border-gold-500/30'} transition-colors duration-500 relative flex flex-col`}>
                  <div className="text-gold-500/50 font-serif text-2xl mb-6">0{idx + 1}</div>
                  <h3 className={`text-xl font-serif mb-4 ${step.highlight ? 'text-gold-400' : 'text-white'}`}>{step.title}</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">{step.desc}</p>
                  
                  {step.highlight && (
                    <div className="mt-8 pt-6 border-t border-gold-500/20 text-xs text-gold-500/80 font-medium tracking-wide uppercase">
                      67 Data Points Analyzed
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 6-Pillar Due Diligence Framework */}
      <section className="py-32 bg-charcoal-950 px-6 border-t border-charcoal-800/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 items-end">
            <div className="lg:w-1/2">
              <Reveal direction="right">
                <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light block mb-6">Pass / Fail</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.1] mb-6">
                  The Due Diligence <br/>Framework
                </h2>
                <p className="text-zinc-400 font-light text-lg leading-relaxed text-balance">
                  Most costly property mistakes happen because people skip steps, rush decisions, or rely on surface-level assumptions. Before we let you commit to any asset, it must pass our exhaustive 6-pillar framework. One unresolved area is one too many.
                </p>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal direction="left" delay={200}>
                 <div className="p-8 border border-charcoal-800 bg-[#0C0C0B] flex items-center gap-6">
                   <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                     <FileSearch className="text-gold-500 w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-white font-serif text-xl mb-2">The Golden Rule</h4>
                     <p className="text-zinc-500 text-sm font-light leading-relaxed tracking-wide">"If you don't understand it — don't buy it."</p>
                   </div>
                 </div>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Financial", items: ["Purchase Price Validation", "Rental Yield Estimation", "Cash Flow Assessment"] },
              { title: "Legal", items: ["Contract of Sale Review", "Title & Ownership Check", "Zoning & Easements"] },
              { title: "Property", items: ["Structural Integrity", "Pest & Termite Inspection", "Systems & Finishes"] },
              { title: "Location", items: ["Vacancy & Population Growth", "Employment Infrastructure", "Supply & Safety"] },
              { title: "Risk", items: ["Market Volatility", "Interest Rate Buffers", "Exit & Liquidity Strategies"] },
              { title: "Strategy", items: ["Investment Goal Alignment", "Borrowing Impact", "10-Year Viability"] }
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div className="border border-charcoal-800 p-8 h-full bg-[#0C0C0B] hover:border-gold-500/30 transition-colors duration-500">
                  <div className="flex items-center justify-between mb-6 border-b border-charcoal-800 pb-4">
                    <h3 className="text-xl font-serif text-white">{pillar.title}</h3>
                    <CheckCircle2 size={20} className="text-gold-500/50" />
                  </div>
                  <ul className="space-y-4">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span className="text-zinc-400 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="pb-32 md:pb-48 bg-charcoal-950 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto border-t border-charcoal-800 pt-24 text-center mb-16">
           <Reveal direction="up">
             <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Capabilities Overview</h2>
           </Reveal>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {capabilities.map((service, index) => (
              <Reveal key={index} delay={100} direction="up" width="100%">
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-8 border-b border-charcoal-800/50 hover:border-gold-500/30 transition-colors duration-700">
                  
                  {/* Number & Icon */}
                  <div className="lg:col-span-2 flex items-center lg:items-start gap-6 lg:flex-col lg:gap-8">
                    <span className="text-gold-500/30 font-serif text-4xl italic group-hover:text-gold-500/70 transition-colors duration-500">
                      {service.num}
                    </span>
                    <div className="p-4 bg-[inherit] rounded-full border border-charcoal-800 group-hover:border-gold-500/50 transition-colors duration-500">
                      <service.icon className="w-6 h-6 text-gold-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 flex flex-col md:flex-row gap-6 md:gap-16 justify-between lg:items-center">
                    <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-gold-400 transition-colors duration-500 w-full md:w-1/3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed text-lg max-w-2xl w-full md:w-2/3">
                      {service.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-900 to-[#0C0C0B] flex flex-col items-center justify-center text-center px-6 border-t border-gold-500/10">
        <Reveal direction="up">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block mb-6 font-light">Initiate Mandate</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 tracking-tight">Ready to Execute?</h2>
          <Button onClick={() => navigate(PageRoutes.CONTACT)}>Draft Your Brief</Button>
        </Reveal>
      </section>
    </Layout>
  );
};