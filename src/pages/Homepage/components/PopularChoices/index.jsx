import React from "react";
import { Link } from "react-router";
import { TiArrowRight } from "react-icons/ti";
import { popularChoices } from "../../../../assets/data/popularChoices.js";

const PopularChoices = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 flex items-end justify-between sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#d17b67] sm:text-[11px]">
              Most Loved
            </p>

            <h2 className="text-[29px] font-bold leading-none tracking-[-0.035em] text-[#111827] sm:text-[34px] md:text-[37px]">
              Our Popular Choice
            </h2>

            <p className="mt-2 text-[11px] leading-[1.4] text-[#666] sm:text-[12px] md:text-[13px]">
              Trusted by homeowners and professionals for quality, performance,
              and beautiful results.
            </p>
          </div>

          <Link
            to="/products"
            className="mb-1 hidden items-center gap-1 text-[11px] font-semibold text-[#c73524] transition-all duration-200 hover:gap-2 md:flex"
          >
            <span>View All Products</span>
            <TiArrowRight className="text-[18px]" />
          </Link>
        </div>

        {/* Popular Products section */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
          {/* Featured Product (big size) */}
          {popularChoices
            .filter((product) => product.featured)
            .map((product) => (
              <div
                key={product.id}
                className="group relative min-h-[380px] overflow-hidden rounded-[15px] bg-[#eee8e0] sm:min-h-[420px] lg:min-h-[385px]"
              >
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                {/* this is for gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-gray-100/85 via-white/35 to-transparent" />

                <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-7 md:p-8">
                  <div className="max-w-[310px]">
                    <p className="text-[10px] font-medium text-[#555] sm:text-[11px]">
                      {product.type}
                    </p>

                    <h3 className="mt-2 text-[28px] font-bold leading-none tracking-[-0.035em] text-[#111] sm:text-[32px] md:text-[34px]">
                      {product.title}
                    </h3>

                    <p className="mt-3 whitespace-pre-line text-[13px] leading-[1.35] text-[#444] sm:text-[14px]">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
                      {product.features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2.5"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102b4c] text-white">
                              <Icon className="text-[13px]" />
                            </span>

                            <span className="text-[10px] font-medium text-[#444] sm:text-[11px]">
                              {feature.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Link
                    to="/products/interior"
                    className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[#c73524] px-5 py-2.5 text-[10px] font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b62e20] hover:shadow-lg sm:px-6 sm:py-3 sm:text-[11px]"
                  >
                    <span>{product.buttonText}</span>

                    <TiArrowRight className="text-[18px]" />
                  </Link>
                </div>
              </div>
            ))}

          {/* other small products cards */}
          <div className="grid grid-cols-1 gap-3">
            {popularChoices
              .filter((product) => !product.featured)
              .map((product) => (
                <div
                  key={product.id}
                  className="group relative min-h-[185px] overflow-hidden rounded-[15px] bg-[#f0ece7] sm:min-h-[205px] lg:min-h-0"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* this is for gradient layer only */}
                  <div className="absolute inset-0 bg-linear-to-r from-gray-100/90 via-white/25 to-transparent" />

                  <div className="relative z-10 flex h-full w-full items-center p-5 sm:p-6">
                    <div className="max-w-[210px]">
                      <p className="text-[9px] font-medium text-[#666] sm:text-[10px]">
                        {product.type}
                      </p>

                      <h3 className="mt-1.5 text-[20px] font-bold leading-none tracking-tight text-[#111]">
                        {product.title}
                      </h3>

                      <p className="mt-2 whitespace-pre-line text-[10px] leading-[1.35] text-[#555]">
                        {product.description}
                      </p>

                      <Link
                        to="/products"
                        className="mt-4 inline-flex items-center gap-1 rounded-full border border-[#cfcfcf] bg-white/60 px-4 py-2 text-[9px] font-bold text-[#222] transition-all duration-200 hover:bg-white hover:shadow-md sm:px-5 sm:py-2.5 sm:text-[10px] hover:-translate-y-1"
                      >
                        <span>{product.buttonText}</span>

                        <TiArrowRight className="text-[16px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-5 flex justify-end md:hidden">
          <Link
            to="/products"
            className="flex items-center gap-1 text-[11px] font-semibold text-[#c73524]"
          >
            <span>View All Products</span>
            <TiArrowRight className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularChoices;

// import React from "react";
// import { products } from "../../../../assets/data/products";
// import ProductCard from "./components/ProductCard";

// const PopularChoices = () => {
//   return (
//     <section className="w-full bg-[#fdfcf9] px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-0">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
//           <div>
//             <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d17b67] sm:text-[12px]">
//               Featured Products
//             </p>

//             <h2 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111] sm:text-[34px] md:text-[38px]">
//               Our Popular Choices
//             </h2>

//             <p className="mt-2 text-[12px] text-[#777] sm:text-[14px]">
//               Trusted by homeowners, loved by professionals.
//             </p>
//           </div>

//           <button
//             type="button"
//             className="hidden shrink-0 text-[12px] font-semibold text-[#c73524] transition-colors hover:text-[#8e2117] sm:block cursor-pointer"
//           >
//             View All Products <span className="ml-1">→</span>
//           </button>
//         </div>

//         <button
//           type="button"
//           className="mb-5 text-[12px] font-semibold text-[#c73524] sm:hidden"
//         >
//           View All Products <span className="ml-1">→</span>
//         </button>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {products.map((product) => (
//             <ProductCard
//               key={`${product.name}-${product.type}`}
//               product={product}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularChoices;
