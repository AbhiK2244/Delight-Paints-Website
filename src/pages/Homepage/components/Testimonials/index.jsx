import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../../assets/data/testimonials.js";

const Testimonials = () => {
  if (!testimonials?.length) return null;

  return (
    <section className="w-full overflow-hidden bg-[#fdfcf9] py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d17b67] sm:text-[11px]">
            Real Stories
          </p>

          <h2 className="text-[27px] font-bold leading-[1.05] tracking-[-0.035em] text-[#111] sm:text-[32px] md:text-[38px]">
            What Our Customers Say
          </h2>

          <p className="mt-2 max-w-md text-[11px] leading-relaxed text-[#777] sm:text-[12px]">
            The experiences and trust that make us proud.
          </p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div
        className="testimonial-marquee w-full"
        role="region"
        aria-label="Customer testimonials"
      >
        <div className="testimonial-marquee__track">
          {/* First set */}
          <div className="testimonial-marquee__group">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`first-${testimonial.id ?? index}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Duplicated set for seamless looping */}
          <div className="testimonial-marquee__group" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`second-${testimonial.id ?? index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;