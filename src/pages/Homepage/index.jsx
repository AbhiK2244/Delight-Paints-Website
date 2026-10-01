import React from "react";
import Products from "./components/Products";
import WhySection from "./components/WhySection";
import Testimonials from "./components/Testimonials";

const Homepage = () => {
  return (
    <div className="flex gap-2 flex-col">
      <Products />
      <WhySection />
      <Testimonials />
    </div>
  );
};

export default Homepage;
