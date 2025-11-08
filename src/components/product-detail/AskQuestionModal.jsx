// components/product-detail/AskQuestionModal.jsx
"use client";

import { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

export default function AskQuestionModal({ open, onClose, productTitle }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Question submitted:", { ...values, product: productTitle });
      message.success("Your question has been submitted!");
      form.resetFields();
      onClose();
    } catch (err) {
      message.error("Failed to send your question. Please try again.");
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
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item name="phone" label="Phone (optional)">
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Your Question"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            className="w-full"
          >
            Send Question
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
