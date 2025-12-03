import { Modal, Form, Input, Button, message } from "antd";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

const ContactModal = ({ isOpen, onClose, onSubmit, form }) => {
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
};

export default ContactModal;
