// components/product-detail/ShareModal.jsx
"use client";

import { Modal, Button, Divider, Input } from "antd";
import { Icon } from "@iconify/react";
import { useState, useEffect, useMemo } from "react";

export default function ShareModal({ open, onClose, product }) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareUrls = useMemo(() => {
    if (!currentUrl) return {};
    
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        product.title
      )}&url=${encodeURIComponent(currentUrl)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        currentUrl
      )}&media=${encodeURIComponent(
        product.image
      )}&description=${encodeURIComponent(product.title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        `${product.title} ${currentUrl}`
      )}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent(product.title)}`,
      email: `mailto:?subject=${encodeURIComponent(
        product.title
      )}&body=${encodeURIComponent(currentUrl)}`,
    };
  }, [currentUrl, product.title, product.image]);

  const handleShare = (platform) => {
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const copyLink = async () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
            value={currentUrl}
            readOnly
            size="large"
          />
          <Button onClick={copyLink} type="primary" disabled={!currentUrl}>
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
