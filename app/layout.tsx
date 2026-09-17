import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siguniang → Jiuzhaigou | China 2027",
  description: "A visual travel story for our March 2027 China trip.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}