import React from "react";
import { FeatureIcon } from "./FeatureIcons";

const FeatureCard = ({ feature }) => {
  return (
    <article
      className={`group relative min-h-42.5 overflow-hidden rounded-[14px] p-5 sm:min-h-[185px] lg:min-h-0 ${feature.className}`}
    >
      <div className="relative z-10 flex gap-4">
        <div className="shrink-0 text-[#bd3023]">
          <FeatureIcon type={feature.icon} />
        </div>

        <div className="min-w-0">
          <h3 className="text-[15px] font-bold leading-[1.1] text-[#151515] sm:text-[16px]">
            {feature.title}
            <br />
            {feature.subtitle}
          </h3>

          <p className="mt-3 max-w-47.5 text-[11px] leading-[1.45] text-gray-600 sm:text-[12px]">
            {feature.description}
          </p>
        </div>
      </div>

      <img
        src={feature.image}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
      />
    </article>
  );
};

export default FeatureCard;
