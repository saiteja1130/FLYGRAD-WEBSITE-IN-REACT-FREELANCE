import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F2F8FF] px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-[#0B2F85] text-[#33C9FF] flex items-center justify-center shadow-xl">
          <Compass className="w-10 h-10 animate-spin duration-1000" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
            404 Error · Lost in Transit
          </span>
          <h1 className="text-4xl font-extrabold text-[#0B2F85]">
            Flight Destination Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for may have relocated, had its name changed, or is temporarily unavailable. Let's get you back on course.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl gradient-brand-btn text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 flex items-center justify-center gap-2"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
