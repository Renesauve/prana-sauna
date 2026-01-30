import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prana Sauna",
  description: "Authentic sauna experience on the Sunshine Coast - connecting you to nature, wellness, and community.",
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
