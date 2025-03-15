import type { Metadata } from "next";
import "./globals.css";
import { Navigations } from "@/components";
import FooterReachOut from "@/components/footerReachOut";
import ThemeProvider from "@/components/themeProvider";

export const metadata: Metadata = {
  title: "Portfolio || Dodo's",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#09090b] dark:text-[#d9d9d9]">
        <ThemeProvider>
          <div className="p-6 lg:px-16">
            <Navigations />
          </div>
          {children}
          <div className="p-6 lg:px-16">
            <FooterReachOut />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}