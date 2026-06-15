import type { Metadata } from "next";
import { AppEntryLoader } from "@/components/app-entry-loader";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quartz Hotel | Luxury Minimal Five-Star Stay",
  description:
    "Quartz Hotel is a luxury minimal five-star city hotel concept with refined rooms, interactive planning, rooftop dining, wellness spaces, and premium service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <AppEntryLoader />
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
