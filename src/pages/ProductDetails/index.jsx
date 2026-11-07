
import React from "react";
import { Link, useParams } from "react-router";
import {
  FiShield,
  FiDroplet,
  FiSun,
  FiLayers,
  FiCheckCircle,
  FiMapPin,
  FiInfo,
  FiArrowUpRight,
  FiChevronRight,
} from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import { products, recommendations } from "../../assets/data/products.js";
import Recommendations from "./Recommendations.jsx";


// Recommended Products
// Only name, category and slug are stored here.

const featureIcons = [FiShield, FiDroplet, FiSun, FiLayers];

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#fdfcf9] px-5 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c73524]">
          Product Not Found
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#102b4c] sm:text-4xl">
          This product doesn't exist.
        </h1>

        <p className="mt-3 text-sm text-[#777]">
          The product may have been removed or the link may be incorrect.
        </p>

        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c73524] px-6 py-3 text-xs font-bold text-white transition-all hover:bg-[#ad2d20]"
        >
          Explore All Products
          <TiArrowRight className="text-lg" />
        </Link>
      </section>
    );
  }

  const relatedProducts = recommendations
    .filter((item) => item.slug !== product.slug)
    .slice(0, 6);

  return (
    <section className="min-h-screen bg-[#fdfcf9] px-4 pb-16 pt-24 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1500px]">

        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] text-[#777] sm:text-[11px]">
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-[#c73524]"
          >
            Home
          </Link>

          <FiChevronRight />

          <Link
            to="/products"
            className="transition-colors hover:text-[#c73524]"
          >
            Products
          </Link>

          <FiChevronRight />

          <span className="text-[#777]">{product.category}</span>

          {product.subcategory && (
            <>
              <FiChevronRight />
              <span>{product.subcategory}</span>
            </>
          )}

          <FiChevronRight />

          <span className="font-bold text-[#c73524]">
            {product.name}
          </span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] xl:grid-cols-[minmax(320px,0.95fr)_minmax(350px,1.1fr)_minmax(280px,0.8fr)]">

          {/* Main Product Image */}
          <div className="group relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl border border-[#eeeae5] bg-gradient-to-br from-[#f4f0eb] via-[#faf7f3] to-[#eee9e2] p-6 sm:min-h-[440px] sm:p-10 xl:min-h-[610px]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-3xl" />

            <span className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-wide text-[#102b4c] shadow-sm backdrop-blur-sm sm:left-6 sm:top-6 sm:text-[10px]">
              {product.category}
              {product.subcategory && ` · ${product.subcategory}`}
            </span>

            {product.specialType && (
              <span className="absolute right-5 top-5 z-10 rounded-full bg-[#102b4c] px-3 py-2 text-[9px] font-semibold text-white sm:right-6 sm:top-6">
                {product.specialType}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 h-full max-h-[480px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/70 pt-4 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-[10px] font-semibold text-[#777]">
                Delight Paints
              </p>

              <span className="text-[10px] text-[#999]">
                Quality · Performance · Beauty
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col py-1">

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#eee9fb] px-4 py-2 text-[9px] font-bold uppercase tracking-wide text-[#51418b] sm:text-[10px]">
                {product.category === "Primer"
                  ? `${product.subcategory} Primer`
                  : product.category}
              </span>

              {product.specialType && (
                <span className="rounded-full bg-[#f8edda] px-3 py-2 text-[9px] font-semibold text-[#916018]">
                  {product.specialType}
                </span>
              )}
            </div>

            <h1 className="text-[29px] font-bold leading-[1.12] tracking-[-0.035em] text-[#102b4c] sm:text-[36px] lg:text-[38px]">
              {product.name}
            </h1>

            <h2 className="mt-2 text-[15px] font-medium leading-snug text-[#252f42] sm:text-[17px]">
              {product.tagline}
            </h2>

            <p className="mt-3 text-[12px] leading-[1.8] text-[#666] sm:text-[13px]">
              {product.description}
            </p>

            {/* Product Features */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {product.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={feature}
                    className={`flex min-h-[95px] flex-col items-center justify-center gap-2 rounded-xl p-3 text-center ${
                      [
                        "bg-[#eaf0fc]",
                        "bg-[#e8f5fa]",
                        "bg-[#fff5df]",
                        "bg-[#edf5e9]",
                      ][index % 4]
                    }`}
                  >
                    <Icon className="text-xl text-[#c73524]" />

                    <p className="text-[10px] font-semibold leading-[1.3] text-[#26364e]">
                      {feature}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Product Description */}
            <div className="mt-6">
              <h3 className="text-[18px] font-bold text-[#102b4c] sm:text-[20px]">
                Product Description
              </h3>

              <p className="mt-2 text-[12px] leading-[1.8] text-[#666] sm:text-[13px]">
                {product.description}
              </p>
            </div>

            {/* Warranty and Special Features */}
            {(product.warranty || product.specialType) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.warranty && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#fce8eb] px-4 py-2 text-[10px] font-bold text-[#b42d43]">
                    <FiShield className="text-sm" />
                    {product.warranty} Warranty*
                  </span>
                )}

                {product.specialType && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eee9fb] px-4 py-2 text-[10px] font-bold text-[#51418b]">
                    <FiSun className="text-sm" />
                    {product.specialType}
                  </span>
                )}
              </div>
            )}

            {/* Quick Specifications */}
            <div className="mt-5 grid grid-cols-3 divide-x divide-[#e9e5e0] rounded-xl border border-[#eeeae5] bg-[#f8f6f3] p-3">
              <div className="px-2">
                <FiDroplet className="mb-2 text-lg text-[#c73524]" />
                <p className="text-[10px] font-bold text-[#102b4c]">
                  Finish
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#777]">
                  {product.specifications.find(
                    (item) => item.label === "Finish"
                  )?.value}
                </p>
              </div>

              <div className="px-3">
                <FiLayers className="mb-2 text-lg text-[#c73524]" />
                <p className="text-[10px] font-bold text-[#102b4c]">
                  Coverage
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#777]">
                  {product.specifications.find(
                    (item) => item.label === "Coverage"
                  )?.value}
                </p>
              </div>

              <div className="px-3">
                <FiInfo className="mb-2 text-lg text-[#c73524]" />
                <p className="text-[10px] font-bold text-[#102b4c]">
                  Application
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#777]">
                  {product.specifications.find(
                    (item) => item.label === "Application"
                  )?.value}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="https://maps.app.goo.gl/VBD8u7n2Tb55zoubA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c73524] px-5 py-3 text-[10px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad2d20] hover:shadow-lg sm:px-6 sm:text-[11px]"
              >
                <FiMapPin className="text-sm" />
                Find a Dealer
                <TiArrowRight className="text-lg" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d6d2cd] bg-white px-5 py-3 text-[10px] font-bold text-[#102b4c] transition-all duration-300 hover:border-[#c73524] hover:text-[#c73524] sm:px-6 sm:text-[11px]"
              >
                Contact Us
                <FiArrowUpRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Recommendation section */}
          <Recommendations relatedProducts={relatedProducts} products={products} />
        </div>

        {/* Additional Information of the product */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Specifications */}
          <div className="rounded-2xl border border-[#eeeae5] bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9eeea] text-[#c73524]">
                <FiLayers className="text-lg" />
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#102b4c]">
                  Product Specifications
                </h2>

                <p className="mt-0.5 text-[10px] text-[#888]">
                  Important product information.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#f0ede9]">
              {product.specifications.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="text-[11px] font-medium text-[#777]">
                    {item.label}
                  </span>

                  <span className="text-right text-[11px] font-semibold text-[#26364e]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* <p className="mt-4 rounded-lg bg-[#faf5f1] p-3 text-[10px] leading-5 text-[#777]">
              For exact technical specifications, coverage and drying times,
              please refer to the official Technical Data Sheet (TDS).
            </p> */}
          </div>

          {/* How to Use */}
          <div className="rounded-2xl border border-[#eeeae5] bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9eeea] text-[#c73524]">
                <FiCheckCircle className="text-lg" />
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#102b4c]">
                  How to Use
                </h2>

                <p className="mt-0.5 text-[10px] text-[#888]">
                  General application guidelines.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {product.howToUse.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f9eeea] text-[10px] font-bold text-[#c73524]">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-[11px] leading-[1.7] text-[#666]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        {/* <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#eee5da] bg-[#faf5ed] p-4 sm:p-5">
          <FiInfo className="mt-0.5 shrink-0 text-lg text-[#c73524]" />

          <p className="text-[10px] leading-5 text-[#777] sm:text-[11px]">
            Product descriptions and application instructions are provided
            for general guidance. Always follow the official product packaging
            and Technical Data Sheet for accurate application methods,
            specifications and safety instructions.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDetails;
