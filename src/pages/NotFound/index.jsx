import React from "react";
import { Link } from "react-router";
import { TiArrowRight } from "react-icons/ti";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] px-5">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c73524]">
          Page Not Found
        </p>

        <h1 className="text-[100px] font-bold leading-none tracking-[-0.06em] text-[#102b4c] sm:text-[140px]">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
          Looks like this wall needs a fresh coat.
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#666] sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to a place that looks a little better.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c73524] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b52f20] hover:shadow-lg"
        >
          <span>Back to Home</span>
          <TiArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;