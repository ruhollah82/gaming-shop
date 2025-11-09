"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [email, setEmail] = useState("");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/shopify",
      icon: "mdi:facebook",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      href: "https://x.com/shopify",
      icon: "mdi:twitter",
      color: "hover:bg-sky-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: "mdi:instagram",
      color: "hover:bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@shopify",
      icon: "mdi:tiktok",
      color: "hover:bg-black",
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/shopify",
      icon: "mdi:pinterest",
      color: "hover:bg-red-600",
    },
  ];

  const helpLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: "mdi:shield-account",
    },
    {
      name: "Returns + Exchanges",
      href: "/delivery-return",
      icon: "mdi:refresh",
    },
    { name: "Shipping", href: "/shipping-delivery", icon: "mdi:truck-fast" },
    {
      name: "Terms & Conditions",
      href: "/terms-conditions",
      icon: "mdi:file-document",
    },
    { name: "FAQ's", href: "/faq01", icon: "mdi:help-circle" },
    {
      name: "Compare",
      href: "/search?view=compare",
      icon: "mdi:scale-balance",
    },
    { name: "My Wishlist", href: "/search?view=wishlist", icon: "mdi:heart" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "/about-us", icon: "mdi:book-open" },
    { name: "Visit Our Store", href: "/our-store", icon: "mdi:store" },
    { name: "Contact Us", href: "/contact", icon: "mdi:email" },
    { name: "About Us", href: "/about-us", icon: "mdi:information" },
    { name: "Account", href: "/account/login", icon: "mdi:account" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: "simple-icons:visa" },
    { name: "PayPal", icon: "simple-icons:paypal" },
    { name: "Mastercard", icon: "simple-icons:mastercard" },
    { name: "American Express", icon: "simple-icons:americanexpress" },
    { name: "Diners Club", icon: "simple-icons:dinersclub" },
    { name: "Apple Pay", icon: "simple-icons:applepay" },
    { name: "Google Pay", icon: "simple-icons:googlepay" },
  ];

  const features = [
    { icon: "mdi:truck-fast", text: "Free Shipping Worldwide" },
    { icon: "mdi:shield-check", text: "Secure Payment" },
    { icon: "mdi:refresh", text: "30-Day Returns" },
    { icon: "mdi:headset", text: "24/7 Support" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32"></div>
      </div>

      {/* Features Bar */}
      <motion.div
        className="border-b border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 text-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Icon icon={feature.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand & Contact Section */}
            <motion.div variants={fadeInUp} className="xl:col-span-2 space-y-6">
              {/* Logo */}
              <Link href="/" className="block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Icon icon="mdi:gamepad" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Image
                      src="//ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286"
                      alt="Ecomus"
                      width={136}
                      height={21}
                      className="h-6 w-auto"
                    />
                    <p className="text-gray-300 text-sm mt-1">
                      Premium Gaming Gear
                    </p>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Your ultimate destination for premium gaming equipment.
                Experience unparalleled performance with our carefully curated
                collection of gaming gear.
              </p>

              {/* Address & Contact */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Icon
                    icon="mdi:map-marker"
                    className="w-5 h-5 text-blue-400"
                  />
                  <div>
                    <p className="font-medium">1234 Gaming Street, Suite 567</p>
                    <p className="text-sm">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Icon icon="mdi:email" className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-medium">support@ecomus.com</p>
                    <p className="text-sm">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Icon icon="mdi:phone" className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">(212) 555-1234</p>
                    <p className="text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/store-locations"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold"
                >
                  <Icon icon="mdi:map" className="w-5 h-5" />
                  Get Directions
                </Link>
              </motion.div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-gray-300 font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Help Links */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection("help")}
                  className="flex items-center justify-between w-full text-lg font-semibold mb-4"
                >
                  <span>Customer Support</span>
                  <Icon
                    icon="mdi:chevron-down"
                    className={`w-5 h-5 transform transition-transform ${
                      openSections.help ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <h6 className="text-lg font-semibold mb-6 hidden lg:block flex items-center gap-2">
                <Icon icon="mdi:headset" className="w-5 h-5 text-blue-400" />
                Customer Support
              </h6>

              <AnimatePresence>
                <ul
                  className={`space-y-3 ${
                    openSections.help ? "block" : "hidden lg:block"
                  }`}
                >
                  {helpLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group py-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                          <Icon icon={link.icon} className="w-4 h-4" />
                        </div>
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </AnimatePresence>
            </motion.div>

            {/* About Us Links */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection("about")}
                  className="flex items-center justify-between w-full text-lg font-semibold mb-4"
                >
                  <span>About Ecomus</span>
                  <Icon
                    icon="mdi:chevron-down"
                    className={`w-5 h-5 transform transition-transform ${
                      openSections.about ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <h6 className="text-lg font-semibold mb-6 hidden lg:block flex items-center gap-2">
                <Icon
                  icon="mdi:information"
                  className="w-5 h-5 text-green-400"
                />
                About Ecomus
              </h6>

              <AnimatePresence>
                <ul
                  className={`space-y-3 ${
                    openSections.about ? "block" : "hidden lg:block"
                  }`}
                >
                  {aboutLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group py-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                          <Icon icon={link.icon} className="w-4 h-4" />
                        </div>
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </AnimatePresence>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection("newsletter")}
                  className="flex items-center justify-between w-full text-lg font-semibold mb-4"
                >
                  <span>Stay Updated</span>
                  <Icon
                    icon="mdi:chevron-down"
                    className={`w-5 h-5 transform transition-transform ${
                      openSections.newsletter ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`space-y-6 ${
                  openSections.newsletter ? "block" : "hidden lg:block"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                    <Icon
                      icon="mdi:email-newsletter"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Stay Updated</h6>
                    <p className="text-gray-300 text-sm">
                      Get exclusive deals & updates
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Be the first to know about new arrivals, exclusive sales, and
                  special promotions. Join our gaming community today!
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <Icon
                      icon="mdi:email"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon icon="mdi:send" className="w-5 h-5" />
                    Subscribe Now
                  </motion.button>
                </form>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                        <Icon
                          icon="mdi:shield-check"
                          className="w-5 h-5 text-green-400"
                        />
                      </div>
                      <span className="text-xs text-gray-300">Secure</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                        <Icon
                          icon="mdi:lock"
                          className="w-5 h-5 text-blue-400"
                        />
                      </div>
                      <span className="text-xs text-gray-300">Private</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                        <Icon
                          icon="mdi:email-check"
                          className="w-5 h-5 text-purple-400"
                        />
                      </div>
                      <span className="text-xs text-gray-300">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-700 py-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>
                © 2025{" "}
                <span className="font-semibold text-white">Ecomus Gaming</span>.
                All rights reserved.
              </p>
              <p className="mt-1 text-xs">
                Designed for the ultimate gaming experience
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm font-medium hidden sm:block">
                We Accept:
              </span>
              <div className="flex gap-2">
                {paymentMethods.map((payment, index) => (
                  <motion.div
                    key={payment.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="w-10 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                    title={payment.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon
                      icon={payment.icon}
                      className="w-6 h-6 text-gray-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center text-white z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon icon="mdi:chevron-up" className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
