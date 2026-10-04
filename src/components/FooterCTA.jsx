import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";


const FooterCTA = () => {
    const [floatAnimate, setFloatAnimate] = useState(true);
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative h-[280px] md:h-[250px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/footer_cta.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 px-6 md:px-20 py-10 lg:px-42">
          <div className="max-w-120 text-white">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-4xl">
              Let's Create a Brighter
              <br className="hidden sm:block" />
              Home Together.
            </h2>

            <p className="mt-4 max-w-[430px] text-sm leading-relaxed text-white/95 sm:text-base">
              Visit your nearest dealer and bring your walls to life with Rose
              Paints.
            </p>
          </div>
        
          <a
            href="/dealer-network"
            className={`md:mt-16 inline-flex items-center gap-1 rounded-full bg-white px-6 py-3 text-xs font-bold text-gray-900 shadow-md hover:shadow-lg sm:px-7 sm:py-3.5 float-animation`}
          >
            <IoLocation className="text-xl" />
            <span>Find a Dealer</span>

            <span className="text-lg leading-none"><TiArrowRightThick /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
