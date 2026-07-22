import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Activity, Lightbulb, ShieldCheck, Anchor, HeartHandshake, Users, Calculator, ArrowRight } from 'lucide-react';

export default function CostJourneyPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">The Financial Journey</h1>
          <p className="text-lg text-gray-300">Understanding the true financial, emotional, and physical timeline of self-funding Long-Term Care.</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">The Anatomy of Asset Depletion</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Many families begin the long-term care journey feeling financially secure, armed with savings, CDs, and home equity. However, the reality of self-funding is a progressive, accelerating unwinding of wealth.
            </p>
          </div>

          <div className="space-y-24">
            {/* Stage 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative border border-gray-100">
              <div className="absolute -top-8 -left-4 md:-left-8 w-16 h-16 bg-brand-dark text-brand-accent rounded-2xl flex items-center justify-center font-heading text-3xl font-bold shadow-lg border-4 border-gray-50">
                1
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4">
                <div>
                  <h3 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">The Starting Line</h3>
                  <h4 className="font-heading text-3xl font-bold text-brand-dark mb-6">The Funding Gap</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The journey typically begins when a loved one enters a private care facility. Most families quickly realize that guaranteed income (like Social Security and pensions) rarely covers the full monthly cost.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At this stage, families generally feel okay. A $500,000 portfolio seems large enough to handle a recurring deficit for nearly a decade. But this math relies on a dangerous assumption: that costs will remain static.
                  </p>
                </div>
                <div className="bg-brand-surface rounded-2xl p-8 border border-gray-200 shadow-inner text-center">
                  <h5 className="font-heading font-bold text-gray-500 mb-6 uppercase tracking-wider text-sm">Example Scenario</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-gray-600 font-medium">Care Cost</span>
                      <span className="font-bold text-brand-dark">$8,000/mo</span>
                    </div>
                    <div className="flex justify-between items-center text-lg border-b border-gray-300 pb-4">
                      <span className="text-gray-600 font-medium">Client Income</span>
                      <span className="font-bold text-brand-dark">-$3,500/mo</span>
                    </div>
                    <div className="pt-2">
                      <span className="block text-sm text-gray-500 font-medium uppercase mb-1">Annual Drain on Savings</span>
                      <span className="text-4xl font-heading font-bold text-red-500">$54,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative border border-gray-100">
              <div className="absolute -top-8 -left-4 md:-left-8 w-16 h-16 bg-brand-dark text-brand-accent rounded-2xl flex items-center justify-center font-heading text-3xl font-bold shadow-lg border-4 border-gray-50">
                2
              </div>
              <div className="pt-4 mb-8">
                <h3 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">The Accelerators</h3>
                <h4 className="font-heading text-3xl font-bold text-brand-dark mb-4">The Silent Multipliers</h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                  The initial "Funding Gap" never stays flat. Two inevitable multipliers begin to compound, dramatically accelerating the rate at which assets are drained.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <TrendingUp className="h-8 w-8 text-brand-accent mb-4" />
                  <h5 className="font-heading font-bold text-xl text-brand-dark mb-3">Medical Inflation</h5>
                  <p className="text-gray-600 leading-relaxed">Historically, facility care costs rise annually. A 5% inflation rate compounds quickly, forcing families to withdraw increasingly larger sums from their portfolios each year.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <Activity className="h-8 w-8 text-brand-accent mb-4" />
                  <h5 className="font-heading font-bold text-xl text-brand-dark mb-3">Needs-Based Increases</h5>
                  <p className="text-gray-600 leading-relaxed">As conditions (like dementia) progress, residents require a higher tier of care. Moving from Assisted Living to Memory Care instantly adds $2,000 to $4,000 to the monthly bill.</p>
                </div>
              </div>
              <div className="bg-brand-surface rounded-xl p-6 border-l-4 border-brand-accent flex items-start shadow-sm">
                <Lightbulb className="h-6 w-6 text-brand-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h6 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-1">Vitannis Advisory Insight</h6>
                  <p className="text-gray-700 font-medium">An Immediate Care Plan can be structured with built-in Cost of Living Adjustments (COLA) to automatically keep pace with rising facility rates, completely neutralizing the inflation multiplier.</p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative border border-gray-100">
              <div className="absolute -top-8 -left-4 md:-left-8 w-16 h-16 bg-brand-dark text-brand-accent rounded-2xl flex items-center justify-center font-heading text-3xl font-bold shadow-lg border-4 border-gray-50">
                3
              </div>
              <div className="pt-4 mb-10">
                <h3 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">The Danger Zone</h3>
                <h4 className="font-heading text-3xl font-bold text-brand-dark mb-6">Running Low & Emotional Toll</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Years into the journey, compounding costs severely damage the portfolio. The emotional toll spikes as the Power of Attorney (POA) and adult children are forced to start liquidating "sacred" assets—cashing out legacy CDs, selling off stock in a down market, or preparing to sell the family home.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  For families with limited funds, the math becomes terrifying: if the resident outlives the remaining money, they will lose their ability to private-pay. But even for the affluent, watching hundreds of thousands of dollars evaporate creates immense anxiety, resentment, and family friction.
                </p>
              </div>
              <div className="bg-brand-dark rounded-xl p-6 border-l-4 border-brand-accent flex items-start shadow-md text-white">
                <ShieldCheck className="h-6 w-6 text-brand-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h6 className="font-bold text-brand-accent text-sm uppercase tracking-wider mb-1">Vitannis Advisory Insight</h6>
                  <p className="text-gray-300 font-medium">Securing lifetime funding early shifts the massive risk of unknown longevity entirely away from the family and onto a highly-rated financial institution. It removes the emotional burden of watching an estate drain.</p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative border border-red-100">
              <div className="absolute -top-8 -left-4 md:-left-8 w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center font-heading text-3xl font-bold shadow-lg border-4 border-gray-50 animate-pulse">
                4
              </div>
              <div className="pt-4 mb-10 text-center">
                <h3 className="font-heading text-sm font-bold tracking-widest text-red-500 uppercase mb-2">The Final Stage</h3>
                <h4 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">Two Difficult Paths</h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Depending on a family's total accumulated wealth, the final stage of self-funding typically results in one of two deeply painful outcomes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4">Middle-Class Families</div>
                  <h5 className="font-heading font-bold text-2xl text-brand-dark mb-4">The Care Crisis</h5>
                  <p className="text-gray-700 leading-relaxed">
                    When assets are depleted to state minimums, the resident must transition to Medicaid. Because many preferred private-pay facilities do not accept Medicaid, the resident is often forced to leave their home. This causes <strong className="text-red-600">"Transfer Trauma"</strong>—a sharp physical and cognitive decline caused by forced eviction and adapting to a lower-tier facility.
                  </p>
                </div>
                <div className="bg-brand-surface rounded-2xl p-8 border border-brand-dark/10">
                  <div className="bg-brand-dark/10 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4">Affluent Families</div>
                  <h5 className="font-heading font-bold text-2xl text-brand-dark mb-4">The Legacy Erosion</h5>
                  <p className="text-gray-700 leading-relaxed">
                    For families with substantial wealth, the fear isn't eviction—it's the massive, unchecked bleed of the estate. Over a typical 3 to 5 year period, out-of-pocket costs can easily <strong className="text-brand-dark">drain $300,000 to $500,000+</strong>. This severely impacts a surviving spouse's lifestyle and completely erases the financial legacy intended for children.
                  </p>
                </div>
              </div>
              <div className="bg-brand-surface rounded-xl p-6 border-l-4 border-brand-accent flex items-start shadow-sm">
                <Anchor className="h-6 w-6 text-brand-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h6 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-1">Vitannis Advisory Insight</h6>
                  <p className="text-gray-700 font-medium">The Immediate Care Plan acts as a definitive financial "stop-loss." It guarantees lifelong payments to prevent eviction (Path A), while simultaneously capping costs at a massive discount, often retaining hundreds of thousands of dollars in the estate (Path B).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ripple Effect */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Collateral Damage</h2>
            <h3 className="font-heading text-4xl font-bold text-brand-dark mb-6">The Ripple Effect</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The journey of asset depletion rarely isolates itself to the person receiving care. It severely impacts the entire family structure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-dark text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <HeartHandshake className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <HeartHandshake className="h-12 w-12 text-brand-accent mb-6" />
                <h4 className="font-heading font-bold text-3xl mb-6">The Healthy Spouse</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  When one spouse requires high-level care, the "healthy" spouse remaining at home faces the terrifying prospect of <strong>Spousal Impoverishment</strong>. As joint life savings are drained to pay the facility, the healthy spouse is left with a drastically reduced standard of living, jeopardized retirement plans, and diminished assets to fund their own future care needs.
                </p>
                <div className="bg-white/10 p-5 rounded-xl border border-white/20">
                  <p className="text-sm text-brand-accent font-medium leading-relaxed">
                    <strong className="text-white">The Solution:</strong> Capping the cost of care for the ailing partner preserves the remaining portfolio, ensuring the healthy spouse's lifestyle, financial independence, and peace of mind remain protected.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-brand-surface border border-gray-200 rounded-3xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <Users className="w-64 h-64 text-brand-dark" />
              </div>
              <div className="relative z-10">
                <Users className="h-12 w-12 text-brand-dark mb-6" />
                <h4 className="font-heading font-bold text-3xl text-brand-dark mb-6">The Adult Children</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  When parent funds run low, adult children step in. This creates the "Caregiver Penalty." Beyond extreme emotional burnout, adult children often face career stagnation, take unpaid leaves of absence, or worse, begin draining their own retirement or their children's college funds to keep their parents in a quality facility.
                </p>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm text-brand-dark font-medium leading-relaxed">
                    <strong className="text-brand-accent">The Solution:</strong> Turning a chaotic, endless monthly bill into a single, predictable transaction gives adult children their lives back—allowing them to return to being family, rather than financiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 2.5 Year Tipping Point */}
      <section className="py-24 bg-brand-dark text-white border-t border-brand-accent/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div className="bg-brand-accent/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg border border-brand-accent/30">
              <Calculator className="h-12 w-12 text-brand-accent" />
            </div>
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">The Mathematical Reality</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8">The 2.5 Year Tipping Point</h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Statistically, residents in private-pay facilities require care for an average of <strong>3 to 5 years</strong>. Because the Immediate Care Plan utilizes customized medical underwriting, the required one-time premium typically equates to just <strong className="text-white border-b-2 border-brand-accent">2.5 years of out-of-pocket care costs</strong>.
            </p>
            <div className="bg-white text-brand-dark rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-xl md:text-2xl font-heading font-bold leading-relaxed">
                Since most families will inevitably pay for those first 2.5 years out-of-pocket anyway, the ICP allows you to secure that cost upfront. 
              </p>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                In return, the policy guarantees that <strong className="text-brand-accent text-xl">all subsequent care—years 3, 4, 5, and beyond—is fully funded by the insurance carrier</strong>, effectively eliminating the risk of long-term asset depletion.
              </p>
            </div>
            <div className="mt-16">
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-sm text-brand-dark bg-brand-accent hover:bg-white transition-all shadow-lg shadow-brand-accent/20">
                Calculate Your Custom Tipping Point
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
