import React from "react";
import { FiMapPin, FiNavigation, FiMap } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const mapLink = "https://maps.app.goo.gl/VBD8u7n2Tb55zoubA";
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6336.52117588235!2d87.58961674361184!3d26.626098974242055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f2ae14f1553%3A0x91df27748cda0ac3!2sDelight%20paints!5e1!3m2!1sen!2sin!4v1793620330033!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c73524] sm:text-[11px]">
            Come Visit Us
          </p>

          <h2 className="text-[29px] font-bold leading-tight tracking-[-0.035em] text-[#102b4c] sm:text-[35px] md:text-[38px]">
            Find Our Location
          </h2>

          <p className="mt-2 max-w-xl text-[12px] leading-6 text-[#777] sm:text-[13px]">
            We'd love to welcome you. Find our location on the map and plan your
            visit.
          </p>
        </div>

        {/* Location wala Container */}
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-2xl border border-[#eeeae5] bg-white p-3 shadow-[0_5px_25px_rgba(0,0,0,0.04)] lg:grid-cols-[0.8fr_1.5fr] lg:gap-5 lg:p-4">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#102b4c] p-6 text-white sm:p-8">
            {/* Decorations Circles on top and bottom */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#c73524]/20" />

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#f1a091]">
                <FiMapPin className="text-2xl" />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Visit Our Location
              </p>

              <h3 className="mt-2 text-[25px] font-bold leading-tight sm:text-[30px]">
                We'd Love to See You.
              </h3>

              <p className="mt-3 max-w-[300px] text-[12px] leading-6 text-white/70 sm:text-[13px]">
                Looking for quality paints or need help choosing the right
                finish? Visit our location and let us help you find the perfect
                solution for your home.
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f1a091]">
                    <FiMap className="text-lg" />
                  </div>

                  <div>
                    <p className="text-[10px] text-white/60">Location</p>

                    <p className="mt-0.5 text-[13px] font-semibold">
                      Find us on Google Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#c73524] px-5 py-3 text-[11px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad2d20] hover:shadow-lg sm:px-6"
            >
              <FiNavigation className="text-sm" />
              <span>Get Directions</span>
              <TiArrowRight className="text-lg" />
            </a>
          </div>

          {/* Google Map */}
          <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#f0eee9] sm:min-h-[380px] lg:min-h-[440px]">
            <iframe
              src={mapEmbedUrl}
              title="Our Location - Google Maps"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
