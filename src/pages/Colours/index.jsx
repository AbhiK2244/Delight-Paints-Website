import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { colours } from "../../assets/data/colors";

const categories = [
  "All Colours",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple & Pink",
  "Brown",
  "Grey",
  "White & Off-white",
];


const ColourFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Colours");
  const [copiedColour, setCopiedColour] = useState(null);

  const filteredColours =
    selectedCategory === "All Colours"
      ? colours
      : colours.filter((colour) => colours.category === selectedCategory);

  const handleCopy = async (colour) => {
    try {
      await navigator.clipboard.writeText(colour.hex + " (" + colour.name + ")");
      setCopiedColour(colour.id);

      setTimeout(() => {
        setCopiedColour(null);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy colour code:", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#fdfcf9] pb-16 pt-24 px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="font-bold leading-tight tracking-[-0.04em] text-[#102b4c] text-[40px] md:text-[46px]">
            Find Your Perfect Colour
          </h1>

          <p className="mt-2 max-w-[600px] leading-6 text-[#777] text-[13px]">
            Discover beautiful shades for every space. From subtle neutrals to
            bold statement colours, find the perfect shade to express your
            style.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 rounded-2xl border border-[#eeeae5] bg-white/80 p-4 shadow-[0_3px_15px_rgba(0,0,0,0.025)] sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-[#102b4c]">
                Colour Families
              </h2>

              <p className="mt-1 text-[#999] text-[11px]">
                Choose a colour family to explore its shades.
              </p>
            </div>

            <span className="shrink-0  font-semibold text-[#888] text-[11px]">
              {filteredColours.length} Shades
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
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
        </div>

        {/* Colour Grid */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[17px] font-bold text-[#102b4c] sm:text-[20px]">
            {selectedCategory === "All Colours"
              ? "All Shades"
              : `${selectedCategory} Shades`}
          </h2>

          <span className="text-[10px] text-[#999] sm:text-[11px]">
            {filteredColours.length} colours available
          </span>
        </div>

        {filteredColours.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredColours.map((colour) => (
              <div
                key={colour.id}
                className="group overflow-hidden rounded-xl border border-[#eeeae5] bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e5c4b8] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] sm:p-3"
              >
                {/* Colour Swatch */}
                <div
                  className="relative h-[100px] overflow-hidden rounded-lg sm:h-[125px] md:h-[135px]"
                  style={{
                    backgroundColor: colour.hex,
                  }}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => handleCopy(colour)}
                    aria-label={`Copy ${colour.hex} for ${colour.name}`}
                    title="Copy HEX code"
                    className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/85 text-[#333] opacity-100 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    {copiedColour === colour.id ? (
                      <FiCheck className="text-sm text-green-600" />
                    ) : (
                      <FiCopy className="text-sm" />
                    )}
                  </button>
                </div>

                {/* Colour Information */}
                <div className="px-1 pb-1 pt-3">
                  <h3 className="truncate font-bold text-[#102b4c] text-[12px]">
                    {colour.name}
                  </h3>

                  <div className="mt-1.5 flex items-center justify-between gap-1">
                  <p className="mt-1 text-[9px] text-[#aaa]">
                    {colour.category}
                  </p>
                </div>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#e5ded7] bg-white/50 text-center">
            <h3 className="text-lg font-bold text-[#102b4c]">
              No Shades Found
            </h3>

            <button
              type="button"
              onClick={() => setSelectedCategory("All Colours")}
              className="mt-4 rounded-full bg-[#c73524] px-5 py-2.5 text-[11px] font-bold text-white"
            >
              View All Colours
            </button>
          </div>
        )}

        {/* Colour Disclaimer */}
        <div className="mt-8 rounded-xl border border-[#eee5da] bg-[#faf5ed] p-4 sm:p-5">
          <p className="text-[10px] leading-5 text-[#777] sm:text-[11px]">
            <strong className="text-[#102b4c]">Colour Disclaimer:</strong>{" "}
            Digital colour previews are indicative and may vary depending on
            screen settings, lighting and display calibration. The HEX values
            are approximate visual references, not official paint mixing
            formulas. Always check a physical shade card or sample before making
            your final colour selection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColourFinder;
