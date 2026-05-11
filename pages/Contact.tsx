import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';


const ghlWebhookUrl = 'https://services.leadconnectorhq.com/hooks/H7NNnJKSofGaRJHTkAd3/webhook-trigger/758d1eed-9514-4351-a938-802e941b83fe';
const quizDestinationUrl = 'https://crm.npcservices.com.au/quiz';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acquisitionBrief: string;
}

const initialFormState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  acquisitionBrief: '',
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const updateField = (field: keyof ContactFormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(ghlWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          phone: formState.phone,
          acquisitionBrief: formState.acquisitionBrief,
          source: 'NPC Website Contact Form',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit enquiry.');
      }

      window.location.href = quizDestinationUrl;
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError('We were unable to submit your enquiry. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

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
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formState.firstName}
                        onChange={updateField('firstName')}
                        required
                        autoComplete="given-name"
                        className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formState.lastName}
                        onChange={updateField('lastName')}
                        required
                        autoComplete="family-name"
                        className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={updateField('email')}
                      required
                      autoComplete="email"
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Contact Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={updateField('phone')}
                      required
                      autoComplete="tel"
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500"
                      placeholder="+61 400 000 000"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-2">Acquisition Brief</label>
                    <textarea 
                      rows={5} 
                      name="acquisitionBrief"
                      value={formState.acquisitionBrief}
                      onChange={updateField('acquisitionBrief')}
                      required
                      className="w-full bg-charcoal-950/50 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 focus:bg-charcoal-950 transition-all duration-500 resize-none"
                      placeholder="Outline your investment objectives or specific property interests."
                    ></textarea>
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-300 bg-red-950/30 border border-red-500/30 px-4 py-3" role="alert">
                      {submitError}
                    </p>
                  )}

                  <div className="pt-4">
                    <Button fullWidth type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </Button>
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
                <div className="flex items-end justify-between gap-6 mb-8 border-b border-gold-500/20 pb-5">
                  <div>
                    <span className="text-gold-500 text-[10px] uppercase tracking-[0.25em] font-light block mb-3">Coverage Map</span>
                    <h3 className="text-white font-serif text-3xl tracking-tight">Location Service</h3>
                  </div>
                  <span className="hidden sm:inline-flex text-gold-500/60 text-[10px] uppercase tracking-[0.2em] border border-gold-500/20 rounded-full px-4 py-2">By Appointment</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { city: 'Sydney', region: 'New South Wales' },
                    { city: 'Melbourne', region: 'Victoria' },
                    { city: 'Brisbane', region: 'Queensland' },
                    { city: 'Perth', region: 'Western Australia' },
                    { city: 'Adelaide', region: 'South Australia' },
                  ].map((location) => (
                    <div key={location.city} className="group border border-gold-500/15 bg-charcoal-950/40 p-5 transition-all duration-500 hover:translate-x-1 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-gold-500/[0.06] hover:shadow-[0_14px_45px_rgba(194,163,100,0.12)]">
                      <h4 className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-3 group-hover:text-gold-300 transition-colors">{location.city}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{location.region}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};