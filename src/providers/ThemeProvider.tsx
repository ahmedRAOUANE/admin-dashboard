"use client";

import { RootState } from "@/store";
import { ThemeType } from "@/utils/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme as ThemeType);
    const [hidratedTheme, setHidratedTheme] = useState<ThemeType | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHidratedTheme(currentTheme);
        }
    }, [currentTheme]);

    return (
        <body className={`${className} ${hidratedTheme}`}>
            {children}
        </body>
    )
}

export default ThemeProvider

