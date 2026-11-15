import React from "react";
import WhySection from "./components/WhySection";
import Testimonials from "./components/Testimonials";
import PopularChoices from "./components/PopularChoices";
import Campaigns from "./components/Campaigns";
import ProductCategories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import Location from "./components/Location";
import StatsSection from "./components/StatsSection";
import ComparisonSlide from "./components/ComparisonSlide";

const Homepage = () => {
  return (
    <div className="bg-[#fdfcf9]">
      <HeroSection />
      <ProductCategories />
      <StatsSection />
      <PopularChoices />
      <WhySection />
      <Campaigns />
      <ComparisonSlide />
      <Testimonials />
      <Location />
    </div>
  );
};

export default Homepage;
