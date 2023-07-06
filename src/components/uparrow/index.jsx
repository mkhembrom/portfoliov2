import React from 'react'
import { useContext } from 'react'
import { IoMdArrowDropup } from "react-icons/io"
import { ThemeContext } from '../../context/theme'

const UpArrow = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            onClick={() => window.scrollTo(0, 0)}
            className='z-20 fixed bottom-12 md:bottom-8 right-8 md:right-16 cursor-pointer group'>
            <span className={`group-hover:animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 transition-all ${theme === "light" ? 'hover:bg-sky-400' : 'hover:bg-rose-400'}`}></span>

            <div className={`w-10 h-10 group-hover:w-10 group-hover:h-10 rounded-full flex items-center  justify-center  ${theme === 'light' ? 'bg-blue-600' : 'bg-[#FF0063]'}`}>
                <IoMdArrowDropup className='' size={30} color='#fff' />
            </div>
        </div>
    )
}

export default UpArrow