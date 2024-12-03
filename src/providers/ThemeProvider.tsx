"use client";

import { RootState } from "@/store";
import { ThemeType } from "@/utils/types";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme as ThemeType);

    return (
        <body className={`${className} ${currentTheme}`}>
            {children}
        </body>
    )
}

export default ThemeProvider

