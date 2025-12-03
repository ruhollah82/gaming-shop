// components/product-detail/AskQuestionModal.jsx
"use client";

import { useState } from "react";
import { Modal, message } from "antd";
import { Icon } from "@iconify/react";
import QuestionForm from "./QuestionForm";

export default function AskQuestionModal({ open, onClose, productTitle }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Question submitted:", { ...values, product: productTitle });
      message.success("Your question has been submitted!");
    } catch (err) {
      message.error("Failed to send your question. Please try again.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <Icon icon="mdi:help-circle-outline" className="text-xl" />
          <span>Ask a Question about {productTitle}</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <QuestionForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        loading={loading}
      />
    </Modal>
  );
}
