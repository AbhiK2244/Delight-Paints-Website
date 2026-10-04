import React from "react";
import WhySection from "./components/WhySection";
import Testimonials from "./components/Testimonials";
import PopularChoices from "./components/PopularChoices";
import Campaigns from "./components/Campaigns";
import ProductCategories from "./components/Categories";

const Homepage = () => {
  return (
    <div className="pt-16 bg-[#fdfcf9]">
      <ProductCategories />
      <PopularChoices />
      <WhySection />
      <Campaigns />
      <Testimonials />
    </div>
  );
};

export default Homepage;
