import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { useState } from "react";
import { useLocation } from "react-router";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nav = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Project",
    },
    {
      label: "Contact",
    },
    {
      label: "dark",
    },
  ];
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleHashChange = () => {
      //   if (typeof window !== "undefined") {
      if (nav.map((item) => item.label).includes(location.hash.split("#")[1])) {
        setActiveTab(location.hash.split("#")[1]);
        location.href = `/${location.hash}`;
      } else {
        setActiveTab(location.hash.split("#")[1]);
        location.href = `/${location.hash}`;
      }
      //   }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeTab, location, nav]);

  return (
    <ul className="text-xl flex items-center cursor-pointer">
      {nav.map((item) => {
        if (item.label === "dark") {
          return (
            <button
              key={item.label}
              onClick={toggleTheme}
              className="rounded-md text-sm flex items-center"
            >
              {theme === "dark" ? (
                <img
                  className="drop-shadow"
                  height={24}
                  width={24}
                  src={sun}
                  alt="sun"
                />
              ) : (
                <img
                  className="drop-shadow"
                  height={24}
                  width={24}
                  src={moon}
                  alt="moon"
                />
              )}
            </button>
          );
        }

        return (
          <li key={item.label} className="hidden md:flex mr-8 text-sm">
            <a
              href={`#${item.label}`}
              className={`${
                activeTab === item.label
                  ? `${theme === "light" ? "text-blue-600" : "text-[#FF0063]"}`
                  : ""
              } ${
                theme === "light"
                  ? "hover:text-blue-600 text-[#0B192E]"
                  : "hover:text-[#FF0063] text-[#CDD7F6]"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
