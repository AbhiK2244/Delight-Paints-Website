
import React, { useRef, useState } from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";

const ComparisonSlide = () => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();

    const newPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handlePointerDown = (e) => {
    sliderRef.current.setPointerCapture(e.pointerId);

    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    if (sliderRef.current?.hasPointerCapture(e.pointerId)) {
      sliderRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - 2));
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + 2));
    }

    if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    }

    if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <section className="w-full bg-[#fdfcf9] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10">

      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d17b67] sm:text-[11px]">
            See The Difference
          </p>

          <h2 className="mt-2 text-[28px] font-bold tracking-[-0.04em] text-[#102b4c] sm:text-[35px] md:text-[38px]">
            Before & After
          </h2>

          {/* <p className="mx-auto mt-2 max-w-[500px] text-[12px] leading-6 text-[#777] sm:text-[13px]">
            Drag the slider to compare and experience the
            difference a beautiful finish can make.
          </p> */}
        </div>

        {/* Comparison Slider */}
        <div
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`group relative mx-auto max-h-[400px] w-full max-w-[700px] touch-pan-y select-none overflow-hidden rounded-xl border border-[#eeeae5] bg-[#eeeae5] shadow-[0_8px_30px_rgba(0,0,0,0.06)] aspect-square sm:rounded-2xl ${
            isDragging ? "cursor-ew-resize" : "cursor-col-resize"
          }`}
        >

          {/* Before Image */}
          <img
            src="/images/comparison/before.png"
            alt="Before painting"
            draggable="false"
            className="absolute inset-0 h-full w-full select-none object-cover"
          />

          {/* After Image */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 0 0 ${position}%)`,
            }}
          >
            <img
              src="/images/comparison/after.png"
              alt="After painting"
              draggable="false"
              className="absolute inset-0 h-full w-full select-none object-cover"
            />
          </div>

          {/* Before Label */}
          {/* <div className="absolute left-3 top-3 z-10 rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[11px]">
            BEFORE
          </div> */}

          {/* After Label */}
          {/* <div className="absolute right-3 top-3 z-10 rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[11px]">
            AFTER
          </div> */}

          {/* Slider Divider */}
          <div
            className="absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
            style={{
              left: `${position}%`,
              transform: "translateX(-50%)",
            }}
          />

          {/* Slider Handle */}
          <div
            role="slider"
            tabIndex={0}
            aria-label="Before and after image comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-valuetext={`${Math.round(position)} percent after image visible`}
            aria-orientation="horizontal"
            onKeyDown={handleKeyDown}
            className="absolute top-1/2 z-30 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-white/90 text-[#102b4c] shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c73524] focus:ring-offset-2"
            style={{
              left: `${position}%`,
            }}
          >
            <FaArrowsLeftRight className="text-xl sm:text-2xl" />
          </div>

        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-[#999] sm:text-[11px]">
          <FaArrowsLeftRight className="text-sm text-[#c73524]" />
          <span>Drag to compare</span>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSlide;
