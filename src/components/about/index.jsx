import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import TimelineItem from './timelineitem'
import { useState } from 'react'
import avatar from '../../assets/images/manjesh1.jpg';
import { RiArrowRightSFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion'



const About = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        rootMargin: '-100px',
        threshold: 0,
    });

    const skill = [
        "React",
        "Flutter",
        "Node.js",
        "Javascript (ES6+)",
        "Express",
        "Java",

    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const items = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 }
    }


    const { theme } = useContext(ThemeContext)

    return (
        <div className={'w-full h-screen mx-auto '}>
            <div id='About' className='max-w-[800px] mx-auto w-full min-h-screen pb-16 px-4 md:px-0 flex items-center justify-center'>

                <div className='flex flex-col items-start justify-center md:mt-20'>
                    <div ref={ref} className='flex md:flex-row flex-col-reverse items-center justify-between'>
                        <div className='flex md:w-2/3 flex-col '>
                            <div className='overflow-hidden  inline-flex'>
                                <motion.h1
                                    initial={{ opacity: 0, y: 150 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{
                                        duration: 1
                                    }}
                                    className={`
                                    text-2xl 
                                    font-bold
                                    my-4 
                                    text-center 
                                    md:text-left
                                   
                                    ${theme === 'light' ?
                                            'text-blue-600 border-blue-600'
                                            :
                                            'text-[#FF0063] border-[#FF0063]'}`}
                                >
                                    About Me {inView}
                                </motion.h1>
                            </div>

                            {
                                inView &&
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2
                                    }}
                                    className='
                                md:mt-20 
                                text-md
                                leading-6
                                text-left 
                                w-full 
                                md:text-justify
                                md:pr-20  
                                text-black 
                                dark:text-[#CDD7F6]
                                '
                                > I'm <span
                                    className={
                                        `font-semibold 
                                ${theme === 'light' ?
                                            'text-blue-600 border-blue-600'
                                            :
                                            'text-[#FF0063] border-[#FF0063]'
                                        }
                                `}
                                >Manjesh Hembrom</span>, a passionate web developer. I specialize in creating visually appealing and user-friendly websites. With expertise in HTML, CSS, JavaScript, and frameworks like React, I deliver innovative and seamless web solutions.<br /> Let's collaborate to bring your ideas to life!<br /><br /> Here are a few technologies I’ve been working with recently:</motion.p>
                            }
                        </div>

                        {
                            inView && <div className={`flex w-[200px] my-10 md:w-1/3 border  ${theme === 'light' ? 'bg-blue-600 border-blue-600' : 'bg-[#FF0063] border-[#FF0063]'}`}>
                                <img className={`-translate-x-2 -translate-y-2 bg-red-200 border  hover:translate-y-0 hover:translate-x-0 transition-all brightness-50 hover:brightness-100 ${theme === 'light' ? ' border-blue-600' : ' border-[#FF0063]'}`} src={avatar} />
                            </div>
                        }
                    </div>
                    <AnimatePresence>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className='md:w-96 w-full grid grid-cols-2 gap-1 my-2'>

                            {

                                skill.map((item, index) => (

                                    <motion.li
                                        variants={items}
                                        key={index} className={`
                                        w-full
                            list-none 
                            flex
                            text-md
                            py-0 my-0
                            overflow-hidden
                            items-center
                            ${theme === 'light' ? 'text-blue-600 border-blue-600' : 'text-[#FF0063] border-[#FF0063]'}`}
                                    >
                                        <span className={`
                                    mr-2
                                    ${theme === 'light' ? 'text-blue-600 border-blue-600' : 'text-[#FF0063] border-[#FF0063]'}
                                `}
                                        >
                                            <RiArrowRightSFill size={15} />
                                        </span>
                                        {item.toLowerCase()}
                                    </motion.li>


                                ))
                            }

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

export default About