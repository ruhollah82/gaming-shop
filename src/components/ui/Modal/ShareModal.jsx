// components/product-detail/ShareModal.jsx
"use client";

import { Modal, Button, Divider, Input } from "antd";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ShareModal({ open, onClose, product }) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      product.title
    )}&url=${encodeURIComponent(window.location.href)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      window.location.href
    )}&media=${encodeURIComponent(
      product.image
    )}&description=${encodeURIComponent(product.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${product.title} ${window.location.href}`
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(product.title)}`,
    email: `mailto:?subject=${encodeURIComponent(
      product.title
    )}&body=${encodeURIComponent(window.location.href)}`,
  };

  const handleShare = (platform) => {
    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      title="Share this product"
      open={open}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(shareUrls).map(([platform, url]) => {
            const icons = {
              facebook: "mdi:facebook",
              twitter: "mdi:twitter",
              pinterest: "mdi:pinterest",
              whatsapp: "mdi:whatsapp",
              telegram: "mdi:telegram",
              email: "mdi:email-outline",
            };
            const colors = {
              facebook: "text-blue-600",
              twitter: "text-blue-400",
              pinterest: "text-red-600",
              whatsapp: "text-green-500",
              telegram: "text-blue-500",
              email: "text-gray-600",
            };
            return (
              <button
                key={platform}
                onClick={() => handleShare(platform)}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <Icon
                  icon={icons[platform]}
                  className={`w-6 h-6 ${colors[platform]}`}
                />
                <span className="text-xs capitalize">{platform}</span>
              </button>
            );
          })}
        </div>

        <Divider className="my-4">Or copy link</Divider>

        <div className="flex gap-2">
          <Input
            value={typeof window !== "undefined" ? window.location.href : ""}
            readOnly
            size="large"
          />
          <Button onClick={copyLink} type="primary">
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
