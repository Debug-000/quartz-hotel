import { MinimalPreviewNavbarThree } from "@/components/minimal-preview-navbar-three";

export default function MinimalThreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#17140f]">
      <MinimalPreviewNavbarThree />
      <div className="relative overflow-x-hidden">
        {children}
      </div>
    </main>
  );
}
