import React from 'react';
import { Container } from 'reactstrap';
import { QRCode } from 'antd';
import MobileImg from '../assets/mobile-pic.png';
import AppStore from '../assets/appleStore.png';
import PlayStore from '../assets/playStore.png';

const MobilePart = () => {
  const appStoreUrl = "https://apps.apple.com/app-url";  
  const playStoreUrl = "https://play.google.com/store/app-url"; 

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-green-50 to-emerald-100 overflow-hidden relative">
      {/* Background overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-green-200/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-blue-100/20"></div>

      <Container className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text and Download */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-playfair">
                Explore Sri Lanka<br />
                With Our Mobile App
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
                Paradise Guide helps you discover the best of Sri Lanka right from your phone. 
                Plan your trips, find attractions, book tours, and navigate like a local—all in one app.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col space-y-4 max-w-xl mx-auto lg:mx-0">
                <h3 className="text-xl font-semibold text-gray-700 text-center lg:text-left">
                  Key Features:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">🗺️</span>
                    Interactive maps and offline navigation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🎫</span>
                    Easy tour and activity bookings
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    Nearby attractions and hidden gems
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🌟</span>
                    Local tips and travel guides
                  </li>
                </ul>
              </div>

              <div className="flex justify-start space-x-8">
                {/* App Store Column */}
                <div className="flex flex-col items-center space-y-3">
                  <img 
                    src={AppStore} 
                    alt="Download on App Store" 
                    className="h-10 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                  />
                  <QRCode
                    value={appStoreUrl}
                    color="#000000"
                    style={{ background: 'white' }}
                    bordered={false}
                    className="shadow-md rounded-lg p-2 bg-white/90"
                    size={80}
                  />
                </div>

                {/* Google Play Column */}
                <div className="flex flex-col items-center space-y-3">
                  <img 
                    src={PlayStore} 
                    alt="Get it on Google Play" 
                    className="h-10 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                  />
                  <QRCode
                    value={playStoreUrl}
                    color="#000000"
                    style={{ background: 'white' }}
                    bordered={false}
                    className="shadow-md rounded-lg p-2 bg-white/90"
                    size={80}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Image */}
          <div className="relative lg:h-[700px] flex items-center justify-center lg:justify-end">
            <div className="relative w-[350px] md:w-[500px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-green-300/20 rounded-full"></div>
              <img 
                src={MobileImg} 
                alt="Paradise Guide Mobile App" 
                className="w-[90%] h-auto relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobilePart;
