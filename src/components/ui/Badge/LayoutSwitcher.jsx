"use client";

import { useState, useEffect } from "react";
import ListLayoutIcon from "@/features/collections/components/LayoutIcons/ListLayoutIcon";
import GridLayout1Icon from "@/features/collections/components/LayoutIcons/GridLayout1Icon";
import GridLayout2Icon from "@/features/collections/components/LayoutIcons/GridLayout2Icon";
import GridLayout3Icon from "@/features/collections/components/LayoutIcons/GridLayout3Icon";
import GridLayout4Icon from "@/features/collections/components/LayoutIcons/GridLayout4Icon";
import GridLayout5Icon from "@/features/collections/components/LayoutIcons/GridLayout5Icon";
import GridLayout6Icon from "@/features/collections/components/LayoutIcons/GridLayout6Icon";
import { mobileLayouts, tabletLayouts, desktopLayouts } from "@/data/ui";

const mobileLayoutsWithIcons = mobileLayouts.map(layout => ({
  ...layout,
  icon: layout.value === 0 ? <ListLayoutIcon /> :
        layout.value === 1 ? <GridLayout1Icon /> :
        <GridLayout2Icon />
}));

const tabletLayoutsWithIcons = tabletLayouts.map(layout => ({
  ...layout,
  icon: layout.value === 0 ? <ListLayoutIcon /> :
        layout.value === 2 ? <GridLayout2Icon /> :
        layout.value === 3 ? <GridLayout3Icon /> :
        <GridLayout4Icon />
}));

const desktopLayoutsWithIcons = desktopLayouts.map(layout => ({
  ...layout,
  icon: layout.value === 0 ? <ListLayoutIcon /> :
        layout.value === 2 ? <GridLayout2Icon /> :
        layout.value === 3 ? <GridLayout3Icon /> :
        layout.value === 4 ? <GridLayout4Icon /> :
        layout.value === 5 ? <GridLayout5Icon /> :
        <GridLayout6Icon />
}));

export default function LayoutSwitcher({ selectedLayout, onLayoutChange }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex md:hidden gap-1">
        {mobileLayoutsWithIcons.map((layout) => (
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
        {tabletLayoutsWithIcons.map((layout) => (
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
        {desktopLayoutsWithIcons.map((layout) => (
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
