import React, { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { ThemeContext } from "../../context/theme";
import { ModelContext } from "../../context/model";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { setToggleModel } = useContext(ModelContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleSubmit = () => {
    setToggleModel(true);
  };

  return (
    <div ref={ref} className={` w-full mx-auto py-40 `}>
      <div
        id="Contact"
        className="max-w-full md:max-w-[800px] mx-auto w-full px-4 md:px-0"
      >
        <div className="flex flex-col md:items-start">
          <h2
            className={` text-lg uppercase font-bold underline underline-offset-8 ${
              theme === "light" ? "text-blue-600 " : "text-[#FF0063] "
            } `}
          >
            Contact
          </h2>
          <h1 className="text-2xl my-4 font-bold text-black dark:text-[#CDD7F6]">
            Don't be shy! Hit me up! 👇
          </h1>
        </div>
        <div className="flex flex-col  sm:flex-row items-start md:items-center justify-between">
          <div className="flex items-center justify-start md:justify-center space-x-4 mt-8">
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full shadow-md flex items-center justify-center ">
              <div
                className={`${
                  theme === "light" ? "text-blue-600" : "text-[#FF0063]"
                }`}
              >
                <FaMapLocationDot size={36} />
              </div>
            </div>
            <p className="text-md break-all text-black dark:text-[#CDD7F6]">
              Bokaro Steel City, Jharkhand
              <br />
              India
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-center space-x-4 mt-8">
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full shadow-md flex items-center justify-center">
              <div
                className={`${
                  theme === "light" ? "text-blue-600" : "text-[#FF0063]"
                }`}
              >
                <HiMail size={36} />
              </div>
            </div>
            <p className="text-md break-all text-black dark:text-[#CDD7F6]">
              manjesh.hembrom@gmail.com
            </p>
          </div>
        </div>
        <div className="flex space-x-8 my-10 flex-row justify-start w-full overflow-hidden p-2">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 200 }}
            transition={{
              duration: 0.5,
            }}
            className="dark:bg-[#FF0063] bg-blue-600 translate-x-2"
          >
            <button
              onClick={handleSubmit}
              className="
                                px-[2rem] 
                                py-[1rem]
                                text-blue-600 
                                dark:text-[#FF0063] 
                                border 
                                border-blue-600 
                                dark:border-[#FF0063]
                               -translate-x-2
                               -translate-y-2
                                hover:translate-x-0
                                hover:translate-y-0
                                transition-all
                                dark:bg-[#0B192E]
                                bg-[#F7F7F7]
                                leading-6
                                tracking-wider
                                "
            >
              Message me
            </button>
          </motion.div>
        </div>
        {/* <button onClick={handleSubmit} className={`cursor-pointer my-10 py-4 md:py-2 text-xl px-4 rounded-xl text-white md:text-center mx-auto w-full sm:w-[200px] md:w-[200px]  ${theme === 'light' ? 'bg-blue-600' : 'bg-[#FF0063]'}`}>
                    Message me
                </button> */}
      </div>
    </div>
  );
};

export default Contact;
