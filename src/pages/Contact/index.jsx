import React from "react";
import { Link } from "react-router";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const contactInfo = [
  {
    id: 1,
    title: "Visit Us",
    text: "Biratnagar, Nepal",
    icon: FiMapPin,
  },
  {
    id: 2,
    title: "Call Us",
    text: "+977 01-1234567",
    icon: FiPhone,
  },
  {
    id: 3,
    title: "Email Us",
    text: "info@delightpaints.com",
    icon: FiMail,
  },
  {
    id: 4,
    title: "Working Hours",
    text: "Sun - Fri, 9:00 AM - 6:00 PM",
    icon: FiClock,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Header */}
      <section className="px-4 pb-8 pt-18 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[650px]">

            <h1 className="text-[34px] font-bold leading-[1.05] tracking-[-0.04em] text-[#102b4c] sm:text-[42px] md:text-[48px]">
              Let's talk about your
              <br className="hidden sm:block" />
              next project.
            </h1>

            <p className="mt-4 max-w-[590px] text-sm leading-6 text-[#666] sm:text-[15px]">
              Have a question about our products, colors, or services?
              Our team is here to help you find the right solution for your
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 pb-14 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.35fr]">
          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#102b4c] p-6 text-white sm:p-8">
            {/* Decorative shapes */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c73524]/20" />
            <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Get In Touch
              </p>

              <h2 className="mt-2 text-[25px] font-bold leading-tight sm:text-[29px]">
                We’re here to help.
              </h2>

              <p className="mt-3 max-w-[350px] text-[12px] leading-5 text-white/70 sm:text-[13px]">
                Whether you need product guidance, color advice, or help
                finding a dealer, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f3a69a]">
                        <Icon className="text-[17px]" />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-white/60">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[13px] font-medium text-white">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dealer Link */}
              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="text-[11px] text-white/60">
                  Looking for the nearest dealer?
                </p>

                <Link
                  to="/dealer-network"
                  className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-white transition-all duration-200 hover:gap-2"
                >
                  Find a Dealer
                  <TiArrowRight className="text-[17px]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[18px] border border-[#ece9e5] bg-white p-5 shadow-[0_8px_35px_rgba(0,0,0,0.04)] sm:p-7 md:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c73524]">
                Send Us A Message
              </p>

              <h2 className="mt-1.5 text-[25px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[29px]">
                How can we help?
              </h2>
            </div>

            <form className="mt-7">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[11px] font-semibold text-[#333]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-11 w-full rounded-lg border border-[#dedbd7] bg-[#fdfcf9] px-4 text-[12px] text-[#222] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#c73524] focus:bg-white focus:ring-2 focus:ring-[#c73524]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[11px] font-semibold text-[#333]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-lg border border-[#dedbd7] bg-[#fdfcf9] px-4 text-[12px] text-[#222] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#c73524] focus:bg-white focus:ring-2 focus:ring-[#c73524]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-[11px] font-semibold text-[#333]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-11 w-full rounded-lg border border-[#dedbd7] bg-[#fdfcf9] px-4 text-[12px] text-[#222] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#c73524] focus:bg-white focus:ring-2 focus:ring-[#c73524]/10"
                />
              </div>

              {/* Subject */}
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-[11px] font-semibold text-[#333]"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="h-11 w-full rounded-lg border border-[#dedbd7] bg-[#fdfcf9] px-4 text-[12px] text-[#555] outline-none transition-all duration-200 focus:border-[#c73524] focus:bg-white focus:ring-2 focus:ring-[#c73524]/10"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="product">Product Enquiry</option>
                  <option value="dealer">Dealer Enquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[11px] font-semibold text-[#333]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-lg border border-[#dedbd7] bg-[#fdfcf9] px-4 py-3 text-[12px] leading-5 text-[#222] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#c73524] focus:bg-white focus:ring-2 focus:ring-[#c73524]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-1 rounded-full bg-[#c73524] px-6 py-3 text-[11px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b52e20] hover:shadow-lg sm:px-7"
              >
                <span>Send Message</span>
                <TiArrowRight className="text-[18px]" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {/* <section className="px-4 pb-12 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[18px] bg-[#f3e6e0]">
          <div className="flex flex-col items-start justify-between gap-5 p-6 sm:p-8 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c73524]">
                Need Help Choosing?
              </p>

              <h3 className="mt-1 text-[21px] font-bold text-[#102b4c] sm:text-[24px]">
                Find the right paint for your space.
              </h3>

              <p className="mt-1.5 text-[11px] text-[#666] sm:text-[12px]">
                Explore our complete range of paints and finishes.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#c73524] bg-white px-5 py-2.5 text-[11px] font-bold text-[#c73524] transition-all duration-200 hover:bg-[#c73524] hover:text-white"
            >
              View Products
              <TiArrowRight className="text-[17px]" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;