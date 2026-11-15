import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

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

const colours = [
  // Red
  {
    id: 1,
    name: "Pure Red",
    code: "8093",
    category: "Red",
    hex: "#D5212B",
  },
  {
    id: 2,
    name: "Rhode Island Red-N",
    code: "9947",
    category: "Red",
    hex: "#8E3033",
  },
  {
    id: 3,
    name: "Winery-N",
    code: "9948",
    category: "Red",
    hex: "#6D2338",
  },
  {
    id: 4,
    name: "Maroon Mood-N",
    code: "9997",
    category: "Red",
    hex: "#652C3B",
  },
  {
    id: 5,
    name: "Ketchup Red-N",
    code: "K001",
    category: "Red",
    hex: "#B82F29",
  },

  // Orange
  {
    id: 6,
    name: "Orange Grove-N",
    code: "9898",
    category: "Orange",
    hex: "#D97832",
  },
  {
    id: 7,
    name: "Mustard Orange-N",
    code: "9899",
    category: "Orange",
    hex: "#C67A27",
  },
  {
    id: 8,
    name: "Rustic Earth-N",
    code: "9901",
    category: "Orange",
    hex: "#A65D3D",
  },
  {
    id: 9,
    name: "Dreamsicle",
    code: "7954",
    category: "Orange",
    hex: "#F2A36B",
  },
  {
    id: 10,
    name: "Orange Spark",
    code: "7951",
    category: "Orange",
    hex: "#ED7A27",
  },

  // Yellow
  {
    id: 11,
    name: "Cream Caress",
    code: "7835",
    category: "Yellow",
    hex: "#E8D7A4",
  },
  {
    id: 12,
    name: "Gold Gleam",
    code: "7834",
    category: "Yellow",
    hex: "#D7AE3A",
  },
  {
    id: 13,
    name: "Sunkissed",
    code: "7833",
    category: "Yellow",
    hex: "#E8B85B",
  },
  {
    id: 14,
    name: "Golden Apple",
    code: "7832",
    category: "Yellow",
    hex: "#D2B54B",
  },
  {
    id: 15,
    name: "Lemonade",
    code: "7830",
    category: "Yellow",
    hex: "#E8D978",
  },

  // Green
  {
    id: 16,
    name: "Green Republic",
    code: "7676",
    category: "Green",
    hex: "#78944A",
  },
  {
    id: 17,
    name: "Tranquil Green",
    code: "8388",
    category: "Green",
    hex: "#A3B89A",
  },
  {
    id: 18,
    name: "Mint Essence",
    code: "L117",
    category: "Green",
    hex: "#B7D8C0",
  },
  {
    id: 19,
    name: "Ocean Spray",
    code: "0947",
    category: "Green",
    hex: "#6D9D84",
  },
  {
    id: 20,
    name: "Alpine Green",
    code: "7588",
    category: "Green",
    hex: "#547C60",
  },

  // Blue
  {
    id: 21,
    name: "Sky Mimic",
    code: "7420",
    category: "Blue",
    hex: "#B5D4E8",
  },
  {
    id: 22,
    name: "Fairytale",
    code: "7251",
    category: "Blue",
    hex: "#8BAFC8",
  },
  {
    id: 23,
    name: "Phantom Lake",
    code: "7372",
    category: "Blue",
    hex: "#6E91B0",
  },
  {
    id: 24,
    name: "Sharp Navy-N",
    code: "9642",
    category: "Blue",
    hex: "#263B5D",
  },
  {
    id: 25,
    name: "Ink Blue",
    code: "7246",
    category: "Blue",
    hex: "#263C61",
  },

  // Purple and Pink
  {
    id: 26,
    name: "Baby Orchid-N",
    code: "L187",
    category: "Purple & Pink",
    hex: "#D9B9D7",
  },
  {
    id: 27,
    name: "Lavender Secret",
    code: "7163",
    category: "Purple & Pink",
    hex: "#B8A5CF",
  },
  {
    id: 28,
    name: "Pink Mist",
    code: "8092",
    category: "Purple & Pink",
    hex: "#E9C5D0",
  },
  {
    id: 29,
    name: "Rose Essence",
    code: "9417",
    category: "Purple & Pink",
    hex: "#CE91A6",
  },
  {
    id: 30,
    name: "Acai Berry-N",
    code: "9585",
    category: "Purple & Pink",
    hex: "#663A61",
  },

  // Brown
  {
    id: 31,
    name: "Cold Coffee",
    code: "L129",
    category: "Brown",
    hex: "#A78B76",
  },
  {
    id: 32,
    name: "Sands of Thar-N",
    code: "9879",
    category: "Brown",
    hex: "#C5A77E",
  },
  {
    id: 33,
    name: "Wheat Sprig",
    code: "7891",
    category: "Brown",
    hex: "#C8B58B",
  },
  {
    id: 34,
    name: "Pine Cone",
    code: "7887",
    category: "Brown",
    hex: "#76604C",
  },
  {
    id: 35,
    name: "Roast Brown",
    code: "4198",
    category: "Brown",
    hex: "#6A463A",
  },

  // Grey
  {
    id: 36,
    name: "Confetti",
    code: "8300",
    category: "Grey",
    hex: "#D5D3D0",
  },
  {
    id: 37,
    name: "White Gold",
    code: "8292",
    category: "Grey",
    hex: "#D6D0C0",
  },
  {
    id: 38,
    name: "Snowflake",
    code: "8332",
    category: "Grey",
    hex: "#EBECEA",
  },
  {
    id: 39,
    name: "Ice Grey",
    code: "8259",
    category: "Grey",
    hex: "#C9D0D2",
  },
  {
    id: 40,
    name: "Galactic Grey-N",
    code: "K078",
    category: "Grey",
    hex: "#666B75",
  },

  // White and Off-white
  {
    id: 41,
    name: "Air Breeze",
    code: "9436",
    category: "White & Off-white",
    hex: "#F4F4EB",
  },
  {
    id: 42,
    name: "Winged Angel",
    code: "8100",
    category: "White & Off-white",
    hex: "#F4F0E9",
  },
  {
    id: 43,
    name: "White Clay",
    code: "8620",
    category: "White & Off-white",
    hex: "#E4DDD3",
  },
  {
    id: 44,
    name: "Gossamer",
    code: "8052",
    category: "White & Off-white",
    hex: "#D9D9CF",
  },
  {
    id: 45,
    name: "Crushed Ice",
    code: "L140",
    category: "White & Off-white",
    hex: "#E9EDEF",
  },
];

const ColourFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Colours");
  const [copiedColour, setCopiedColour] = useState(null);

  const filteredColours =
    selectedCategory === "All Colours"
      ? colours
      : colours.filter((colour) => colour.category === selectedCategory);

  const handleCopy = async (colour) => {
    try {
      await navigator.clipboard.writeText(colour.hex);
      setCopiedColour(colour.id);

      setTimeout(() => {
        setCopiedColour(null);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy colour code:", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#fdfcf9] px-4 pb-16 pt-24 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Page Heading */}
        <div className="mb-8">
          {/* <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c73524] sm:text-[11px]">
            Explore Colours
          </p> */}

          <h1 className="text-[32px] font-bold leading-tight tracking-[-0.04em] text-[#102b4c] sm:text-[40px] md:text-[46px]">
            Find Your Perfect Colour
          </h1>

          <p className="mt-2 max-w-[600px] text-[12px] leading-6 text-[#777] sm:text-[13px]">
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

              <p className="mt-1 text-[10px] text-[#999] sm:text-[11px]">
                Choose a colour family to explore its shades.
              </p>
            </div>

            <span className="shrink-0 text-[10px] font-semibold text-[#888] sm:text-[11px]">
              {filteredColours.length} Shades
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible">
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

                  <div className="mt-1.5 flex items-center justify-between gap-1">
                  <h3 className="truncate text-[11px] font-bold text-[#102b4c] sm:text-[12px]">
                    {colour.name}
                  </h3>
                    {/* <span className="text-[9px] font-medium text-[#999] sm:text-[10px]">
                      Ref. {colour.code}
                    </span> */}

                    {/* <span className="text-[9px] font-medium text-[#777] sm:text-[10px]">
                      {colour.hex}
                    </span> */}
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
