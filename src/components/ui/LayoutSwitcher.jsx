"use client";

import { useState, useEffect } from "react";
import ListLayoutIcon from "@/components/collection/LayoutIcons/ListLayoutIcon";
import GridLayout1Icon from "@/components/collection/LayoutIcons/GridLayout1Icon";
import GridLayout2Icon from "@/components/collection/LayoutIcons/GridLayout2Icon";
import GridLayout3Icon from "@/components/collection/LayoutIcons/GridLayout3Icon";
import GridLayout4Icon from "@/components/collection/LayoutIcons/GridLayout4Icon";
import GridLayout5Icon from "@/components/collection/LayoutIcons/GridLayout5Icon";
import GridLayout6Icon from "@/components/collection/LayoutIcons/GridLayout6Icon";

const mobileLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 1, label: "Grid 1", icon: <GridLayout1Icon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
];

const tabletLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
  { value: 3, label: "Grid 3", icon: <GridLayout3Icon /> },
  { value: 4, label: "Grid 4", icon: <GridLayout4Icon /> },
];

const desktopLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
  { value: 3, label: "Grid 3", icon: <GridLayout3Icon /> },
  { value: 4, label: "Grid 4", icon: <GridLayout4Icon /> },
  { value: 5, label: "Grid 5", icon: <GridLayout5Icon /> },
  { value: 6, label: "Grid 6", icon: <GridLayout6Icon /> },
];

export default function LayoutSwitcher({ selectedLayout, onLayoutChange }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex md:hidden gap-1">
        {mobileLayouts.map((layout) => (
          <button
            key={layout.value}
            onClick={() => onLayoutChange(layout.value)}
            className={`p-2 rounded ${
              selectedLayout === layout.value
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {layout.icon}
          </button>
        ))}
      </div>

      <div className="hidden md:flex lg:hidden gap-1">
        {tabletLayouts.map((layout) => (
          <button
            key={layout.value}
            onClick={() => onLayoutChange(layout.value)}
            className={`p-2 rounded ${
              selectedLayout === layout.value
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {layout.icon}
          </button>
        ))}
      </div>

      <div className="hidden lg:flex gap-1">
        {desktopLayouts.map((layout) => (
          <button
            key={layout.value}
            onClick={() => onLayoutChange(layout.value)}
            className={`p-2 rounded ${
              selectedLayout === layout.value
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {layout.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
