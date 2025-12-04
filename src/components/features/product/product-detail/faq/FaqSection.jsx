// components/FaqSection.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Form, message } from "antd";
import { staggerContainer } from "../shared/animations";
import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";
import SupportCTA from "./SupportCTA";
import ContactModal from "./ContactModal";
import LiveChatModal from "./LiveChatModal";

const faqItems = [
  {
    question: "Precision Meets Affordability",
    answer:
      "Experience pinpoint accuracy with a sensor that rivals top-tier brands — all at a price that doesn't break your budget.",
    icon: "mdi:target",
  },
  {
    question: "Minimal Design, Maximum Impact",
    answer:
      "Crafted with a sleek, no-nonsense look, this gear delivers elite-level performance without flashy distractions.",
    icon: "mdi:palette-outline",
  },
  {
    question: "Built to Last, Priced to Win",
    answer:
      "Durable switches, solid build quality, and premium materials — for gamers who grind hard without overpaying.",
    icon: "mdi:shield-check-outline",
  },
  {
    question: "Comfort That Keeps You Playing",
    answer:
      "Ergonomic design and soft-touch finishes ensure long sessions stay comfortable from start to finish.",
    icon: "mdi:arm-flex-outline",
  },
  {
    question: "Fast & Reliable Shipping",
    answer:
      "Free express shipping on orders over $50. Most orders delivered within 3-5 business days.",
    icon: "mdi:truck-fast-outline",
  },
  {
    question: "30-Day Money Back Guarantee",
    answer:
      "Not satisfied? Return within 30 days for a full refund, no questions asked.",
    icon: "mdi:currency-usd-circle",
  },
];

export default function FaqSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);
  const [contactForm] = Form.useForm();
  const [chatForm] = Form.useForm();

  const handleContactSubmit = (values) => {
    console.log("Contact form submitted:", values);
    message.success(
      "Your message has been sent! We'll get back to you within 24 hours."
    );
    setIsContactModalOpen(false);
    contactForm.resetFields();
  };

  const handleLiveChatSubmit = (values) => {
    console.log("Live chat started:", values);
    message.success("Connecting you with our support team...");
    setIsLiveChatModalOpen(false);
    chatForm.resetFields();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqHeader />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* FAQ Items */}
          <motion.div
            className="w-full lg:w-7/12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div
              className="grid gap-4"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqItems.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  icon={item.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <SupportCTA
            onContactClick={() => setIsContactModalOpen(true)}
            onLiveChatClick={() => setIsLiveChatModalOpen(true)}
          />
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        form={contactForm}
      />

      <LiveChatModal
        isOpen={isLiveChatModalOpen}
        onClose={() => setIsLiveChatModalOpen(false)}
        onSubmit={handleLiveChatSubmit}
        form={chatForm}
      />
    </section>
  );
}

