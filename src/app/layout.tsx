import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "next-themes";

import { Toaster } from "sonner";

import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowSync",
  description:
    "Modern AI SaaS Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >

          <SearchProvider>

            <Toaster
              richColors
              position="top-right"
            />

            {children}

          </SearchProvider>

        </ThemeProvider>

      </body>

    </html>
  );
}