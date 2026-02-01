"use client";

import { Button, Dropdown } from "antd";
import { Icon } from "@iconify/react";
import { LayoutSwitcher } from "@/components/ui";
import { sortOptions } from "@/data/config";

export default function CollectionControls({
  isFilterOpen,
  setIsFilterOpen,
  selectedLayout,
  onLayoutChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-black"
          onClick={() => setIsFilterOpen(true)}
        >
          <Icon icon="mi:filter" className="w-5 h-5" />
          <span>Filter</span>
        </button>

        <LayoutSwitcher
          selectedLayout={selectedLayout}
          onLayoutChange={onLayoutChange}
        />

        <div>
          <Dropdown
            menu={{
              items: sortOptions.map((opt) => ({
                key: opt.value,
                label: opt.label,
              })),
              onClick: ({ key }) => onSortChange(key),
              selectedKeys: [sortBy],
            }}
            trigger={["click"]}
          >
            <Button className="flex items-center justify-between min-w-[140px]">
              <span className="hidden md:inline-block">
                {sortOptions.find((opt) => opt.value === sortBy)?.label}
              </span>
              <span className="inline-block md:hidden">Sort</span>
              <Icon icon="mdi:chevron-down" className="ml-2 w-4 h-4" />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

