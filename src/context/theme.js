import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    function onWindowMatch() {
        if (theme === "dark" || localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    onWindowMatch();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

