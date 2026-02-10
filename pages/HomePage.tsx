import React from 'react';
import ClaimForm from '../components/ClaimForm';

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply" />
        <img
          src="https://picsum.photos/2000/1200"
          alt="Legal office background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col items-center justify-center flex-grow">
        <div className="text-center max-w-2xl mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Start Your Claim Check
          </h1>
          <p className="text-lg text-slate-200">
            Free initial assessment. No Win, No Fee*.
          </p>
        </div>

        <div className="w-full max-w-[550px]">
          <ClaimForm />
        </div>

        <p className="text-slate-500 text-xs mt-8 text-center max-w-md">
          *Subject to insurance costs and exclusions. Fee payable if case is successful.
          By submitting this form you agree to our terms of service.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
