import type { Metadata } from "next";
import "./globals.css";
import { Navigations } from "@/components";
import FooterReachOut from "@/components/footerReachOut";
import ThemeProvider from "@/components/themeProvider";

export const metadata: Metadata = {
  title: "ORJI DOMINION",
  description:
    "Disciplined Web Developer, Who Clearly Understands how the web works. A Solidity FanBoy ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-black dark:dark-gradient dark:text-[#d9d9d9]">
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
