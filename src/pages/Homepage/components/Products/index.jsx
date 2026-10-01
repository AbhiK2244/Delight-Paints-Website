import React from "react";
import { products } from "../../../../assets/data/products";
import ProductCard from "./components/ProductCard";

const Products = () => {
  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d17b67] sm:text-[12px]">
              Featured Products
            </p>

            <h2 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111] sm:text-[34px] md:text-[38px]">
              Our Popular Choices
            </h2>

            <p className="mt-2 text-[12px] text-[#777] sm:text-[14px]">
              Trusted by homeowners, loved by professionals.
            </p>
          </div>

          <button
            type="button"
            className="hidden shrink-0 text-[12px] font-semibold text-[#c73524] transition-colors hover:text-[#8e2117] sm:block cursor-pointer"
          >
            View All Products <span className="ml-1">→</span>
          </button>
        </div>

        <button
          type="button"
          className="mb-5 text-[12px] font-semibold text-[#c73524] sm:hidden"
        >
          View All Products <span className="ml-1">→</span>
        </button>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={`${product.name}-${product.type}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
