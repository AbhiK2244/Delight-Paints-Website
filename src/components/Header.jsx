import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full overflow-visible transition-all duration-300 ${
          isScrolled
            ? " bg-transparent shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-[#fdfcf9]"
        }`}
      >
        <div className="relative h-15 w-full">
          <div className="relative mx-auto flex h-full max-w-350 items-center px-5 sm:px-7 lg:px-10 xl:px-12">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex shrink-0 items-center">
              <img
                src={logo}
                alt="Delight Paints"
                className="h-12 w-auto object-contain sm:h-12.5"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="ml-auto hidden h-full items-center gap-7 lg:flex xl:gap-8">
              <Link
                to="/"
                className="text-[11px] font-semibold text-[#c73524] transition-colors hover:text-[#9e2519]"
              >
                Home
              </Link>

              {/* Products */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[11px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
                >
                  Products
                  <FiChevronDown className="text-[11px]" />
                </button>

                <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 translate-y-2 rounded-lg border border-[#eee] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    to="/products/interior"
                    className="block px-4 py-2 text-[11px] text-[#333] hover:bg-[#faf4f1] hover:text-[#c73524]"
                  >
                    Interior Paints
                  </Link>

                  <Link
                    to="/products/exterior"
                    className="block px-4 py-2 text-[11px] text-[#333] hover:bg-[#faf4f1] hover:text-[#c73524]"
                  >
                    Exterior Paints
                  </Link>

                  <Link
                    to="/products/primers"
                    className="block px-4 py-2 text-[11px] text-[#333] hover:bg-[#faf4f1] hover:text-[#c73524]"
                  >
                    Primers
                  </Link>
                </div>
              </div>

              <Link
                to="/inspiration"
                className="text-[11px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
              >
                Inspiration
              </Link>

              <Link
                to="/about"
                className="text-[11px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
              >
                About Us
              </Link>

              <Link
                to="/dealer-network"
                className="text-[11px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
              >
                Dealer Network
              </Link>

              <Link
                to="/contact"
                className="text-[11px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
              >
                Contact
              </Link>
            </nav>

            {/* Search */}
            <div className="relative z-10 ml-7 hidden w-[235px] xl:block">
              <div className="flex h-9.5 items-center rounded-full border border-[#d7d7d7] bg-white/90 px-4 shadow-[0_1px_5px_rgba(0,0,0,0.04)]">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="min-w-0 flex-1 bg-transparent text-[10px] text-[#333] outline-none placeholder:text-[#999]"
                />

                <button
                  type="button"
                  aria-label="Search"
                  className="ml-2 flex shrink-0 items-center justify-center text-[#c73524]"
                >
                  <FiSearch className="text-[17px]" />
                </button>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-[23px] text-[#c73524] transition-colors hover:bg-[#f6ebe7] lg:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-60 bg-black/30 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <aside
        className={`fixed right-0 top-0 z-70 flex h-full w-[290px] max-w-[85vw] flex-col bg-[#fdfcf9] shadow-[-8px_0_30px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-[70px] items-center justify-between border-b border-[#ece9e5] px-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="relative flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Delight Paints"
              className="h-[48px] w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[23px] text-[#333] transition-colors hover:bg-[#f1ebe8] hover:text-[#c73524]"
          >
            <FiX />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col px-4 py-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="border-b border-[#eee9e5] px-3 py-4 text-[14px] font-semibold text-[#c73524]"
          >
            Home
          </Link>

          {/* Mobile Products */}
          <div className="border-b border-[#eee9e5]">
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-3 py-4 text-left text-[14px] font-medium text-[#222]"
            >
              Products
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                productsOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-2 pl-6">
                <Link
                  to="/products/interior"
                  onClick={closeMenu}
                  className="block py-2.5 text-[12px] text-[#666]"
                >
                  Interior Paints
                </Link>

                <Link
                  to="/products/exterior"
                  onClick={closeMenu}
                  className="block py-2.5 text-[12px] text-[#666]"
                >
                  Exterior Paints
                </Link>

                <Link
                  to="/products/primers"
                  onClick={closeMenu}
                  className="block py-2.5 text-[12px] text-[#666]"
                >
                  Primers
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/inspiration"
            onClick={closeMenu}
            className="border-b border-[#eee9e5] px-3 py-4 text-[14px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
          >
            Inspiration
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b border-[#eee9e5] px-3 py-4 text-[14px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
          >
            About Us
          </Link>

          <Link
            to="/dealer-network"
            onClick={closeMenu}
            className="border-b border-[#eee9e5] px-3 py-4 text-[14px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
          >
            Dealer Network
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="border-b border-[#eee9e5] px-3 py-4 text-[14px] font-medium text-[#222] transition-colors hover:text-[#c73524]"
          >
            Contact
          </Link>

          {/* Mobile Search */}
          <div className="mt-6 px-2">
            <div className="flex h-11 items-center rounded-full border border-[#d8d4d0] bg-white px-4">
              <input
                type="text"
                placeholder="Search products..."
                className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#999]"
              />

              <button
                type="button"
                aria-label="Search"
                className="ml-2 text-[#c73524]"
              >
                <FiSearch className="text-[18px]" />
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
