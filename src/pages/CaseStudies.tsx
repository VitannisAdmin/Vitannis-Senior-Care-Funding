import { motion } from 'motion/react';

export default function CaseStudiesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Proven Success Stories</h1>
          <p className="text-lg text-gray-300">Real examples of families securing care and protecting their legacy.</p>
        </div>
      </div>

      <section className="py-20 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Simplified Case Study 1: George */}
          <div className="bg-white rounded-3xl shadow-corporate border border-gray-100 overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="font-heading text-3xl font-bold text-brand-dark mb-2">George, Age 82</h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base">Assisted Living Facility • <strong className="text-brand-dark">$350,000</strong> in Total Savings</p>
                </div>
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold border border-red-100 text-sm whitespace-nowrap">
                  Annual Out of Pocket Cost: $45,000
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Projected 5-Year Cost</p>
                  <p className="text-3xl font-heading font-bold text-red-500 mb-2">$225,000</p>
                  <p className="text-xs text-gray-400">Paying Out-of-Pocket</p>
                </div>
                <div className="bg-brand-dark rounded-2xl p-6 border border-brand-accent/30 text-center text-white shadow-xl transform md:-translate-y-4 relative flex flex-col justify-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm w-max">The ICP Solution</div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-3 mt-2">One-Time Premium</p>
                  <p className="text-4xl font-heading font-bold text-brand-accent mb-2">$121,275</p>
                  <p className="text-xs text-gray-400">Guarantees Care for Life</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-green-700 font-bold uppercase tracking-wider mb-3">Legacy Preserved</p>
                  <p className="text-3xl font-heading font-bold text-green-600 mb-2">$103,725</p>
                  <p className="text-xs text-green-600/70">Saved over 5 Years</p>
                </div>
              </div>

              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 font-medium text-base leading-relaxed">
                  Instead of draining $225,000 from his savings over 5 years, George paid a single premium of <strong className="text-brand-dark">$121,275</strong>. His care is now guaranteed for life, and his remaining <strong className="text-brand-accent">$228,725</strong> is completely protected for his grandchildren.
                </p>
              </div>
            </div>
          </div>

          {/* Simplified Case Study 2: Lynne */}
          <div className="bg-white rounded-3xl shadow-corporate border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="font-heading text-3xl font-bold text-brand-dark mb-2">Lynne, Age 84</h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base">Vascular Dementia • <strong className="text-brand-dark">$350,000</strong> in Total Savings</p>
                </div>
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold border border-red-100 text-sm whitespace-nowrap">
                  Annual Out of Pocket Cost: $60,000
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Projected 5-Year Cost</p>
                  <p className="text-3xl font-heading font-bold text-red-500 mb-2">$300,000</p>
                  <p className="text-xs text-gray-400">Paying Out-of-Pocket</p>
                </div>
                <div className="bg-brand-dark rounded-2xl p-6 border border-brand-accent/30 text-center text-white shadow-xl transform md:-translate-y-4 relative flex flex-col justify-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm w-max">The ICP Solution</div>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-3 mt-2">One-Time Premium</p>
                  <p className="text-4xl font-heading font-bold text-brand-accent mb-2">$225,008</p>
                  <p className="text-[10px] text-gray-400">Guarantees Care for Life (w/ 5% COLA)</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center flex flex-col justify-center">
                  <p className="text-xs text-green-700 font-bold uppercase tracking-wider mb-3">Legacy Preserved</p>
                  <p className="text-3xl font-heading font-bold text-green-600 mb-2">$74,992</p>
                  <p className="text-xs text-green-600/70">Saved over 5 Years</p>
                </div>
              </div>

              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 font-medium text-base leading-relaxed">
                  Instead of bleeding $300,000 to cover her shortfall, Lynne paid a single premium of <strong className="text-brand-dark">$225,008</strong>. Her care is guaranteed forever regardless of inflation, and her remaining <strong className="text-brand-accent">$124,992</strong> is safely protected for her sons.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
