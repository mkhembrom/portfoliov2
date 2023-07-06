import React, { useEffect, useState } from 'react'
import Avatar from '../hero/avatar'
import { motion } from "framer-motion"
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import { CiCircleChevDown } from "react-icons/ci"
import { HiChevronDoubleDown } from "react-icons/hi"
import { TypeAnimation } from 'react-type-animation';
import AnimateWord from '../../utils/animateType'



const HeroTwo = () => {

    const { theme } = useContext(ThemeContext);

    const { ref, inView, entry } = useInView({
        threshold: 0,
        rootMargin: '-100px'
    })
    return (
        <div id='Home' className='w-full h-screen mx-auto -mt-16'>
            <div className='max-w-full md:max-w-[800px] mx-auto h-screen flex items-center justify-center px-4 md:px-0 relative'>
                <div ref={ref} className='flex flex-col items-start justify-center w-full mt-20'>
                    {/* <Avatar /> */}


                    <div className='overflow-hidden'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{
                                duration: 1
                            }} className={
                                'text-md  font-bold leading-3 py-2	tracking-wider ' + `${theme === 'light' ? 'text-blue-600' : 'text-[#FF0063]'}`}>Hi, my name is</motion.h1>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                            transition={{
                                duration: 1
                            }}
                            className={'text-3xl md:text-6xl font-semibold my-2 md:my-5 ' + `${theme === 'light' ? 'text-[#0B192E]' : 'text-[#CDD7F6]'}`}>Manjesh Hembrom.</motion.h1>
                    </div>
                    <div className='overflow-hidden h-full'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{
                                duration: 0.8
                            }}
                            className={'w-full text-3xl md:text-6xl font-semibold overflow-hidden py-2 ' + `${theme === 'light' ? 'text-[#849dc9]' : 'text-[#8892b0]'}`}>
                            I build things for the <span className={`${theme === 'light' ? 'text-blue-600' : 'text-[#FF0063]'}`}>web.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: [0, 0.5, 1] } : { opacity: 0 }}
                        transition={{
                            duration: 5
                        }}
                        className={'text-md mt-5 md:w-2/3 leading-7 w-full ' + `${theme === 'light' ? 'text-[#849dc9]' : 'text-[#8892b0]'}`}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</motion.p>

                    <div className='flex space-x-8 my-10 flex-row justify-start w-full'>
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
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 2
                    }}
                    onClick={() => {
                        window.location.href = '/#About'

                    }}
                    className={`
                        flex
                        items-center justify-center
                        text-blue-600
                        dark:text-[#FF0063]
                        w-full
                        absolute
                        bottom-10 
                        left-0 
                        right-0 
                        cursor-pointer
                        updown`}
                >
                    <HiChevronDoubleDown size={30} />
                </motion.div>

            </div>
        </div>
    )
}

export default HeroTwo