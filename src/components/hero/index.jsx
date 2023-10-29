import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../context/theme";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="Home" className="w-full mx-auto">
      <div className="max-w-full md:max-w-[800px] mx-auto h-screen flex items-center justify-center">
        <div className="h-96 flex flex-col items-center md:items-start justify-center">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <h1 className="text-xl md:text-6xl card">
              <span data-color={theme === "light" ? "light" : "dark"}>
                Front-End
              </span>
              <span data-color={theme === "light" ? "light" : "dark"}>
                React
              </span>
              <span data-color={theme === "light" ? "light" : "dark"}>
                Developer
              </span>
            </h1>
            {/* <Avatar /> */}

            <div class="cloud-container">
              <div class="cloud"></div>
              <div class="cloud"></div>
              <div class="cloud"></div>
              <div class="cloud"></div>
              <div class="cloud"></div>
            </div>
          </div>
          <h2 className="text-lg text-center md:text-left md:text-xl my-4">
            Hi, I'm Manjesh Hembrom. A passionate Front-end React Developer
            based in Bokaro, Jharkhand. 📍
          </h2>
          <div className="flex space-x-8 my-4 flex-row justify-center w-full">
            <div
              className={
                "cursor-pointer " +
                `${
                  theme === "light"
                    ? "hover:text-blue-600"
                    : "hover:text-[#FF0063]"
                }`
              }
            >
              <FaLinkedin size={30} />
            </div>
            <div
              className={
                "cursor-pointer " +
                `${
                  theme === "light"
                    ? "hover:text-blue-600"
                    : "hover:text-[#FF0063]"
                }`
              }
            >
              <FaGithub size={30} />
            </div>
          </div>

          {/* <div className='flex flex-row items-start justify-start mt-10'>
                    <h1 className='text-2xl w-40'>Tech |</h1>
                    <div className='flex space-x-4 ml-4 flex-wrap'>
                        {
                            stack.map((item) => {
                                if (item.name === "express" && theme === "light") {
                                    return <img className='hidden' width={40} height={40} key={item.id} src={item.image} alt={item.name} />
                                } else if (item.name === "expressDark" && theme === "dark") {
                                    return <img className='hidden' width={40} height={40} key={item.id} src={item.image} alt={item.name} />
                                } else {
                                    return <img width={40} height={40} key={item.id} src={item.image} alt={item.name} />
                                }
                            })
                        }
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
