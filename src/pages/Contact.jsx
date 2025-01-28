import React from "react";
import { Container } from "reactstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  // Add social media URLs
  const socialLinks = {
    facebook: "https://facebook.com/paradiseguide",
    twitter: "https://twitter.com/paradiseguide",
    instagram: "https://instagram.com/paradiseguide",
    linkedin: "https://linkedin.com/company/paradiseguide",
  };

  // Add navigation URLs
  const navigationLinks = {
    about: "/about",
    services: "/services",
    destinations: "/destinations",
    contact: "/contact",
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about Paradise Guide? We're here to help. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+94 77 123 4567</p>
                  <p className="text-gray-600">+94 71 987 6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@paradiseguide.lk</p>
                  <p className="text-gray-600">support@paradiseguide.lk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">123 Temple Road,</p>
                  <p className="text-gray-600">Colombo 07, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Paradise Guide
              </h3>
              <p className="text-gray-400 mb-4">
                Your ultimate travel companion for exploring the beauty of Sri
                Lanka.
              </p>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Visit our Twitter profile"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Visit our Instagram profile"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Visit our LinkedIn page"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={navigationLinks.about}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={navigationLinks.services}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={navigationLinks.destinations}
                    className="hover:text-white transition-colors"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    to={navigationLinks.contact}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Popular Destinations
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/destinations/sigiriya"
                    className="hover:text-white transition-colors"
                  >
                    Sigiriya
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/kandy"
                    className="hover:text-white transition-colors"
                  >
                    Kandy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/galle-fort"
                    className="hover:text-white transition-colors"
                  >
                    Galle Fort
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/ella"
                    className="hover:text-white transition-colors"
                  >
                    Ella
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for travel tips and updates.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Paradise Guide. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Contact;
