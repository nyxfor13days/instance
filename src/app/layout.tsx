import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instance - Portfolio Sharing and More...",
  description:
    "Instance is a portfolio sharing platform for developers and designers.",
};

interface Props {
  children: React.ReactNode;
  authModal: React.ReactNode;
}

export default function RootLayout({ children, authModal }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {authModal}

          <div className="container max-w-7xl">{children}</div>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
