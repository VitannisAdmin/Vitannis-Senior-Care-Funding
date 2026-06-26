import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Calculator, TrendingUp, Home, HeartCrack, ShieldCheck, CalendarCheck, PiggyBank, Scale } from 'lucide-react';

export default function PoaSolutionsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero / Empathy Banner */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-yellow-200 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Shield className="h-4 w-4 text-brand-accent mr-2" />
              <span className="text-xs font-semibold tracking-wider text-white uppercase">A Solution for Adult Children & POA's</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Go Back to Being Family.<br/><span className="gradient-text">Stop Being the Financier.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Managing a parent's long-term care costs is an incredibly heavy burden. We provide a turn-key, guaranteed exit strategy from the financial unknown—securing their care and protecting their legacy.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-sm text-brand-dark bg-brand-accent hover:bg-white transition-all shadow-lg shadow-brand-accent/20">
              Get a Free Financial Evaluation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Acknowledge the Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-sm font-bold tracking-widest text-red-500 uppercase mb-3">The Caregiver Penalty</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">You didn't plan for this job, but here you are.</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                As a Power of Attorney, you carry a silent, immense pressure. Every month, you are forced to watch your parent's hard-earned savings drain to cover a massive facility bill that their fixed income can't touch.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                You do the "late-night math." You wonder what happens if the money runs out. You worry about <strong>Transfer Trauma</strong>—having to evict them from a facility they love and move them to a state-funded Medicaid home if the accounts hit zero.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <p className="text-brand-dark font-medium text-sm">
                  The anxiety of self-funding creates family friction and emotional burnout. It isn't just draining their estate; it's heavily impacting your own family's well-being.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-surface p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <Calculator className="h-10 w-10 text-brand-dark mx-auto mb-4 opacity-50" />
                <h4 className="font-heading font-bold text-lg text-brand-dark mb-2">The Monthly Math</h4>
                <p className="text-sm text-gray-600">The stress of liquidating assets and managing a negative cash flow every 30 days.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <TrendingUp className="h-10 w-10 text-brand-dark mx-auto mb-4 opacity-50" />
                <h4 className="font-heading font-bold text-lg text-brand-dark mb-2">Rising Costs</h4>
                <p className="text-sm text-gray-600">The fear of impending 5-8% annual facility price hikes eroding the budget faster.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <Home className="h-10 w-10 text-brand-dark mx-auto mb-4 opacity-50" />
                <h4 className="font-heading font-bold text-lg text-brand-dark mb-2">Eviction Risk</h4>
                <p className="text-sm text-gray-600">The terrifying reality of outliving the money and losing private-pay status.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <HeartCrack className="h-10 w-10 text-brand-dark mx-auto mb-4 opacity-50" />
                <h4 className="font-heading font-bold text-lg text-brand-dark mb-2">Legacy Loss</h4>
                <p className="text-sm text-gray-600">Watching the inheritance they worked their whole life to build vanish completely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Logical Pivot / The Solution */}
      <section className="py-24 bg-brand-surface border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">The Turn-Key Solution</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">Certainty is the Ultimate Relief.</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The Immediate Care Plan (ICP) shifts the financial risk completely away from your family and onto a highly-rated insurance carrier.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">1. One Known Cost</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You pay a single, medically-underwritten premium. No more monthly scrambling, no more liquidating assets at a loss. The ultimate cost of care is capped on day one.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CalendarCheck className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">2. Payments For Life</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The ICP pays out a guaranteed monthly income stream directly to the facility for the rest of your parent's life, completely neutralizing the risk of them outliving their money.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PiggyBank className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">3. Protected Estate</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Because the maximum cost of care is now fixed and known, whatever assets remain in the estate are immediately insulated and guaranteed to safely pass down to the family.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* The Mathematical Proof */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center justify-center p-4 bg-brand-accent/10 rounded-full mb-6">
            <Scale className="h-10 w-10 text-brand-accent" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">The 2.5 Year Tipping Point</h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            At minimum, if you continue paying out of pocket, <strong className="text-white">you will likely spend an amount equal to the ICP premium within the next 30 months anyway.</strong>
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-left mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <p className="text-lg text-gray-200 leading-relaxed mb-4">
                  Because the ICP leverages personalized medical underwriting, the one-time premium is typically equal to about <strong>2.5 years</strong> of their current care shortfall.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  If your parent needs care for 3, 5, or 8+ years, an ICP can yield <strong>hundreds of thousands of dollars</strong> in guaranteed payments above and beyond what you paid in, generating a massive financial victory for your family.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="text-center p-6 bg-brand-darker rounded-xl border border-brand-accent/20 shadow-lg">
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Average Stay</p>
                  <p className="text-4xl font-heading font-bold text-brand-accent mb-1">3 - 5</p>
                  <p className="text-sm text-gray-300">Years in a Facility</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-sm text-brand-dark bg-brand-accent hover:bg-white transition-all shadow-lg shadow-brand-accent/20">
            Let's Calculate Your Family's Strategy
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
