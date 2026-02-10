import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
            <p>ukclaims.org ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data Controller</h2>
            <p>The data controller is Example Legal Ltd, registered in England & Wales. For data protection enquiries, contact us at: support@ukclaims.org.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. What Data We Collect</h2>
            <p>We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name, email address, telephone number</li>
              <li>Details of your claim or enquiry</li>
              <li>Information you provide in forms on our website</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Usage data including pages visited and time spent on our site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>To assess and process your claim</li>
              <li>To communicate with you about your enquiry</li>
              <li>To comply with our legal and regulatory obligations</li>
              <li>To improve our website and services</li>
              <li>To send marketing communications (only with your explicit consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Legal Basis for Processing</h2>
            <p>We process your data on the following legal bases: your consent, performance of a contract, compliance with legal obligations, and our legitimate interests in providing claims management services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Data Sharing</h2>
            <p>We may share your data with: partner solicitors handling your claim, regulatory bodies as required by law, and service providers who assist us in operating our business. We will never sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, typically 6 years after the conclusion of your claim, in line with legal requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to: access your data, rectify inaccuracies, request erasure, restrict processing, data portability, and object to processing. To exercise these rights, email support@ukclaims.org.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Complaints</h2>
            <p>If you are unhappy with how we handle your data, you may lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
