"use client";

import { usePathname } from "next/navigation";
import { SiteNavbar } from "@/components/site-navbar";

export function SiteChrome() {
  const pathname = usePathname();

  if (pathname.startsWith("/minimal")) {
    return null;
  }

  return <SiteNavbar />;
}
