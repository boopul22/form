import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
            <p>These Terms of Service ("Terms") govern your use of the ukclaims.org website and services provided by Example Legal Ltd. By using our website or submitting a claim, you agree to be bound by these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Our Services</h2>
            <p>ukclaims.org provides claims management services, including initial assessment, case referral to partner solicitors, and claim tracking. We are not a law firm. Legal services are provided by our regulated partner solicitors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. No Win, No Fee</h2>
            <p>Our services operate on a No Win, No Fee (Conditional Fee Agreement) basis. You will not be charged any upfront fees. If your claim is successful, a success fee will be deducted from your compensation, the details of which will be clearly explained before you proceed.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Your Obligations</h2>
            <p>You agree to: provide accurate and truthful information, cooperate with our team and partner solicitors, notify us of any changes to your circumstances, and not submit fraudulent claims.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p>While we strive to provide accurate assessments, we do not guarantee the outcome of any claim. Our initial assessments are for guidance only and do not constitute legal advice. Our liability is limited to the fees charged for our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Example Legal Ltd and is protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Cancellation</h2>
            <p>You may cancel your claim at any time by contacting us. If you cancel after work has commenced, you may be liable for reasonable costs incurred, as outlined in your agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Contact</h2>
            <p>For questions about these Terms, contact us at support@ukclaims.org or call 0800 123 4567.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
