import type { Metadata } from "next";

import "./globals.css";

import { Jaldi } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import StyledModal from "@/components/StyledModal";

const jaldi = Jaldi({
    subsets: ["latin"],
    weight: ["400", "700"],
})

export const metadata: Metadata = {
    title: "chatbot",
    description: "create chatbot and upscale your business",
    icons: {
        icon: "/algeriePostLogo.svg",
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <ThemeProvider className={`${jaldi.className} relative`}>
                    {children}
                    <StyledModal />
                </ThemeProvider>
            </StoreProvider>
        </html>
    );
}