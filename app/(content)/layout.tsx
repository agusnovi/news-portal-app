import type { Metadata } from "next";
import MainHeader from "@/components/header/main-header";

import '../globals.css';

export const metadata: Metadata = {
  title: "News Portal App",
  description: "News portal with filtering news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
