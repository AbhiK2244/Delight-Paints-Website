import React from "react";
import { Link } from "react-router";
import { TiArrowRight } from "react-icons/ti";
import { categories } from "../../../../assets/data/categories";

const ProductCategories = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 flex items-end justify-between sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#d17b67] sm:text-[11px]">
              Our Range
            </p>

            <h2 className="text-[29px] font-bold leading-none tracking-[-0.035em] text-[#111] sm:text-[34px] md:text-[37px]">
              Product Categories
            </h2>

            <p className="mt-2 flex-1 text-[11px] leading-[1.4] text-[#666] sm:text-[12px] md:text-[13px]">
              From interiors to exteriors, primers to waterproofing. find the
              perfect solution for your home.
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

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative aspect-[0.67] overflow-hidden rounded-xl bg-gray-200 bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/10" />

              <div className="relative z-10 flex h-full flex-col items-start p-4 sm:p-5">
                <h3 className="whitespace-pre-line text-[19px] font-bold leading-[1.02] tracking-tight text-[#111] sm:text-[20px] lg:text-[19px] xl:text-[20px] group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>

                <p className="mt-3 whitespace-pre-line text-[10px] font-medium leading-[1.35] text-[#333] sm:text-[11px] group-hover:text-white transition-colors duration-300">
                  {category.description}
                </p>

                <span className="mt-4 flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white/30 text-[#222] transition-all duration-200 group-hover:bg-white group-hover:shadow-sm">
                  <TiArrowRight className="text-[17px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>


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

export default ProductCategories;
