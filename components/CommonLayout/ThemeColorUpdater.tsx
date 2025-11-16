"use client";

import { useEffect } from "react";

interface ThemeColorUpdaterProps {
  color: string;
}

export default function ThemeColorUpdater({ color }: ThemeColorUpdaterProps) {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      // Create the meta tag if it doesn't exist
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
    }
  }, [color]);

  return null;
}
