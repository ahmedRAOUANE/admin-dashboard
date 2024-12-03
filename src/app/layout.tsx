import type { Metadata } from "next";

import "./globals.css";

import { Jaldi } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Linkbar from "@/components/Linkbar";
import StoreProvider from "@/store/StoreProvider";
import StyledModal from "@/components/StyledModal";
import ThemeProvider from "@/providers/ThemeProvider";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Admin Chatbot",
  description: "chatbot for admin",
  icons: {
    icon: "/algeriePostLogo.svg",
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeProvider className={`${jaldi.className} relative`}>
          <div className="h-screen w-screen grid grid-rows-11 grid-cols-12 bg-gray dark:bg-gray-dark text-foreground dark:text-foreground-dark">
            <Sidebar />

            <div className="col-span-12 md:col-span-10 row-span-11 p-2 px-3 md:p-5 overflow-auto">
              <Linkbar />

              {children}

              <footer className="text-center mt-5">Copyright © 2024</footer>
            </div>
          </div>

          <StyledModal />
        </ThemeProvider>
      </StoreProvider>
    </html>
  );
}

