import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!optIn) {
      setError('Please agree to the terms to proceed.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('Full Name', fullName);
      formData.append('email', email);
      formData.append('Phone Number', phone);
      formData.append('_subject', `New Claim Enquiry - ${fullName}`);
      formData.append('_replyto', email);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/ajax/ukclaims.org@outlook.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-[#ece8e1] px-4 py-12 md:py-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight leading-tight mb-3">
          Check Your Car<br />Finance Claim
        </h1>
        <p className="text-lg text-slate-600">
          Find out if you're owed money in just 2 minutes
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600 mb-6">We've received your details and will be in touch shortly.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFullName('');
                setEmail('');
                setPhone('');
                setOptIn(false);
              }}
              className="text-rose-600 hover:text-rose-700 font-semibold transition-colors"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-1.5">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-1.5">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div className={`p-3 rounded-lg border transition-colors ${error && !optIn ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => {
                    setOptIn(e.target.checked);
                    if (e.target.checked) setError(null);
                  }}
                  className="w-5 h-5 mt-0.5 text-rose-600 border-gray-300 rounded focus:ring-rose-500 cursor-pointer"
                />
                <span className="text-xs text-slate-600 leading-snug">
                  <span className="font-bold text-slate-800">I agree to the Terms & Privacy Policy.</span>{' '}
                  I confirm my details are correct and consent to ukclaims.org contacting me about my claim.
                </span>
              </label>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-lg font-bold text-rose-600 border-[3px] border-rose-500 rounded-xl hover:bg-rose-50 active:bg-rose-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}
      </div>

      <p className="text-slate-500 text-xs mt-8 text-center max-w-md">
        *Subject to insurance costs and exclusions. Fee payable if case is successful.
      </p>
    </main>
  );
};

export default HomePage;
