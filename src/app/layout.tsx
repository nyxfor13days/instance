import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instance - Portfolio Sharing and More...",
  description: "Instance is a portfolio sharing platform for developers and designers.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Navbar /> */}
          <div className="container max-w-7xl">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
