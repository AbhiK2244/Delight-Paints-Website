import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      className="
        flex snap-start flex-col justify-between rounded-xl border border-[#eeeeeb] bg-white  p-4  shadow-md min-w-[95%] md:min-w-[350px] md:flex-1 md:p-5"
    >
      <div className="flex gap-4">
        <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-[#e9e9e7] sm:h-[62px] sm:w-[62px]">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="pt-0.5 text-[11px] leading-[1.45] text-[#333] sm:text-[12px]">
          "{testimonial.message}"
        </p>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3 pl-[74px]">
        <div>
          <h3 className="text-[11px] font-bold leading-tight text-[#151515] sm:text-[12px]">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-[10px] text-[#777] sm:text-[11px]">
            {testimonial.location}
          </p>
        </div>

        <div className="flex shrink-0 gap-[2px]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span
              key={index}
              className="text-[13px] leading-none text-[#f5bd18] sm:text-[14px]"
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
