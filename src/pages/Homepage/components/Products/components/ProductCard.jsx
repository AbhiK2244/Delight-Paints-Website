import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article
      className={`relative flex h-full min-w-0 flex-col rounded-lg border bg-white/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        product.highlighted
          ? "border-[#efc6b4] shadow-[0_4px_18px_rgba(220,120,80,0.08)]"
          : "border-[#f0eee9]"
      }`}
    >
      {product.badge && (
        <span className="absolute right-3 top-2 z-10 rounded-full bg-[#c73524] px-3 py-1 text-[10px] font-semibold text-white sm:text-[8px]">
          {product.badge}
        </span>
      )}

      <div className="flex h-[165px] items-center justify-center sm:h-[170px] lg:h-[155px] xl:h-[170px]">
        <img
          src={product.image}
          alt={`${product.name} paint bucket`}
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="mt-2 flex flex-1 flex-col">
        <h3 className="text-[15px] font-bold leading-[1.2] text-[#111] sm:text-[16px]">
          {product.name}
        </h3>

        {product.type && (
          <p className="text-[15px] font-bold leading-[1.25] text-[#111] sm:text-[16px]">
            {product.type}
          </p>
        )}

        <ul className="mt-3 space-y-1.5 mb-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-1.5 text-[11px] leading-[1.35] text-[#666] sm:text-[12px]"
            >
              <span className="mt-[2px] text-[#c73524]">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-auto w-fit rounded-full border border-[#e6a78f] bg-[#c73524] px-4 py-2 text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-[#a92b1d] cursor-pointer"
        >
          View Details
          <span className="ml-2">→</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
