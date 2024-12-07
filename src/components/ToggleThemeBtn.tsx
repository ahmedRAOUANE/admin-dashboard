"use client";

import { RootState } from "@/store";
import { setTheme } from "@/store/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ToggleThemeBtn = ({ className }: { className?: string }) => {
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const dispatch = useDispatch();

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isDarkMode = e.target.checked;

        dispatch(setTheme(isDarkMode ? "dark" : "light"));
    };

    return (
        <label className={`relative flex items-center cursor-pointer ${className}`}>
            {/* Checkbox for toggling theme */}
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={handleThemeChange}
                checked={theme === "dark"}
            />

            {/* Slider background */}
            <div className="w-11 h-6 transition-all bg-gray rounded-full peer-checked:bg-primary flex items-center relative"></div>

            {/* Slider toggle */}
            <span className="absolute left-1.5 w-5 h-5 bg-white rounded-full peer-checked:left-5 transition-transform"></span>
        </label>
    );
};

export default ToggleThemeBtn;

