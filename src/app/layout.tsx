import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Khan | Senior Software Engineer",
  description:
    "Software Engineer specializing in MERN Stack, AI Solutions, Mobile Apps, SaaS Platforms, and Enterprise Applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Set default body background to prevent color flash during initial render hydration loops */}
      <body className="bg-[#0a0304] antialiased text-white">
        {children}
      </body>
    </html>
  );
}