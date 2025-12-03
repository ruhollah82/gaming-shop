"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";

const { TextArea } = Input;

export default function QuestionForm({ onSubmit, onCancel, loading }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await onSubmit(values);
      form.resetFields();
      onCancel();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
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
  );
}
