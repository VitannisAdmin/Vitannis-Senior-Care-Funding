import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Shield, TrendingDown, Home, XCircle, Minus } from 'lucide-react';

export default function IcpSolutionPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">The Immediate Care Plan</h1>
          <p className="text-lg text-gray-300">A turn-key solution to guarantee lifetime funding and eliminate financial fear.</p>
        </div>
      </div>

      <section className="pt-20 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">What is it?</h2>
              <h3 className="font-heading text-3xl font-bold text-brand-dark mb-6">Guaranteed Funding for Life</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Immediate Care Plan (ICP) is a specialized annuity exclusively designed for those already receiving long-term care services (in a facility, at home, or via family care). 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This proven financial structure has been the primary method used by families in the UK for over 40 years. Now available in the US, it fills the exact gap between guaranteed income sources and facility charges.
              </p>
              
              <ul className="space-y-6">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-brand-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-dark font-heading">Massive Discount vs Out-of-Pocket</h4>
                    <p className="text-gray-600 text-sm mt-1">Pay for care costs at significantly less than the cumulative out-of-pocket rate, saving substantial money over a typical 3-5 year period.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-brand-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-dark font-heading">Turn-Key Administration</h4>
                    <p className="text-gray-600 text-sm mt-1">A single transaction sets up direct payments to the facility. This eliminates logistical headaches, allowing POA and family to focus on care, not finances.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-brand-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-dark font-heading">Preserves the Family Legacy</h4>
                    <p className="text-gray-600 text-sm mt-1">By capping the maximum lifetime cost of care with one known premium, the remainder of the estate is insulated and guaranteed to pass to heirs.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Underwriting Advantage */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-gray-100 shadow-corporate">
              <h4 className="font-heading text-2xl font-bold mb-2 text-brand-dark">The Decisive Advantage: Personalized Pricing</h4>
              <p className="text-gray-600 text-sm mb-6">Why the ICP is vastly more efficient than paying out-of-pocket.</p>

              <div className="bg-brand-dark p-6 rounded-xl border border-brand-accent/30 shadow-md text-white">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-brand-accent mr-3" />
                  <h5 className="font-heading font-bold text-lg text-white">How It Works</h5>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  The Immediate Care Plan is tailored to your family's exact situation. We combine a brief assessment of the resident's current long-term care impairments with <strong>40 years of proprietary insurer data</strong>.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  This data allows the insurer to create a guaranteed income stream based specifically on the person's unique care needs. This highly customized approach results in <strong>substantial savings versus traditional draw-down methods</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-10 text-center">
            <h3 className="font-heading text-2xl font-bold text-center text-brand-dark mb-10">How the ICP Compares in the Market</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse min-w-[600px] max-w-4xl mx-auto shadow-sm border border-gray-100">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-600 font-bold uppercase text-xs w-1/3">Feature</th>
                    <th className="p-4 border-b-2 border-brand-accent bg-brand-dark text-brand-accent font-bold uppercase text-xs w-1/3">Immediate Care Plan (ICP)</th>
                    <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-gray-600 font-bold uppercase text-xs w-1/3">Traditional LTC Insurance</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Target Customer</td>
                    <td className="p-4 bg-brand-surface font-medium text-brand-dark border-x border-gray-100">Seniors receiving LTC services & their POA</td>
                    <td className="p-4 text-gray-600">Healthy individuals who <em>may</em> need LTC in the future</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Primary Objective</td>
                    <td className="p-4 bg-brand-surface font-medium text-brand-dark border-x border-gray-100">Lifetime Cost of Care Financing</td>
                    <td className="p-4 text-gray-600">Financing Potential Future Cost of Care</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">LTC Need Status</td>
                    <td className="p-4 bg-brand-surface font-medium text-brand-dark border-x border-gray-100"><span className="text-green-600 font-bold">Certain</span> - Immediate or Imminent</td>
                    <td className="p-4 text-gray-600">Uncertain - Future Date</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Average Issue Age</td>
                    <td className="p-4 bg-brand-surface font-medium text-brand-dark border-x border-gray-100">70+</td>
                    <td className="p-4 text-gray-600">55+</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Average Policy Duration</td>
                    <td className="p-4 bg-brand-surface font-medium text-brand-dark border-x border-gray-100">~3 to 5 years</td>
                    <td className="p-4 text-gray-600">15+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600 bg-brand-surface inline-flex mx-auto p-4 rounded-lg border border-gray-200">
              <div className="flex items-center"><Shield className="h-5 w-5 text-brand-accent mr-2" /> <strong>Protection Features Available:</strong></div>
              <div>Inflation Cost of Living Adjustments (COLA)</div>
              <div className="hidden md:block text-gray-300">|</div>
              <div>Return of Deposit (for early passing in years 1-10)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability Section */}
      <section className="pt-12 pb-24 bg-brand-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Who It Helps</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">Is the Immediate Care Plan Right for You?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The ICP is a highly specialized financial tool. It is incredibly effective for the right situation, but it is not a universal fit for everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Good Fit */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-corporate border-t-4 border-brand-accent hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 mr-4" />
                <h4 className="font-heading text-2xl font-bold text-brand-dark">An Ideal Fit For:</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <TrendingDown className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Families who want to significantly <strong>reduce the overall out-of-pocket cost</strong> of long-term care over a standard 3-5+ year period.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Individuals at risk of <strong>eroding their legacy</strong> and want to ensure a portion of the estate is preserved for their heirs.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <Home className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Residents in danger of spending down all assets and being <strong>forced to transfer to a Medicaid-funded facility</strong>.</p>
                </li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
              <div className="flex items-center mb-6 border-b border-gray-200 pb-4">
                <XCircle className="h-8 w-8 text-gray-400 mr-4" />
                <h4 className="font-heading text-2xl font-bold text-gray-600">Not a Good Fit For:</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Minus className="h-5 w-5 text-gray-400 mr-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Individuals with a projected <strong>life expectancy of under 2 years</strong>.</p>
                </li>
                <li className="flex items-start">
                  <Minus className="h-5 w-5 text-gray-400 mr-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Households with a <strong>total net worth under $100,000</strong> (including the value of their primary home).</p>
                </li>
                <li className="flex items-start">
                  <Minus className="h-5 w-5 text-gray-400 mr-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">People who <strong>do not have at least 2 ADL impairments</strong> (Activities of Daily Living) or severe cognitive impairment.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
