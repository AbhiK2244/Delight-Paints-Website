
import React, { useEffect, useRef, useState } from "react";

const statistics = [
  {
    id: 1,
    value: 1000,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    id: 2,
    value: 20,
    suffix: "+",
    label: "Product Solutions",
  },
  {
    id: 3,
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
];

const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const element = countRef.current;

    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let animationFrame;
    let observer;

    const startAnimation = () => {
      const duration = 1800;
      let startTime = null;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min(
          (timestamp - startTime) / duration,
          1
        );

        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
  <section className="stats-font w-full bg-[#fdfcf9] pt-12 pb-8 md:px-8 lg:px-10 border-b-[0.5px] border-[#d17b67]/20">
    <div className="mx-auto max-w-[1400px]">

      {/* Heading */}
      <h2 className="text-center text-sm tracking-[-0.035em] text-gray-600 mb-10">
        A few more facts about us in numbers
      </h2>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-[27px] font-semibold leading-none tracking-[-0.045em] text-[#151923] sm:text-[38px] md:text-[42px]">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
              />
            </h3>

            <p className="mt-2 text-[9px] font-normal leading-tight tracking-[-0.015em] text-[#929292] sm:mt-3 sm:text-[13px] md:text-[14px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);
};

export default StatsSection;
