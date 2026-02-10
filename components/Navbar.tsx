import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-blue-800" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">ukclaims.org</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-slate-600 hover:text-blue-700 font-medium transition-colors">About</Link>
            <Link to="/" className="text-blue-700 font-medium text-sm hover:underline">Start Claim</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
