"use client";

import { useEffect, useState } from "react";
import { QuartzLoaderScreen } from "@/components/quartz-loader-screen";

const MIN_DISPLAY_MS = 1100;
const FADE_MS = 380;

export function AppEntryLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    const dismiss = () => {
      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));

      fadeTimer = setTimeout(() => {
        setIsFading(true);
        removeTimer = setTimeout(() => {
          setIsVisible(false);
        }, FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => {
      window.removeEventListener("load", dismiss);
      if (fadeTimer) {
        clearTimeout(fadeTimer);
      }
      if (removeTimer) {
        clearTimeout(removeTimer);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-[380ms] ${
        isFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <QuartzLoaderScreen className="min-h-full" />
    </div>
  );
}
