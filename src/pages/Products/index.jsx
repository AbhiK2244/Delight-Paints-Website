import React, { use, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { FiChevronDown } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import { products, categories } from "../../assets/data/productsPageData";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("category") && categories.includes(searchParams.get("category"))) {
      setSelectedCategory(searchParams.get("category"));
    }
  }, [searchParams]);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All");
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;

    const matchesSubcategory =
      selectedCategory !== "Primer" ||
      selectedSubcategory === "All" ||
      product.subcategory === selectedSubcategory;

    return matchesCategory && matchesSubcategory;
  });

  return (
    <section className="min-h-screen bg-[#fdfcf9] px-4 pb-16 pt-24 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="font-bold text-center leading-tight tracking-[-0.04em] text-[#102b4c] text-[40px] md:text-[46px]">
            Our Products
          </h1>

          <p className="mt-2 w-full text-[12px] leading-6 text-[#777] sm:text-[13px] sm:leading-7">
            Discover quality paints and finishes designed to bring your spaces
            to life. Find the perfect solution for every surface and every home.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 rounded-2xl border border-[#eeeae5] bg-white/80 p-4 shadow-[0_3px_15px_rgba(0,0,0,0.025)] sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-[#222]">
                Select a Category
              </h2>

              <p className="mt-1 text-[10px] text-[#999] sm:text-[11px]">
                Find the right paint for your needs.
              </p>
            </div>

            <p className="text-[10px] font-medium text-[#888] sm:text-[11px]">
              {filteredProducts.length} Products
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[10px] font-semibold transition-all duration-200 sm:px-5 sm:text-[11px] ${
                  selectedCategory === category
                    ? "border-[#c73524] bg-[#c73524] text-white shadow-md shadow-[#c73524]/15"
                    : "border-[#e8e4df] bg-[#fdfcf9] text-[#555] hover:border-[#c73524]/50 hover:text-[#c73524]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Primer Subcategory Filter */}
          {selectedCategory === "Primer" && (
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#eeeae5] pt-4">
              <label
                htmlFor="primer-filter"
                className="text-[11px] font-semibold text-[#555]"
              >
                Primer Type:
              </label>

              <div className="relative">
                <select
                  id="primer-filter"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="h-10 min-w-[155px] appearance-none rounded-lg border border-[#e8e4df] bg-[#fdfcf9] pl-4 pr-10 text-[11px] font-medium text-[#444] outline-none transition-colors focus:border-[#c73524]"
                >
                  <option value="All">All Primers</option>
                  <option value="Exterior">Exterior Primer</option>
                  <option value="Interior">Interior Primer</option>
                </select>

                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#777]" />
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[#eeeae5] bg-linear-to-b from-white from-55% to-[#f6bdb6]/40 group-hover:to-[#f6bdb6]/40 transition-all duration-300 hover:border-[#e7c7bb] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
              >
                {/* Product Image */}
                <div className="relative flex h-[270px] items-center justify-center overflow-hidden p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 mt-1"
                  />

                  {/* Special Product Badge */}
                  {product.specialType && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#102b4c] px-2 py-0.5 text-[7px] font-semibold text-white shadow-sm">
                      {product.specialType}
                    </span>
                  )}

                  <p className="absolute left-3 top-3 mb-2 w-fit rounded-full bg-[#f9eeea] px-3 py-1 text-[9px] font-semibold text-[#b83a2b]">
                    {product.category}
                    {product.subcategory && ` · ${product.subcategory}`}
                  </p>
                </div>

                {/* Product Information */}
                <div className="flex flex-1 p-4 justify-center">
                  <h3 className="text-[15px] font-bold leading-[1.4] text-gray-700 transition-colors duration-200 group-hover:text-[#c73524] sm:text-[16px]">
                    {product.name}
                  </h3>

                  {/* <div className="mt-auto flex items-center justify-between border-t border-[#f0ede9] pt-3">
                    <span className="text-[10px] font-semibold text-[#777] transition-colors duration-200 group-hover:text-[#c73524] sm:text-[11px]">
                      View Product
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e4df] text-[#c73524] transition-all duration-300 group-hover:border-[#c73524] group-hover:bg-[#c73524] group-hover:text-white">
                      <TiArrowRight className="text-lg" />
                    </span>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#e5ded7] bg-white/50 px-5 text-center">
            <h3 className="text-lg font-bold text-[#102b4c]">
              No Products Found
            </h3>

            <p className="mt-2 text-xs text-[#888]">
              No products are available in this category.
            </p>

            <button
              type="button"
              onClick={() => handleCategoryChange("All Products")}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c73524] px-5 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-[#ad2d20]"
            >
              View All Products
              <TiArrowRight className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
