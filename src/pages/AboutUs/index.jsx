
import React from "react";
import { Link } from "react-router";
import {
  FiAward,
  FiLayers,
  FiShield,
  FiTarget,
  FiHeart,
  FiMapPin,
} from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import home from "/images/whysectionimages/home-that-stand.png"

const values = [
  {
    id: 1,
    title: "Quality First",
    description:
      "We are committed to developing paint solutions that deliver quality, durability, and reliable performance.",
    icon: FiAward,
    bg: "bg-[#f9eeea]",
  },
  {
    id: 2,
    title: "Continuous Innovation",
    description:
      "We continuously work towards improving our products to meet the evolving needs of modern homes and spaces.",
    icon: FiLayers,
    bg: "bg-[#edf1f9]",
  },
  {
    id: 3,
    title: "Lasting Protection",
    description:
      "We create products that combine beautiful finishes with protection and lasting performance.",
    icon: FiShield,
    bg: "bg-[#edf4eb]",
  },
];

const AboutUs = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fdfcf9]">

      {/* Hero Section */}
      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-14 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">

          {/* Hero Content */}
          <div className="py-4">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#c73524] sm:text-[11px]">
              Get to Know Us
            </p>

            <h1 className="max-w-[650px] text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-[#102b4c] sm:text-[48px] md:text-[55px] lg:text-[58px]">
              Colouring Your
              <br />
              World,{" "}
              <span className="font-serif italic font-normal text-[#b94e35]">
                Your Way.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[13px] leading-[1.9] text-[#666] sm:text-[14px]">
              Established with the mission of bringing quality,
              innovation, and lasting beauty to every space, Delight
              Paints is a Nepal-based paint manufacturer located in
              Pathari, Morang.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#c73524] px-6 py-3 text-[11px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad2d20] hover:shadow-lg sm:text-xs"
              >
                Explore Our Products
                <TiArrowRight className="text-lg" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c8c0] bg-white px-6 py-3 text-[11px] font-bold text-[#102b4c] transition-all duration-300 hover:border-[#c73524] hover:text-[#c73524] sm:text-xs"
              >
                Contact Us
                <TiArrowRight className="text-lg" />
              </Link>
            </div>

            {/* Location */}
            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9eeea] text-[#c73524]">
                <FiMapPin className="text-lg" />
              </div>

              <div>
                <p className="text-[10px] text-[#999]">
                  Proudly Nepalese
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#102b4c]">
                  Pathari, Morang, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="group relative min-h-[300px] overflow-hidden rounded-2xl bg-[#eee8e0] sm:min-h-[400px] lg:min-h-[470px]">
            <img
              src={home}
              alt="Beautiful modern home showcasing quality paint finishes"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-7 sm:left-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/75">
                Delight Paints
              </p>

              <h2 className="mt-1 max-w-[350px] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Every Space Deserves to Shine.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-[#eeeae5] bg-white p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-12">

          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c73524]">
              Who We Are
            </p>

            <h2 className="mt-2 text-[32px] font-bold leading-tight tracking-[-0.04em] text-[#102b4c] sm:text-[38px]">
              More Than
              <br />
              Just Paint.
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#c73524]" />

            <p className="mt-5 text-[13px] leading-[1.9] text-[#777]">
              Every wall has a story to tell, and every space
              deserves to look its best.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-10 w-1 rounded-full bg-[#c73524]" />

              <p className="text-[12px] font-semibold leading-5 text-[#102b4c]">
                Quality, innovation and lasting beauty in every
                space.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-[13px] leading-[2] text-[#666] sm:text-[14px]">
              We believe that every wall has a story to tell and
              every space deserves to look its best. Driven by a
              commitment to quality and continuous innovation,
              we develop high-performance paint solutions that
              combine aesthetics, durability, and protection.
            </p>

            <p className="text-[13px] leading-[2] text-[#666] sm:text-[14px]">
              From vibrant interiors to weather-resistant exteriors,
              our products are designed to meet the evolving needs
              of modern homes and spaces across Nepal.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f9eeea] p-4">
                <FiHeart className="text-xl text-[#c73524]" />

                <p className="mt-3 text-[12px] font-bold text-[#102b4c]">
                  Made with Purpose
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#777]">
                  Designed around the needs of every home.
                </p>
              </div>

              <div className="rounded-xl bg-[#edf1f9] p-4">
                <FiTarget className="text-xl text-[#102b4c]" />

                <p className="mt-3 text-[12px] font-bold text-[#102b4c]">
                  Driven by Quality
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#777]">
                  Focused on beauty and lasting performance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What Drives Us */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c73524]">
              What Drives Us
            </p>

            <h2 className="mt-2 text-[30px] font-bold tracking-[-0.04em] text-[#102b4c] sm:text-[37px]">
              The Values Behind Every Colour
            </h2>

            <p className="mx-auto mt-3 max-w-[550px] text-[12px] leading-6 text-[#777] sm:text-[13px]">
              Our approach is guided by a commitment to creating
              paint solutions that people can trust and enjoy.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.id}
                  className="group rounded-2xl border border-[#eeeae5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e8c5b8] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:p-7"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.bg}`}>
                    <Icon className="text-[22px] text-[#c73524]" />
                  </div>

                  <h3 className="mt-5 text-[18px] font-bold text-[#102b4c] transition-colors duration-200 group-hover:text-[#c73524]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.9] text-[#777] sm:text-[13px]">
                    {value.description}
                  </p>

                  <div className="mt-5 h-1 w-9 rounded-full bg-[#c73524] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#102b4c]">

          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative z-10 grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-14">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3a192]">
                Looking Ahead
              </p>

              <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[42px]">
                Our Vision Goes Beyond Just Paint.
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[13px] leading-[2] text-white/75 sm:text-[14px]">
                At Delight Paints, our vision goes beyond manufacturing
                paints. We strive to make quality painting solutions
                accessible to everyone, delivering products that people
                can trust, enjoy, and rely on for years to come.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-bold text-[#102b4c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f9eeea] hover:shadow-lg"
              >
                Discover Our Products
                <TiArrowRight className="text-lg" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Our Promise / Tagline */}
      <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          <div className="relative overflow-hidden rounded-2xl border border-[#f0ded7] bg-[#f8ebe5] px-6 py-10 text-center sm:px-10 sm:py-14">

            {/* Decorative Circles */}
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/40 blur-2xl" />

            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#e9a99a]/20 blur-2xl" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c73524]">
                Our Promise
              </p>

              <h2 className="mt-4 text-[31px] font-bold leading-tight tracking-[-0.04em] text-[#102b4c] sm:text-[42px] md:text-[48px]">
                सबैको लागि, सधैंको लागि।
              </h2>

              <p className="mx-auto mt-5 max-w-[750px] text-[12px] leading-[2] text-[#666] sm:text-[13px] md:text-[14px]">
                This is more than just a tagline; it is the promise
                we stand by. A promise to create quality products
                for everyone, make beautiful spaces accessible to
                all, and remain committed to our customers through
                every colour, every wall, and every generation.
              </p>

              <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-[#c73524]" />

              <p className="mt-4 text-[11px] font-semibold tracking-wide text-[#b94e35]">
                Delight Paints
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutUs;
