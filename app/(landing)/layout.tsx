import type { Metadata } from "next";

import '../globals.css';

export const metadata: Metadata = {
  title: "News Portal App",
  description: "News portal with filtering news",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
