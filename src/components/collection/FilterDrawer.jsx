"use client";

import { Drawer, Collapse, Checkbox, Slider, InputNumber } from "antd";
import { Icon } from "@iconify/react";
import { categories } from "./data/categories";

const { Panel } = Collapse;

export default function FilterDrawer({
  isOpen,
  onClose,
  priceRange,
  onPriceRangeChange,
  selectedAvailability,
  onAvailabilityChange,
}) {
  return (
    <Drawer
      title={null} // We'll render header inside body for full control
      placement="left"
      onClose={onClose}
      open={isOpen}
      width={400}
      styles={{
        body: { padding: 0 },
        header: { display: "none" },
      }}
      className="!rounded-none"
    >
      {/* Drawer Header (matches your HTML) */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h6 className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Icon icon="mdi:tune" className="w-5 h-5" />
          <span>Filter</span>
        </h6>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Close"
        >
          <Icon icon="mdi:close" className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-y-auto">
        {/* Categories Accordion */}
        <Collapse
          defaultActiveKey={["1"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Product categories
              </span>
            }
            key="1"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
            showArrow={true}
          >
            <div className="max-h-60 overflow-y-auto pl-2 pr-4 pb-4">
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category} className="relative">
                    <a
                      href={`/collections/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block py-2 px-3 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                    >
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </Collapse>

        {/* Availability Accordion */}
        <Collapse
          defaultActiveKey={["2"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Availability
              </span>
            }
            key="2"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
          >
            <div className="px-4 pb-4">
              <ul className="space-y-2">
                {["in-stock", "out-of-stock"].map((item) => (
                  <li key={item}>
                    <Checkbox
                      checked={selectedAvailability.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onAvailabilityChange([...selectedAvailability, item]);
                        } else {
                          onAvailabilityChange(
                            selectedAvailability.filter((i) => i !== item)
                          );
                        }
                      }}
                      className="!items-start"
                    >
                      <span className="text-base text-gray-700 ml-2">
                        {item === "in-stock" ? "In stock" : "Out of stock"}{" "}
                        <span className="text-gray-500">
                          ({item === "in-stock" ? 5 : 3})
                        </span>
                      </span>
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </Collapse>

        {/* Price Accordion */}
        <Collapse
          defaultActiveKey={["3"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Price
              </span>
            }
            key="3"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
          >
            <div className="px-4 pb-4">
              <div className="mb-4">
                <Slider
                  range
                  min={0}
                  max={300}
                  value={priceRange}
                  onChange={onPriceRangeChange}
                  className="[&_.ant-slider-track]:!bg-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Price:</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700">$</span>
                  <InputNumber
                    min={0}
                    max={300}
                    value={priceRange[0]}
                    onChange={(val) =>
                      onPriceRangeChange([val || 0, priceRange[1]])
                    }
                    className="w-16 !text-sm"
                  />
                </div>
                <span className="text-gray-700">-</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700">$</span>
                  <InputNumber
                    min={0}
                    max={300}
                    value={priceRange[1]}
                    onChange={(val) =>
                      onPriceRangeChange([priceRange[0], val || 300])
                    }
                    className="w-16 !text-sm"
                  />
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Drawer>
  );
}
