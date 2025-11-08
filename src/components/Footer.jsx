"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/shopify",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-4 h-4"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/shopify",
      icon: (
        <svg viewBox="0 0 512 512" className="w-4 h-4">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@shopify",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
        >
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/shopify",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          className="w-4 h-4"
        >
          <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
        </svg>
      ),
    },
  ];

  const helpLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Returns + Exchanges", href: "/delivery-return" },
    { name: "Shipping", href: "/shipping-delivery" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "FAQ's", href: "/faq01" },
    { name: "Compare", href: "/search?view=compare" },
    { name: "My Wishlist", href: "/search?view=wishlist" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "/about-us" },
    { name: "Visit Our Store", href: "/our-store" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about-us" },
    { name: "Account", href: "/account/login" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: "visa" },
    { name: "PayPal", icon: "paypal" },
    { name: "Mastercard", icon: "mastercard" },
    { name: "American Express", icon: "american_express" },
    { name: "Diners Club", icon: "diners_club" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-700 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Contact Section */}
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="block">
                <Image
                  src="//ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286"
                  alt="Ecomus"
                  width={136}
                  height={21}
                  className="h-6 w-auto"
                />
              </Link>

              {/* Address & Contact */}
              <div className="text-gray-300 text-sm space-y-2">
                <p>Address: 1234 Fashion Street, Suite 567,</p>
                <p>New York, NY</p>
                <p>
                  Email: <strong>info@fashionshop.com</strong>
                </p>
                <p>
                  Phone: <strong>(212)555-1234</strong>
                </p>
              </div>

              {/* Get Directions Button */}
              <Link
                href="/store-locations"
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Get direction
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M6.89,64,0,57.11,47.26,9.85H4.92V0H64V59.08H54.15V16.74Z" />
                </svg>
              </Link>

              {/* Social Media */}
              <div className="pt-4">
                <ul className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full hover:border-white hover:text-white transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Help Links - Mobile Collapsible */}
            <div className="lg:block">
              <button
                onClick={() => toggleSection("help")}
                className="flex items-center justify-between w-full lg:hidden text-lg font-medium mb-4"
              >
                Help
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openSections.help ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <h6 className="text-lg font-medium mb-4 hidden lg:block">Help</h6>
              <ul
                className={`space-y-3 ${
                  openSections.help ? "block" : "hidden lg:block"
                }`}
              >
                {helpLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us Links - Mobile Collapsible */}
            <div className="lg:block">
              <button
                onClick={() => toggleSection("about")}
                className="flex items-center justify-between w-full lg:hidden text-lg font-medium mb-4"
              >
                About us
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openSections.about ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <h6 className="text-lg font-medium mb-4 hidden lg:block">
                About us
              </h6>
              <ul
                className={`space-y-3 ${
                  openSections.about ? "block" : "hidden lg:block"
                }`}
              >
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-6">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection("newsletter")}
                  className="flex items-center justify-between w-full text-lg font-medium mb-4"
                >
                  Sign Up for Email
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openSections.newsletter ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <h6 className="text-lg font-medium mb-4 hidden lg:block">
                Sign Up for Email
              </h6>

              <div
                className={`space-y-4 ${
                  openSections.newsletter ? "block" : "hidden lg:block"
                }`}
              >
                <p className="text-gray-300 text-sm">
                  Sign up to get first dibs on new arrivals, sales, exclusive
                  content, events and more!
                </p>

                {/* Newsletter Form */}
                <form className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="flex-1 px-4 py-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                {/* Currency & Language Selector */}
                <div className="flex space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="//cdn.shopify.com/static/images/flags/il.svg?width=16"
                      alt="Israel"
                      width={16}
                      height={12}
                      className="w-4 h-3"
                    />
                    <span className="text-sm">ILS</span>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 19 12"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="17 2 9.5 10 2 2"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">English</span>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 19 12"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="17 2 9.5 10 2 2"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 <span className="font-semibold">Ecomus</span>. All rights
              reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-3">
              {paymentMethods.map((payment) => (
                <div
                  key={payment.name}
                  className="w-9 h-6 bg-white rounded flex items-center justify-center"
                  title={payment.name}
                >
                  <span className="text-xs font-semibold text-gray-600">
                    {payment.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
