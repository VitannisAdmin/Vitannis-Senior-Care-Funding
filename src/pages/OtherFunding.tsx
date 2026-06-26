import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Home, Landmark, ArrowRight } from 'lucide-react';

export default function OtherFundingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="page-header py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Alternative Funding Solutions</h1>
          <p className="text-lg text-gray-300">A comprehensive approach to ensuring every family finds a path forward.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600">
              While the Immediate Care Plan (ICP) is our premier solution for capping care costs, we recognize that asset liquidity varies by family. Vitannis Senior Care Funding provides access to a full suite of alternative funding mechanisms to generate the capital needed for care, or to fund an ICP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Life Settlements */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-brand-dark" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Life Settlements</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                A Life Settlement involves selling an existing, no-longer-needed life insurance policy to a third party for an immediate cash payout. The payout is greater than the surrender value, though less than the death benefit.
              </p>
              <h4 className="font-bold text-base text-gray-800 mb-2">Best For:</h4>
              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">Seniors who have permanent or term life insurance policies they can no longer afford to maintain, or who need liquidity immediately to pay for an Assisted Living facility.</p>
              <Link to="/contact" className="text-brand-accent hover:text-brand-dark font-bold text-base md:text-lg flex items-center transition-colors">
                Inquire About Life Settlements <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>

            {/* Reverse Mortgages */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-brand-dark" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Reverse Mortgages</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Homeowners 62 and older can convert a portion of their home equity into tax-free cash without having to sell the home or take on monthly mortgage payments. The loan is repaid when the last borrower leaves the home.
              </p>
              <h4 className="font-bold text-base text-gray-800 mb-2">Best For:</h4>
              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">Seniors whose primary wealth is tied up in their real estate, and who plan to receive in-home care (or if a healthy spouse remains in the home while the other moves to a facility).</p>
              <Link to="/contact" className="text-brand-accent hover:text-brand-dark font-bold text-base md:text-lg flex items-center transition-colors">
                Inquire About Reverse Mortgages <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>

            {/* Home Equity Investments */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-brand-dark" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Home Equity Investments</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Receive a lump sum of cash today in exchange for a share of your home's future value. Unlike a loan or mortgage, there are absolutely no monthly payments or interest charges. It is an investment in your property.
              </p>
              <h4 className="font-bold text-base text-gray-800 mb-2">Best For:</h4>
              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">Homeowners who do not qualify for, or do not want, debt-based products like Reverse Mortgages or HELOCs, but desperately need to tap into their home's value to fund an ICP Annuity.</p>
              <Link to="/contact" className="text-brand-accent hover:text-brand-dark font-bold text-base md:text-lg flex items-center transition-colors">
                Inquire About Home Equity <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
