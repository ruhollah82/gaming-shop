// components/product-detail/ProductInfo.jsx
"use client";

import { useState } from "react";
import {
  Radio,
  InputNumber,
  Tag,
  Tooltip,
  Button,
  Form,
  Input,
  Modal,
  Divider,
  message,
} from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

export default function ProductInfo({
  product,
  selectedVariant,
  quantity,
  setQuantity,
  onVariantChange,
}) {
  const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [form] = Form.useForm();

  const isSoldOut = product.isSoldOut || product.badges.includes("sold_out");
  const hasDiscount = product.comparePrice && product.discountPercent;
  const isOnSale = product.badges.includes("on_sale");

  const handleAddToCart = () => {
    if (isSoldOut) {
      message.warning("This product is sold out");
      return;
    }
    message.success(`Added ${quantity} ${product.title} to cart`);
  };

  const handleBuyNow = () => {
    if (isSoldOut) {
      message.warning("This product is sold out");
      return;
    }
    message.success("Proceeding to checkout");
  };

  const handleAskQuestion = (values) => {
    console.log("Question submitted:", values);
    message.success("Your question has been submitted!");
    setIsAskQuestionModalOpen(false);
    form.resetFields();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = product.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        url
      )}&media=${encodeURIComponent(
        product.image
      )}&description=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      telegram: `https://telegram.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      email: `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    message.success("Link copied to clipboard!");
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

  return (
    <div className="w-full space-y-8">
      {/* Product Title */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {product.title}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <AnimatePresence>
            {hasDiscount && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                  <Icon icon="mdi:tag" className="w-4 h-4 mr-2" />
                  {product.discountPercent}% OFF
                </span>
              </motion.div>
            )}
            {isSoldOut && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-bold rounded-full shadow-lg">
                  <Icon icon="mdi:clock-outline" className="w-4 h-4 mr-2" />
                  Sold Out
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Product Price */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-baseline gap-4">
            {hasDiscount && (
              <motion.span
                className="text-2xl text-gray-500 line-through font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                ${product.comparePrice}
              </motion.span>
            )}
            <motion.span
              className={`text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ${
                hasDiscount ? "animate-pulse" : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              ${product.price}
            </motion.span>
          </div>

          {hasDiscount && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                <Icon
                  icon="mdi:piggy-bank"
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-green-800 font-bold text-sm">
                  Save ${(product.comparePrice - product.price).toFixed(2)}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Variant Picker */}
      {product.variants && product.variants.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <label className="text-lg font-semibold text-gray-900">
              Color Selection
            </label>
            <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
              {selectedVariant?.colorName}
            </span>
          </div>

          <div className="flex gap-4">
            {product.variants.map((variant) => (
              <Tooltip
                key={variant.id}
                title={variant.colorName}
                placement="top"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <input
                    type="radio"
                    id={`variant-${variant.id}`}
                    name="Color"
                    value={variant.id}
                    checked={selectedVariant?.id === variant.id}
                    onChange={() => onVariantChange(variant.id)}
                    className="sr-only"
                  />
                  <label
                    htmlFor={`variant-${variant.id}`}
                    className={`cursor-pointer block p-1 rounded-2xl transition-all duration-300 ${
                      selectedVariant?.id === variant.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
                        : "bg-gray-100 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-14 h-14 rounded-xl border-4 border-white shadow-md flex items-center justify-center"
                      style={{ backgroundColor: variant.color }}
                    >
                      {selectedVariant?.id === variant.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-white rounded-full p-1 shadow-lg"
                        >
                          <Icon
                            icon="mdi:check"
                            className="w-4 h-4 text-green-600 font-bold"
                          />
                        </motion.div>
                      )}
                    </div>
                  </label>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      )}

      {/* Quantity Selector */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg font-semibold text-gray-900">
            Quantity
          </label>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              isSoldOut
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {isSoldOut ? "Out of stock" : "In stock • Ready to ship"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-2 border border-gray-200">
            <motion.button
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1 || isSoldOut}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="mdi:minus" className="w-5 h-5 text-gray-700" />
            </motion.button>

            <InputNumber
              className="text-center text-xl font-bold w-20 border-0 bg-transparent"
              min={1}
              max={9999}
              value={quantity}
              onChange={setQuantity}
              disabled={isSoldOut}
              controls={false}
              variant="borderless"
            />

            <motion.button
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
              onClick={() => setQuantity(quantity + 1)}
              disabled={isSoldOut}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="mdi:plus" className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>

          <div className="text-sm text-gray-600">
            <div className="font-medium">Total: </div>
            <div className="text-lg font-bold text-green-600">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {/* Primary Actions */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <motion.button
            onClick={handleAddToCart}
            disabled={isSoldOut}
            className={`group relative py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
              isSoldOut
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl hover:scale-105"
            }`}
            whileHover={!isSoldOut ? { scale: 1.02 } : {}}
            whileTap={!isSoldOut ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center justify-center gap-3">
              <Icon
                icon={isSoldOut ? "mdi:clock-outline" : "mdi:cart-plus"}
                className="w-6 h-6"
              />
              <span>{isSoldOut ? "Out of Stock" : "Add to Cart"}</span>
            </div>
            {!isSoldOut && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </motion.button>

          <motion.button
            onClick={handleBuyNow}
            disabled={isSoldOut}
            className={`group relative py-5 px-8 rounded-2xl font-bold text-lg border-2 transition-all duration-300 ${
              isSoldOut
                ? "border-gray-400 text-gray-400 cursor-not-allowed"
                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105"
            }`}
            whileHover={!isSoldOut ? { scale: 1.02 } : {}}
            whileTap={!isSoldOut ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center justify-center gap-3">
              <Icon icon="mdi:rocket-launch" className="w-6 h-6" />
              <span>Buy Now</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Secondary Actions */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-4">
          {[
            {
              icon: "mdi:heart-outline",
              label: "Wishlist",
              color: "text-pink-500 hover:bg-pink-50 hover:border-pink-200",
              action: () => message.info("Added to wishlist"),
            },
            {
              icon: "mdi:scale-balance",
              label: "Compare",
              color:
                "text-purple-500 hover:bg-purple-50 hover:border-purple-200",
              action: () => message.info("Added to compare"),
            },
            {
              icon: "mdi:eye-outline",
              label: "Quick View",
              color: "text-blue-500 hover:bg-blue-50 hover:border-blue-200",
              action: () => message.info("Quick view opened"),
            },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              onClick={item.action}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 bg-white hover:shadow-md transition-all ${item.color}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={scaleIn}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Icon icon={item.icon} className="w-5 h-5" />
              <span className="font-semibold text-sm">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Utility Links */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-6 justify-center py-6 border-t border-b border-gray-100"
      >
        {[
          {
            icon: "mdi:help-circle-outline",
            label: "Ask a question",
            action: () => setIsAskQuestionModalOpen(true),
          },
          {
            icon: "mdi:share-variant",
            label: "Share product",
            action: () => setIsShareModalOpen(true),
          },
          {
            icon: "mdi:truck-fast",
            label: "Shipping info",
            action: () => message.info("Shipping information"),
          },
        ].map((item, index) => (
          <motion.button
            key={item.label}
            onClick={item.action}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={scaleIn}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-blue-200 flex items-center justify-center transition-all">
              <Icon icon={item.icon} className="w-5 h-5" />
            </div>
            <span className="font-semibold">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Features & Trust */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Delivery & Return */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg">
                <Icon
                  icon="mdi:truck-delivery"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Fast & Free Shipping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-green-600">3-6 days</strong> (United
                  States) •{" "}
                  <strong className="text-blue-600">12-26 days</strong>{" "}
                  (International)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                <Icon
                  icon="mdi:refresh-circle"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Return within{" "}
                  <strong className="text-green-600">30 days</strong> of
                  purchase. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center shadow-lg mb-4">
              <Icon icon="mdi:shield-check" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Guaranteed Safe Checkout</h3>
            <p className="text-gray-300">
              Your payment information is secure with us
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {["visa", "mastercard", "paypal", "amex"].map((payment, index) => (
              <motion.div
                key={payment}
                className="w-14 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                variants={scaleIn}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Icon
                  icon={`simple-icons:${payment}`}
                  className="w-8 h-8 text-gray-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <AskQuestionModal
        isOpen={isAskQuestionModalOpen}
        onClose={() => setIsAskQuestionModalOpen(false)}
        onSubmit={handleAskQuestion}
        form={form}
        product={product}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onShare={handleShare}
        onCopy={copyToClipboard}
        product={product}
      />
    </div>
  );
}

// Modal Components
function AskQuestionModal({ isOpen, onClose, onSubmit, form, product }) {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Icon icon="mdi:help-circle" className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Ask a Question</h3>
            <p className="text-gray-600 text-sm">
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

          <Form.Item label="Phone Number (Optional)" name="phone">
            <Input
              size="large"
              placeholder="+1 (555) 000-0000"
              prefix={<Icon icon="mdi:phone" className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            label="Your Question"
            name="message"
            rules={[{ required: true, message: "Please enter your question" }]}
          >
            <TextArea
              rows={4}
              placeholder="What would you like to know about this product?"
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
                Send Question
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

function ShareModal({ isOpen, onClose, onShare, onCopy, product }) {
  const shareOptions = [
    {
      platform: "facebook",
      icon: "mdi:facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook",
    },
    {
      platform: "twitter",
      icon: "mdi:twitter",
      color: "bg-sky-500 hover:bg-sky-600",
      label: "Twitter",
    },
    {
      platform: "pinterest",
      icon: "mdi:pinterest",
      color: "bg-red-600 hover:bg-red-700",
      label: "Pinterest",
    },
    {
      platform: "whatsapp",
      icon: "mdi:whatsapp",
      color: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
    },
    {
      platform: "telegram",
      icon: "mdi:telegram",
      color: "bg-blue-500 hover:bg-blue-600",
      label: "Telegram",
    },
    {
      platform: "email",
      icon: "mdi:email",
      color: "bg-gray-600 hover:bg-gray-700",
      label: "Email",
    },
  ];

  return (
    <Modal
      title={
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Icon
              icon="mdi:share-variant"
              className="w-6 h-6 text-purple-600"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Share This Product
            </h3>
            <p className="text-gray-600 text-sm">
              Spread the word with friends
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shareOptions.map((option, index) => (
            <motion.button
              key={option.platform}
              onClick={() => onShare(option.platform)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl text-white transition-all ${option.color}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon icon={option.icon} className="w-6 h-6" />
              <span className="text-sm font-medium">{option.label}</span>
            </motion.button>
          ))}
        </div>

        <Divider>Or copy link</Divider>

        <div className="flex gap-2">
          <Input
            value={typeof window !== "undefined" ? window.location.href : ""}
            readOnly
            className="flex-1 font-mono text-sm"
          />
          <motion.button
            onClick={onCopy}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Copy
          </motion.button>
        </div>
      </div>
    </Modal>
  );
}
