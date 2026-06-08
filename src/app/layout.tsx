import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Khan | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in MERN Stack, AI Solutions, SaaS Platforms and Enterprise Applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}