import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router";

const Recommendations = ({ relatedProducts, products }) => {
  return (
    <aside className="rounded-2xl border border-[#eee9e5] bg-[#faf5f5] p-4 sm:p-5 lg:col-span-2 xl:col-span-1">
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-[#c73524]" />

          <h2 className="text-[18px] font-bold tracking-tight text-[#102b4c] sm:text-[20px]">
            Recommended Products
          </h2>
        </div>

        <p className="mt-2 pl-3 text-[11px] text-[#777] sm:text-[12px]">
          Complete your painting system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
        {relatedProducts.map((item) => {
          const recommendedProduct = products.find(
            (product) => product.slug === item.slug,
          );

          return (
            <Link
              key={item.slug}
              to={`/product/${item.slug}`}
              className="group flex min-h-[96px] items-center gap-3 rounded-xl border border-white bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9c4b9] hover:shadow-md"
            >
              {/* Recommended Product Image */}
              <div className="flex h-[70px] w-[75px] shrink-0 items-center justify-center rounded-lg bg-[#f8f6f2] p-2">
                <img
                  src={recommendedProduct?.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Recommended Product Information */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold leading-[1.4] text-[#102b4c] transition-colors group-hover:text-[#c73524] sm:text-[12px]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[10px] text-[#888]">{item.category}</p>
              </div>

              <FiChevronRight className="shrink-0 text-lg text-[#777] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c73524]" />
            </Link>
          );
        })}
      </div>

      <Link
        to="/products"
        className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#d9c9c4] bg-white px-4 py-3 text-[10px] font-bold text-[#c73524] transition-all duration-200 hover:border-[#c73524] hover:bg-[#c73524] hover:text-white"
      >
        View All Products
        <TiArrowRight className="text-lg" />
      </Link>
    </aside>
  );
};

export default Recommendations;
