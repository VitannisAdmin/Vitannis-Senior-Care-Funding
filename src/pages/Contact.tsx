import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Send, Mail } from 'lucide-react';

export default function ContactPage() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Obfuscate phone number to prevent scraping
    setPhone(atob('ODQzLTYyOC02MzM2'));
    // Obfuscate email to prevent scraping
    setEmail(atob('aW5mb0B2aXRhbm5pcy5jb20='));
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get Your Free Evaluation</h1>
          <p className="text-lg text-gray-300">Speak with a specialist to calculate your true Care Gap and receive custom ICP pricing.</p>
        </div>
      </div>

      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-corporate border border-gray-100 flex flex-col lg:flex-row max-w-5xl mx-auto">
            
            {/* Info Side */}
            <div className="lg:w-5/12 p-10 md:p-16 bg-brand-dark text-white relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="mb-12">
                  <h2 className="font-heading text-3xl font-bold mb-4">Secure Your Family's Future Today.</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">Fill out the brief form to request a no-obligation evaluation. Because ICPs are individually underwritten, our specialists will need to gather basic health information to provide an accurate quote.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-brand-light p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us Direct</p>
                      <p className="font-bold text-lg">
                        <a href={`tel:${phone}`} className="hover:text-brand-accent transition-colors">
                          {phone || 'Loading...'}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-brand-light p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Email Us</p>
                      <p className="font-bold text-sm">
                        <a href={`mailto:${email}`} className="hover:text-brand-accent transition-colors">
                          {email || 'Loading...'}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-brand-light p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Headquarters</p>
                      <p className="font-bold text-sm">Charleston, SC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-7/12 p-10 md:p-16">
              <h3 className="font-heading text-2xl font-bold text-brand-dark mb-6">Evaluation Request Form</h3>
              <form name="evaluation-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5">
                <p className="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="form-name" value="evaluation-request" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-1">Primary Interest</label>
                  <select id="interest" name="interest" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none bg-gray-50 focus:bg-white">
                    <option value="The ICP Annuity (Currently in care)">The ICP Annuity (Currently in care)</option>
                    <option value="Life Settlements">Life Settlements</option>
                    <option value="Reverse Mortgages / Home Equity">Reverse Mortgages / Home Equity</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Brief details about the care situation</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow resize-none bg-gray-50 focus:bg-white" placeholder="E.g., Mom is 84 and just moved into memory care..."></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-dark hover:bg-brand-light text-white font-bold py-4 px-6 rounded-md transition-colors shadow-lg mt-2 flex justify-center items-center">
                  Submit Request <Send className="h-4 w-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
