import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="pt-32 pb-10 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Begin the Conversation</h1>
            <p className="text-zinc-400 max-w-xl text-lg font-light">
              We invite you to a confidential discovery call to discuss your investment objectives and how NPC Services can assist.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-charcoal-900 p-8 md:p-12 border border-charcoal-800">
            <Reveal delay={200}>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-charcoal-950 border border-charcoal-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-charcoal-950 border border-charcoal-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-charcoal-950 border border-charcoal-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-charcoal-950 border border-charcoal-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Message / Brief</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-charcoal-950 border border-charcoal-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                  ></textarea>
                </div>

                <Button fullWidth onClick={(e) => e.preventDefault()}>Submit Enquiry</Button>
              </form>
            </Reveal>
          </div>

          {/* Contact Details */}
          <div className="space-y-12 py-12">
            <Reveal delay={400}>
              <div>
                <h3 className="text-white font-serif text-2xl mb-6">Contact Details</h3>
                <div className="space-y-4 text-zinc-400">
                  <p className="hover:text-gold-500 transition-colors cursor-pointer">advisory@npcservices.com.au</p>
                  <p className="hover:text-gold-500 transition-colors cursor-pointer">+61 2 9000 0000</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div>
                <h3 className="text-white font-serif text-2xl mb-6">Office Locations</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Sydney</h4>
                    <p className="text-zinc-500 text-sm">Level 35, Tower One<br/>International Towers<br/>Barangaroo NSW 2000</p>
                  </div>
                  <div>
                    <h4 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Melbourne</h4>
                    <p className="text-zinc-500 text-sm">101 Collins Street<br/>Melbourne VIC 3000</p>
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