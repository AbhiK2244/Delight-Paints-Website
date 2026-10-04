import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../../assets/data/testimonials";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const Testimonials = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const card = container.querySelector("article");

    if (!card) return;

    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-350">
        {/* Header */}
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d17b67] sm:text-[11px]">
              Real Stories
            </p>

            <h2 className="text-[27px] font-bold leading-[1] tracking-[-0.035em] text-[#111] sm:text-[32px] md:text-[35px]">
              What Our Customers Say
            </h2>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Previous testimonials"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#dededb]
                bg-white
                text-[#555]
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                transition-all
                hover:border-[#c73524]
                hover:text-[#c73524]
                cursor-pointer
              "
            >
              <span className="text-[17px] leading-none"><TiArrowLeft /></span>
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dededb] bg-white text-[#555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:border-[#c73524] hover:text-[#c73524] cursor-pointer"
            >
              <span className="text-[17px] leading-none"><TiArrowRight /></span>
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={carouselRef}
          className="
            flex
            gap-3
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-2
            w-full
            scrollbar-none
            [&::-webkit-scrollbar]:hidden
            md:overflow-hidden
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
