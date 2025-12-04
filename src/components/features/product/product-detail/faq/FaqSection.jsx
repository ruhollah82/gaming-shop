// components/FaqSection.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Form, message } from "antd";
import { staggerContainer } from "../shared/animations";
import { faqItems } from "@/data/ui";
import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";
import SupportCTA from "./SupportCTA";
import ContactModal from "./ContactModal";
import LiveChatModal from "./LiveChatModal";

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

