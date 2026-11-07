import React from "react";
import WhySection from "./components/WhySection";
import Testimonials from "./components/Testimonials";
import PopularChoices from "./components/PopularChoices";
import Campaigns from "./components/Campaigns";
import ProductCategories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import Location from "./components/Location";
import StatsSection from "./components/StatsSection";

const Homepage = () => {
  return (
    <div className="bg-[#fdfcf9]">
      <HeroSection />
      <StatsSection />
      <ProductCategories />
      <PopularChoices />
      <WhySection />
      <Campaigns />
      <Testimonials />
      <Location />
    </div>
  );
};

export default Homepage;
