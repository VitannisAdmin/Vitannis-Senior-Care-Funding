import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, AlertTriangle, ShieldCheck, Users, FileText, Home, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero Section */}
      <section className="relative pt-5 pb-10 lg:pt-8 lg:pb-16 hero-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent mr-3"></span>
              <span className="text-xs font-semibold tracking-wider text-white uppercase">For families self-funding LTC</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Immediate Care Plan Solution
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed font-semibold max-w-2xl">
              Reduce long-term care expenses with<br />the Immediate Care Plan (ICP).
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cost-journey" className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm text-brand-dark bg-brand-accent hover:bg-white transition-all shadow-lg shadow-brand-accent/20">
                The Cost Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/icp-solution" className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm text-white border border-white/30 hover:bg-white/10 transition-all">
                How The ICP Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-brand-dark py-10 md:py-14 relative z-20 border-b border-white/5 shadow-corporate">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-yellow-200"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">How the Immediate Care Plan Works</h2>
          <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-10 lg:gap-16">
            <li className="flex items-center">
              <CheckCircle className="h-7 w-7 text-brand-accent mr-4 flex-shrink-0" />
              <p className="font-heading text-xl md:text-2xl font-bold text-white">
                Secures <span className="text-brand-accent">lifetime LTC funding</span> with a single transaction
              </p>
            </li>
            <li className="hidden md:block w-px h-12 bg-white/10" aria-hidden="true" role="presentation"></li>
            <li className="flex items-center">
              <CheckCircle className="h-7 w-7 text-brand-accent mr-4 flex-shrink-0" />
              <p className="font-heading text-xl md:text-2xl font-bold text-white">
                Dramatically lowers <span className="text-brand-accent">Care Costs</span>
              </p>
            </li>
            <li className="hidden md:block w-px h-12 bg-white/10" aria-hidden="true" role="presentation"></li>
            <li className="flex items-center">
              <CheckCircle className="h-7 w-7 text-brand-accent mr-4 flex-shrink-0" />
              <p className="font-heading text-xl md:text-2xl font-bold text-white">
                Preserves your <span className="text-brand-accent">legacy</span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">The Smart Way to Fund LTC</h2>
            <p className="text-gray-600 text-lg">A specialized, turn-key solution designed for those currently receiving, or imminently requiring, Long-Term Care services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 hover:shadow-corporate transition-all duration-300">
              <AlertTriangle className="h-10 w-10 text-brand-accent mb-6" />
              <h3 className="font-heading font-bold text-xl mb-3">The LTC Cost Crisis</h3>
              <p className="text-gray-600 text-sm mb-6">Families are rapidly depleting lifetimes of savings to cover an average cost of $111,000 per year. Discover how quickly traditional assets run dry.</p>
              <Link to="/cost-journey" className="text-brand-dark font-semibold text-sm hover:text-brand-accent flex items-center">Read the Math <ChevronRight className="h-4 w-4 ml-1" /></Link>
            </div>
            <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Primary Solution</div>
              <ShieldCheck className="h-10 w-10 text-brand-accent mb-6" />
              <h3 className="font-heading font-bold text-xl mb-3">The ICP Annuity</h3>
              <p className="text-gray-300 text-sm mb-6">A single transaction that eliminates logistical headaches and guarantees lifelong facility payments <strong className="text-brand-accent">at a massive discount</strong> compared to paying out-of-pocket.</p>
              <Link to="/icp-solution" className="text-brand-accent font-semibold text-sm hover:text-white flex items-center">Explore the ICP <ChevronRight className="h-4 w-4 ml-1" /></Link>
            </div>
            <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 hover:shadow-corporate transition-all duration-300">
              <Users className="h-10 w-10 text-brand-accent mb-6" />
              <h3 className="font-heading font-bold text-xl mb-3">Real Case Studies</h3>
              <p className="text-gray-600 text-sm mb-6">See how real families capped their out-of-pocket expenses, saved hundreds of thousands of dollars, and secured peace of mind for their loved ones.</p>
              <Link to="/case-studies" className="text-brand-dark font-semibold text-sm hover:text-brand-accent flex items-center">View Case Studies <ChevronRight className="h-4 w-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Journey Summary */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">The Financial Reality</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">The Journey of Self-Funding LTC</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Without a guaranteed plan, families who pay out-of-pocket undergo an unwinding of their wealth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="hidden md:block absolute top-[45%] left-10 right-10 h-0.5 bg-brand-accent/20 -z-10"></div>
            {/* Cards 1-3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm text-brand-dark font-heading font-bold text-2xl group-hover:bg-brand-dark group-hover:text-brand-accent transition-colors">1</div>
              <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">The Care-Cost Gap</h4>
              <p className="text-gray-600 text-sm leading-relaxed">The journey begins when monthly facility <strong className="text-brand-accent">costs vastly exceed a loved one's fixed income</strong>, forcing families to start withdrawing thousands from savings every month.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm text-brand-dark font-heading font-bold text-2xl group-hover:bg-brand-dark group-hover:text-brand-accent transition-colors">2</div>
              <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">The Cost Multipliers</h4>
              <p className="text-gray-600 text-sm leading-relaxed">The drain rapidly accelerates over time due to two silent factors: <strong className="text-brand-accent">medical inflation</strong> along with <strong className="text-brand-accent">needs-based price increases</strong> as health progressively declines.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-red-50 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm text-red-500 font-heading font-bold text-2xl group-hover:bg-red-500 group-hover:text-white transition-colors">3</div>
              <h4 className="font-heading font-bold text-xl text-brand-dark mb-3">The Breaking Point</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Often, assets run critically low. This either <strong className="text-brand-accent">wipes out the family legacy</strong>, or <strong className="text-brand-accent">forces an eviction</strong> from their preferred situation.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/cost-journey" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors">
              Read the full Cost Journey Breakdown <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Proven Impact</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Securing Care, Saving Hundreds of Thousands</h3>
          </div>
          <div className="bg-white text-brand-dark rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="font-heading text-3xl font-bold text-brand-dark mb-2">George, Age 82</h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base">Assisted Living Facility • <strong className="text-brand-dark">$55,000</strong> Annual Out of Pocket Cost</p>
                </div>
                <div className="bg-brand-surface text-brand-dark px-4 py-2 rounded-lg font-bold border border-gray-200 text-sm whitespace-nowrap">
                  $305,000 in Total Savings
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Projected 5-Year Cost</p>
                  <p className="text-3xl font-heading font-bold text-red-500 mb-2">$275,000</p>
                  <p className="text-xs text-gray-400">Paying Out-of-Pocket</p>
                </div>
                <div className="bg-brand-dark rounded-2xl p-6 border border-brand-accent/30 text-center text-white shadow-xl transform md:-translate-y-2 relative flex flex-col justify-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm w-max">The ICP Solution</div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-3 mt-2">One-Time Premium</p>
                  <p className="text-4xl font-heading font-bold text-brand-accent mb-2">$121,275</p>
                  <p className="text-xs text-gray-400">Guarantees Care for Life</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-green-700 font-bold uppercase tracking-wider mb-3">Legacy Preserved</p>
                  <p className="text-3xl font-heading font-bold text-green-600 mb-2">$153,725</p>
                  <p className="text-xs text-green-600/70">Saved over 5 Years</p>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto bg-brand-surface p-5 rounded-xl border border-gray-200">
                <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                  Instead of draining $275,000 from his savings over 5 years, George paid a single premium of <strong className="text-brand-dark">$121,275</strong>. His care expenses are guaranteed for life, and his remaining <strong className="text-brand-accent">$183,725</strong> is completely protected for his grandchildren.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/case-studies" className="inline-flex items-center text-brand-accent font-bold hover:text-white transition-colors">
              View More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alternative Solutions */}
      <section className="py-24 bg-brand-surface border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Comprehensive Planning</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">Alternative Liquidity Solutions</h3>
            <p className="text-lg text-gray-600">If capital is tied up in a home or life insurance, we provide specialized alternative mechanisms to generate the cash needed to fund an ICP or cover immediate care needs.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-corporate border border-gray-100 max-w-3xl mx-auto">
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="bg-brand-dark/5 p-3 rounded-full mr-5 flex-shrink-0 mt-1">
                  <FileText className="h-6 w-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">Life Settlements</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Convert an existing, no-longer-needed permanent or term life insurance policy into an immediate, tax-advantaged lump sum of cash to pay for care.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-dark/5 p-3 rounded-full mr-5 flex-shrink-0 mt-1">
                  <Home className="h-6 w-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">Reverse Mortgages</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Safely unlock a portion of your home's equity to generate tax-free cash for care, without ever taking on a new monthly mortgage payment.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-dark/5 p-3 rounded-full mr-5 flex-shrink-0 mt-1">
                  <Landmark className="h-6 w-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">Home Equity Investments</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Receive debt-free cash today in exchange for a share of your property's future value—a powerful tool for generating liquidity without incurring interest charges.</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <Link to="/other-funding" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors">
                Learn more about alternative methods <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
