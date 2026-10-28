
import React from "react";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#102b4c] min-h-[440px]  md:min-h-[480px] lg:min-h-[500px]">
        {/* Video is here */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/zgsarqop/video/upload/v1793170593/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-3 items-center px-4 py-14 text-center md:px-6">
          <span className="mb-2 rounded-full bg-[#d9ff62] px-3 py-2 text-[8px] font-semibold text-[#20251a] md:mb-3 md:px-4 md:text-[11px]">
            Smooth, simple, and stress-free color choices
          </span>

          <h1 className="text-[clamp(3rem,13vw,7rem)] font-normal leading-[0.83] tracking-[-0.055em] text-white">
            We Colour
            <br />
            <span className="font-serif italic font-normal tracking-[-0.045em]">
              Your Dream
            </span>
          </h1>

          <p className="mt-4 max-w-[470px] text-[11px] font-normal leading-[1.5] text-white/95 sm:mt-5 sm:text-xs md:text-[13px]">
            An eco-friendly paint manufacturer based specializing in high-quality
            <br className="hidden sm:block" />
            coatings for both interior and exterior surfaces
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
