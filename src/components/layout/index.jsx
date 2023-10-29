import React from "react";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import { ThemeContext } from "../../context/theme";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const circle = useRef({
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseOver = (e) => {
    const { clientX, clientY } = e;

    const mouseX = clientX;
    const mouseY = clientY;

    circle.current.style.position = `fixed`;
    circle.current.style.top = `${mouseY}px`;
    circle.current.style.left = `${mouseX}px`;
    circle.current.style.transform = `translate(-50%, -50%)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseOver);
    return () => window.removeEventListener("mousemove", handleMouseOver);
  }, []);

  return (
    <div className="  w-full h-full bg-[#f7f7f7] dark:bg-[#0B192E] text-[#2d2e32] dark:text-[#f7f7f7] relative">
      <div
        ref={circle}
        className={`fixed h-64 w-64 rounded-full opacity-50 blur-[120px] ${
          theme === "light" ? "bg-blue-300" : "bg-[#6a6a94]"
        }`}
      ></div>

      {children}
    </div>
  );
};

export default Layout;
