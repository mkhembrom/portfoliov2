import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"w-full mx-auto bg-black z-20"}>
      <div
        id="Project"
        className="max-w-full md:max-w-[800px] mx-auto w-full min-h-full "
      >
        <div
          className={
            "w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between bg-black text-white"
          }
        >
          <div
            id="Project"
            className="max-w-full md:max-w-[800px] mx-auto w-full h-full min-h-[60px] md:min-h-[100px] md:py-8 flex items-center justify-center md:justify-between"
          >
            <h1 className={`text-white text-lg`}>
              &copy; {new Date().getFullYear()} Manjesh, All rights reserved.{" "}
            </h1>
          </div>
          <div className="flex space-x-8 mt-6 md:my-4 flex-row justify-center">
            <a
              href="https://www.linkedin.com/in/manjesh-hembrom/"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer text-white ${
                theme === "light"
                  ? "hover:text-blue-600 "
                  : "hover:text-[#FF0063]"
              }`}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/mkhembrom"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer text-white ${
                theme === "light"
                  ? "hover:text-blue-600 "
                  : "hover:text-[#FF0063]"
              }`}
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
