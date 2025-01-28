import React, { useEffect, useMemo, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Tiger_hed from "../assets/tiger_hed.jpeg";
import Tea_plants from "../assets/tea_plants_hed.jpg";
import Trees from "../assets/about_2.jpeg";
import Daladha_1_hed from "../assets/daladha_hed.png";
import Kandy_Perahara from "../assets/kandy-perahera-cover-1.jpg";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imageUrls = useMemo(
    () => [Tiger_hed, Tea_plants, Kandy_Perahara, Trees, Daladha_1_hed],
    []
  );

  useEffect(() => {
    const nextImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[imageIndex]})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="bg-black h-screen flex flex-col items-center justify-center relative"
      style={backgroundImageStyle}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent z-50">
        <div className="text-2xl font-playfair text-white font-bold">
          SL Guide
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a
            href="#home"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Home
          </a>
          <a
            href="#destinations"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Destinations
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <button className="px-4 py-2 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-md text-sm">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          <HiMenuAlt3 size={28} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-sm md:hidden transition-all duration-300 z-50 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-8 text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <HiX size={28} />
          </button>

          {/* Mobile Logo */}
          <div className="absolute top-6 left-8">
            <span className="text-2xl font-playfair text-white font-bold">
              SL Guide
            </span>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="#home"
              className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              Home
            </a>
            <a
              href="#destinations"
              className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              Destinations
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              Contact
            </a>
            <button className="px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-md text-lg mt-4">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Title and description */}
      <div className="absolute top-32 left-8 max-w-xl">
        <h1 className="text-6xl font-playfair font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Paradise Guide
        </h1>
        <p className="text-white text-xl mt-4 font-semibold leading-relaxed drop-shadow-xl">
          Let us guide you through an unforgettable journey in this tropical
          paradise.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute left-8 bottom-8 flex flex-col gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Slideshow dots*/}
      <div className="absolute md:right-8 bottom-8 md:top-1/2 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 flex flex-row md:flex-col gap-2">
        {imageUrls.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
              imageIndex === idx
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
