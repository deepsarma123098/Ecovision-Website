import React from 'react';

function RegisterButton() {
  return (
    <button
      className="inline-flex h-14 sm:h-16 md:h-18 w-[80%] sm:w-[50%] md:w-[30%] lg:w-[20%] 
      animate-shimmer items-center justify-center rounded-2xl border border-slate-800 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
      px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-10 font-medium text-slate-400 transition-colors 
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 
      text-base sm:text-lg md:text-[1.3rem] text-center"
    >
      Apply For Rooftop Solar Now
    </button>
  );
}

export default RegisterButton;
