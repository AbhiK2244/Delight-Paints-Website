import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../../../../assets/data/features";
import { TiArrowRight } from "react-icons/ti";

const WhySection = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-5 flex items-end justify-between gap-5 sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d17b67] sm:text-[11px]">
              Why Delight Paints
            </p>

            <h2 className="text-[28px] font-bold leading-[1] tracking-[-0.035em] text-[#111] sm:text-[34px] md:text-[38px]">
              More Than Just Colors
            </h2>

            <p className="mt-2 max-w-[480px] text-[12px] leading-[1.35] text-[#777] sm:text-[13px]">
              Advanced technology, reliable performance, and finishes
              <br className="hidden sm:block" />
              that keep your home beautiful for years.
            </p>
          </div>

          <button
            type="button"
            className="hidden shrink-0 items-center gap-2 text-[11px] font-semibold text-[#c73524] sm:flex cursor-pointer transition-all duration-200 hover:gap-3"
          >
            Learn More
            <span className="text-[15px]"><TiArrowRight /></span>
          </button>
        </div>

        {/* Mobile Learn More */}
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-[11px] font-semibold text-[#c73524] sm:hidden"
        >
          Learn More
          <span className="text-[15px]"><TiArrowRight /></span>
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.02fr_1.25fr]">
          {/* Main Featured Card */}
          <article className="group relative min-h-[360px] overflow-hidden rounded-[14px] sm:min-h-[400px] lg:min-h-[335px] xl:min-h-[365px]">
            <img
              src="./images/home.jpg"
              alt="Delight Paints home"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7 lg:p-7">
              <h3 className="max-w-[280px] text-[29px] font-medium leading-[1.12] text-white sm:text-[34px] lg:text-[31px] xl:text-[34px]">
                Homes that
                <br />
                stand the test
                <br />
                of time.
              </h3>
              <span className="text-[12px] font-medium text-white">
                Beauty that Endures
              </span>
            </div>
          </article>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard
                key={`${feature.title}-${feature.subtitle}`}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
