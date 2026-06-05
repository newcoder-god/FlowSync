import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: "FlowSync",
  description: "AI SaaS Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster richColors position="top-right" />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}