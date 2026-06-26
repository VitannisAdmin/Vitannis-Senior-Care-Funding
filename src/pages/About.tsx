import { motion } from 'motion/react';
import { Award, Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Vitannis</h1>
          <p className="text-lg text-gray-300">Dedicated to bringing innovative financial security to families navigating senior care.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.pexels.com/photos/7821342/pexels-photo-7821342.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Consultation with a senior care funding specialist" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Our Mission</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">Protecting Families. Preserving Legacies.</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Vitannis Senior Care Funding operates on a simple premise: no one should have to sacrifice their hard-earned legacy or risk outliving their assets to receive the high-quality care they deserve. 
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                By bringing the Immediate Care Plan to the United States—a structure that has been the primary method for funding private care in the UK for decades—we provide families with certainty in highly uncertain times.
              </p>
              
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-dark p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-brand-dark">Unwavering Financial Strength</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  When it comes to guaranteeing lifelong payments, the financial stability of the provider is paramount. You need certainty that the checks will clear for the rest of your loved one's life.
                </p>
                <ul className="space-y-3 text-sm text-brand-dark font-medium">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" /> Our primary ICP Annuity is provided by Plateau Insurance (dba Lumos Assurance).</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" /> Lumos Assurance holds an A- (Excellent) rating by AM Best.</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" /> Backed by a global reinsurance company absorbing up to 90% of the longevity risk.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-brand-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Leadership & Advisory</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">Meet Our Expert Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our advisors bring decades of specialized experience in insurance, senior care, and wealth preservation to help your family navigate the complexities of long-term care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Thomas Deleot */}
            <div className="bg-white rounded-2xl p-8 shadow-corporate border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-brand-surface shadow-inner relative">
                <img src="https://res.cloudinary.com/dqazb2m7w/image/upload/v1781702788/1516628039111_avnjfc.jpg" alt="Thomas Deleot" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-brand-dark mb-1">Thomas Deleot</h4>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">Senior Chairman</p>
              <p className="text-gray-600 text-sm leading-relaxed">Serving as the firm's Senior Chairman, Tom leverages over 50 years of industry experience. A trusted advisor to countless families and business owners, his profound life experience and strategic foresight guide our firm's mission in long-term care protection.</p>
            </div>

            {/* Tyler Maddox */}
            <div className="bg-white rounded-2xl p-8 shadow-corporate border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 transform md:-translate-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-brand-surface shadow-inner relative">
                <img src="https://res.cloudinary.com/dqazb2m7w/image/upload/v1781702788/1712848344163_po3k2d.jpg" alt="Tyler Maddox" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-brand-dark mb-1">Tyler Maddox</h4>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">Senior Advisor</p>
              <p className="text-gray-600 text-sm leading-relaxed">With 20 years of specialized experience in insurance and long-term care planning, Tyler is an analytical problem-solver. He excels at optimizing funding solutions, ensuring families find the most efficient financial path during a care crisis.</p>
            </div>

            {/* Forrest Deleot */}
            <div className="bg-white rounded-2xl p-8 shadow-corporate border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-brand-surface shadow-inner relative">
                <img src="https://res.cloudinary.com/dqazb2m7w/image/upload/v1782499052/unnamed_motimy.png" alt="Forrest Deleot" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-brand-dark mb-1">Forrest Deleot</h4>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">Senior Advisor</p>
              <p className="text-gray-600 text-sm leading-relaxed">A compassionate and dedicated advisor, Forrest brings invaluable expertise from his background in Medicare and senior care communities. His empathetic, client-first approach makes him uniquely suited to help families navigate complex care transitions.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
