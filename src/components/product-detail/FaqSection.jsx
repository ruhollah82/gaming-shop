// components/FaqSection.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Modal, Form, Input, message } from "antd";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

export default function FaqSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);
  const [contactForm] = Form.useForm();
  const [chatForm] = Form.useForm();

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

  // Animation variants matching ProductInfo
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
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
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6"
          >
            <Icon icon="mdi:help-circle" className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Support Center
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our products and services. Can't
            find the answer you're looking for? Reach out to our support team.
          </p>
        </motion.div>

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

          {/* Contact CTA */}
          <motion.div
            className="w-full lg:w-5/12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-4">
                  <Icon icon="mdi:headset" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Need More Help?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our support team is here to answer your questions and help you
                  get the most out of your product.
                </p>
              </div>

              <div className="space-y-4">
                {/* Support Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      icon: "mdi:clock-outline",
                      label: "24/7 Support",
                      color: "text-green-600",
                    },
                    {
                      icon: "mdi:shield-check",
                      label: "Secure",
                      color: "text-blue-600",
                    },
                    {
                      icon: "mdi:rocket-launch",
                      label: "Fast Response",
                      color: "text-purple-600",
                    },
                    {
                      icon: "mdi:expert",
                      label: "Experts",
                      color: "text-orange-600",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      variants={scaleIn}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
                    >
                      <Icon
                        icon={feature.icon}
                        className={`w-5 h-5 ${feature.color}`}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.button
                  onClick={() => setIsContactModalOpen(true)}
                  className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon icon="mdi:email-outline" className="w-6 h-6" />
                    <span>Send Message</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  onClick={() => setIsLiveChatModalOpen(true)}
                  className="group relative w-full py-4 px-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon icon="mdi:message-text-outline" className="w-6 h-6" />
                    <span>Start Live Chat</span>
                  </div>
                </motion.button>

                {/* Contact Info */}
                <motion.div
                  variants={fadeInUp}
                  className="pt-6 border-t border-gray-200 space-y-3"
                >
                  {[
                    {
                      icon: "mdi:phone",
                      label: "+1 (555) 123-4567",
                      action: "tel:+15551234567",
                    },
                    {
                      icon: "mdi:email",
                      label: "support@ecomus.com",
                      action: "mailto:support@ecomus.com",
                    },
                    {
                      icon: "mdi:clock",
                      label: "24/7 Available",
                      action: null,
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.action}
                      variants={scaleIn}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-all">
                        <Icon icon={contact.icon} className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{contact.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
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

// Enhanced FAQ Item Component
function FaqItem({ question, answer, icon, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      //   variants={fadeInUp}
      transition={{ delay }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      whileHover={{ y: -2 }}
    >
      <button
        className="flex justify-between items-center w-full text-left p-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <Icon icon={icon} className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-left">
            <span
              className="text-lg font-semibold text-gray-900 block mb-1"
              itemProp="name"
            >
              {question}
            </span>
            <span className="text-sm text-blue-600 font-medium">
              Click to {isOpen ? "collapse" : "expand"}
            </span>
          </div>
        </div>

        <motion.div
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <Icon icon="mdi:chevron-down" className="w-5 h-5 text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 border-t border-gray-100 pt-4"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div
                className="text-gray-600 leading-relaxed text-lg"
                itemProp="text"
              >
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Contact Modal Component
function ContactModal({ isOpen, onClose, onSubmit, form }) {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <Icon icon="mdi:email" className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Contact Support
            </h3>
            <p className="text-gray-600">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      styles={{
        body: { padding: 0 },
      }}
    >
      <div className="p-6">
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                size="large"
                placeholder="Enter your full name"
                prefix={<Icon icon="mdi:account" className="text-gray-400" />}
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                size="large"
                placeholder="your@email.com"
                prefix={<Icon icon="mdi:email" className="text-gray-400" />}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input
              size="large"
              placeholder="What is this regarding?"
              prefix={<Icon icon="mdi:tag" className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            label="Your Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea
              rows={4}
              placeholder="How can we help you today?"
              className="resize-none"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-bold text-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="mdi:send" className="w-5 h-5" />
                Send Message
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

// Live Chat Modal Component
function LiveChatModal({ isOpen, onClose, onSubmit, form }) {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
            <Icon icon="mdi:message-text" className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Start Live Chat
            </h3>
            <p className="text-gray-600">
              Connect with our support team instantly
            </p>
          </div>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <div className="p-6 space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
          <div className="flex items-center gap-3">
            <Icon icon="mdi:clock-outline" className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Current wait time: Less than 2 minutes
            </span>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          className="space-y-4"
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              size="large"
              placeholder="Enter your name"
              prefix={<Icon icon="mdi:account" className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              size="large"
              placeholder="your@email.com"
              prefix={<Icon icon="mdi:email" className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            label="What can we help you with?"
            name="topic"
            rules={[{ required: true, message: "Please select a topic" }]}
          >
            <Input
              size="large"
              placeholder="Briefly describe your issue"
              prefix={<Icon icon="mdi:tag" className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full h-12 bg-gradient-to-r from-green-500 to-green-600 border-0 font-bold text-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="mdi:message-text" className="w-5 h-5" />
                Start Chat Session
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
