import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Splitty",
  description: "A friend cost-splitting app for shared outings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
