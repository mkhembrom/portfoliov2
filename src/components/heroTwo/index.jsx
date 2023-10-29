import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { useInView } from "react-intersection-observer";
import { HiChevronDoubleDown } from "react-icons/hi";
import { ParticleEffect } from "../particles";
import Avatar from "../hero/avatar";

const HeroTwo = () => {
  const { theme } = useContext(ThemeContext);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-100px",
  });
  return (
    <div id="Home" className="w-full h-full mx-auto">
      <div className="max-w-full md:max-w-[800px] mx-auto h-screen flex flex-col items-center justify-start px-4 md:px-0 relative z-20">
        <div
          ref={ref}
          className="flex flex-col items-start justify-start w-full mt-36"
        >
          <Avatar />
          {/* <Avatar /> */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 1,
              }}
              className={
                "text-md  font-bold leading-3 pb-4	tracking-wider " +
                `${theme === "light" ? "text-blue-600" : "text-[#FF0063]"}`
              }
            >
              Hi, my name is
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: -200 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: -200 }}
              transition={{
                duration: 0.8,
              }}
              className={`text-3xl md:text-6xl font-semibold overflow-hidden  ${
                theme === "light" ? "text-[#0B192E]" : "text-[#CDD7F6]"
              }`}
            >
              Manjesh Hembrom.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{
                duration: 0.8,
              }}
              className={
                "w-full text-2xl md:text-6xl font-semibold overflow-hidden py-2 " +
                `${theme === "light" ? "text-[#849dc9]" : "text-[#8892b0]"}`
              }
            >
              I build things for the{" "}
              <span
                className={`${
                  theme === "light" ? "text-blue-600" : "text-[#FF0063]"
                }`}
              >
                web.
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0, 0.5, 1] } : { opacity: 0 }}
            transition={{
              duration: 5,
            }}
            className={
              "text-md mt-5 md:w-2/3 leading-7 w-full " +
              `${theme === "light" ? "text-[#849dc9]" : "text-[#8892b0]"}`
            }
          >
            I’m a software engineer specializing in building (and occasionally
            designing) web and mobile app.
          </motion.p>

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
                onClick={() => window.open("/manjesh_hembrom.pdf")}
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
                Resume
              </button>
            </motion.div>
          </div>
          {/* <div className='flex space-x-8 my-10 flex-row justify-start w-full'>
                        
                        
                        <motion.a
                            href='https://www.linkedin.com/in/manjesh-hembrom/'
                            target='_blank'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 1
                            }}
                            className={` cursor-pointer text-[#849dc9] ${theme === "light" ? 'hover:text-blue-600' : 'hover:text-[#FF0063]'}`}>
                            <FaLinkedin size={30} />
                        </motion.a>
                        <motion.a
                            href='https://github.com/mkhembrom'
                            target='_blank'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 1
                            }}
                            className={`cursor-pointer text-[#849dc9] ${theme === "light" ? 'hover:text-blue-600' : 'hover:text-[#FF0063]'}`}>
                            <FaGithub size={30} />
                        </motion.a>

                        
                    </div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 2,
          }}
          onClick={() => {
            window.location.href = "/#About";
          }}
          className={`
                        flex
                        items-center justify-center
                        text-blue-600
                        dark:text-[#FF0063]
                        w-full
                        absolute
                        bottom-20 
                       
                        left-0 
                        right-0 
                        cursor-pointer
                        updown`}
        >
          <HiChevronDoubleDown size={30} />
        </motion.div>
      </div>
      <div className="-z-50">
        <ParticleEffect />
      </div>
    </div>
  );
};

export default HeroTwo;
