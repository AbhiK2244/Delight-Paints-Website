import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      className="
        flex h-full min-h-[165px] w-[min(88vw,360px)] shrink-0
        flex-col justify-between rounded-2xl
        border border-[#eeeeeb] bg-white p-4
        shadow-[0_4px_18px_rgba(16,43,76,0.045)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#ead2cc]
        hover:shadow-[0_10px_28px_rgba(16,43,76,0.09)]
        sm:w-[350px] sm:p-5
      "
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#e9e9e7] sm:h-[58px] sm:w-[58px]">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="pt-0.5 text-[11px] leading-[1.65] text-[#444] sm:text-[12px]">
          "{testimonial.message}"
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3 pl-[65px] sm:pl-[74px]">
        <div className="min-w-0">
          <h3 className="text-[11px] font-bold leading-tight text-[#102b4c] sm:text-[12px]">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-[10px] text-[#888] sm:text-[11px]">
            {testimonial.location}
          </p>
        </div>

        <div
          className="flex shrink-0 gap-[2px]"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span
              key={index}
              className="text-[13px] leading-none text-[#e9ad32] sm:text-[14px]"
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;