import { Modal, Form, Input, Button, message } from "antd";
import { Icon } from "@iconify/react";

const LiveChatModal = ({ isOpen, onClose, onSubmit, form }) => {
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
};

export default LiveChatModal;
