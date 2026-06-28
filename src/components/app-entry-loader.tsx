"use client";

import { useEffect, useState } from "react";
import { QuartzLoaderScreen } from "@/components/quartz-loader-screen";

const MIN_DISPLAY_MS = 1100;
const OPEN_MS = 900;

export function AppEntryLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let openTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;
    document.body.classList.remove("quartz-page-ready");

    const dismiss = () => {
      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));

      openTimer = setTimeout(() => {
        setIsOpening(true);
        document.body.classList.add("quartz-page-ready");
        removeTimer = setTimeout(() => {
          setIsVisible(false);
        }, OPEN_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => {
      window.removeEventListener("load", dismiss);
      if (openTimer) {
        clearTimeout(openTimer);
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
      className="fixed inset-0 z-[120] pointer-events-none"
      aria-hidden="true"
    >
      <QuartzLoaderScreen className="min-h-full" isOpening={isOpening} />
    </div>
  );
}
