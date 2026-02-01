"use client";

import { useState, useEffect } from "react";
import ListLayoutIcon from "@/features/collections/components/LayoutIcons/ListLayoutIcon";
import GridLayout1Icon from "@/features/collections/components/LayoutIcons/GridLayout1Icon";
import GridLayout2Icon from "@/features/collections/components/LayoutIcons/GridLayout2Icon";
import GridLayout3Icon from "@/features/collections/components/LayoutIcons/GridLayout3Icon";
import GridLayout4Icon from "@/features/collections/components/LayoutIcons/GridLayout4Icon";
import GridLayout5Icon from "@/features/collections/components/LayoutIcons/GridLayout5Icon";
import GridLayout6Icon from "@/features/collections/components/LayoutIcons/GridLayout6Icon";
import { getLayoutOptions } from "@/lib/api";

export default function LayoutSwitcher({ selectedLayout, onLayoutChange }) {
  const [layoutOptions, setLayoutOptions] = useState({
    mobile: [],
    tablet: [],
    desktop: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLayoutOptions = async () => {
      try {
        const options = await getLayoutOptions();
        setLayoutOptions(options);
      } catch (error) {
        console.error("Failed to fetch layout options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLayoutOptions();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex md:hidden gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
        <div className="hidden md:flex lg:hidden gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
        <div className="hidden lg:flex gap-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  const mobileLayoutsWithIcons = layoutOptions.mobile.map((layout) => ({
    ...layout,
    icon:
      layout.value === 0 ? (
        <ListLayoutIcon />
      ) : layout.value === 1 ? (
        <GridLayout1Icon />
      ) : (
        <GridLayout2Icon />
      ),
  }));

  const tabletLayoutsWithIcons = layoutOptions.tablet.map((layout) => ({
    ...layout,
    icon:
      layout.value === 0 ? (
        <ListLayoutIcon />
      ) : layout.value === 2 ? (
        <GridLayout2Icon />
      ) : layout.value === 3 ? (
        <GridLayout3Icon />
      ) : (
        <GridLayout4Icon />
      ),
  }));

  const desktopLayoutsWithIcons = layoutOptions.desktop.map((layout) => ({
    ...layout,
    icon:
      layout.value === 0 ? (
        <ListLayoutIcon />
      ) : layout.value === 2 ? (
        <GridLayout2Icon />
      ) : layout.value === 3 ? (
        <GridLayout3Icon />
      ) : layout.value === 4 ? (
        <GridLayout4Icon />
      ) : layout.value === 5 ? (
        <GridLayout5Icon />
      ) : (
        <GridLayout6Icon />
      ),
  }));

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
