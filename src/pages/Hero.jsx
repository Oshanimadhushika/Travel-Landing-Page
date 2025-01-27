import React, { useEffect, useMemo, useState } from "react";
import Tiger_hed from "../assets/tiger_hed.jpeg";
import Tea_plants from "../assets/tea_plants_hed.jpg";
import Diyaluma from "../assets/diyaluma.png";
import Daladha_1_hed from "../assets/daladha_hed.png";

import Kandy_Perahara from "../assets/kandy-perahera-cover-1.jpg";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrls = useMemo(
    () => [
      Tiger_hed,
      Tea_plants,
      Kandy_Perahara,
      Diyaluma,
      Daladha_1_hed,
    ],
    []
  );

  useEffect(() => {
    const nextImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const intervalId = setInterval(nextImage, 5000);

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
      <div className="absolute top-8 left-8 max-w-xl">
        <h1 className="text-6xl font-playfair font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Paradise Guide
        </h1>
        <p className="text-gray-100 text-xl mt-4 font-light leading-relaxed drop-shadow-xl">
          Discover the hidden gems of Sri Lanka, from pristine beaches to ancient temples. 
          Let us guide you through an unforgettable journey in this tropical paradise.
        </p>
      </div>

      {/* Slideshow dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {imageUrls.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              imageIndex === idx 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* <h1 className='text-pink-500 text-4xl font-bold mb-6'>Hero Section</h1>
      <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300'>
        Get Started
      </button> */}
      <div></div>
    </div>
  );
};

export default Hero;
