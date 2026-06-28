import { MinimalPreviewFooter } from "@/components/minimal-preview-footer";

export default function MinimalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen bg-[#e8ebe2] text-[#213029]">
      <div className="relative overflow-x-hidden">
        {children}
      </div>
      <MinimalPreviewFooter />
    </main>
  );
}
