/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import IcpSolutionPage from './pages/IcpSolution';
import CostJourneyPage from './pages/CostJourney';
import CaseStudiesPage from './pages/CaseStudies';
import OtherFundingPage from './pages/OtherFunding';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PoaSolutionsPage from './pages/PoaSolutions';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="icp-solution" element={<IcpSolutionPage />} />
          <Route path="cost-journey" element={<CostJourneyPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="other-funding" element={<OtherFundingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="poa-solutions" element={<PoaSolutionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
