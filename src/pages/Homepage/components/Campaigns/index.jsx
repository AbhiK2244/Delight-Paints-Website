import React from "react";
import { Link } from "react-router";
import { TiArrowRight } from "react-icons/ti";
import { campaigns } from "../../../../assets/data/compaigns.js";


const Campaigns = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-5 flex items-end justify-between sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d17b67] sm:text-[11px]">
              Latest Updates
            </p>

            <h2 className="text-[30px] font-bold leading-none tracking-[-0.035em] text-[#111827] sm:text-[35px] md:text-[38px]">
              Our Campaigns
            </h2>
          </div>

          <Link
            to="/campaigns"
            className="mb-1 hidden items-center gap-1 text-[11px] font-semibold text-[#c73524] transition-all duration-200 hover:gap-2 sm:flex"
          >
            <span>View All Campaigns</span>
            <TiArrowRight className="text-[19px]" />
          </Link>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="group relative aspect-[1.8/1] overflow-hidden rounded-[15px] bg-gray-200"
              style={{
                backgroundImage: `url(${campaign.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                loading: "lazy",
              }}
            >
              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-start justify-between gap-4 p-5 lg:p-7">
                <div>
                  <h3 className="whitespace-pre-line text-[22px] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-[23px] lg:text-[25px]">
                    {campaign.title}
                  </h3>

                  <p className="mt-4 whitespace-pre-line text-[13px] font-medium leading-[1.4] text-white/95 sm:text-[14px]">
                    {campaign.description}
                  </p>
                </div>

                <Link
                  to="/campaigns"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold text-[#222] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:px-6 sm:py-3 sm:text-[11px]"
                >
                  <span>{campaign.buttonText}</span>

                  <TiArrowRight className="text-[18px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-5 flex justify-end sm:hidden">
          <Link
            to="/campaigns"
            className="flex items-center gap-1 text-[11px] font-semibold text-[#c73524]"
          >
            <span>View All Campaigns</span>
            <TiArrowRight className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;