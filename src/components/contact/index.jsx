import React, { useContext } from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { ThemeContext } from '../../context/theme'
import { ModelContext } from '../../context/model'

const Contact = () => {

    const { theme } = useContext(ThemeContext);
    const { setToggleModel } = useContext(ModelContext);


    const handleSubmit = () => {
        console.log("Hero")
        setToggleModel(true);
    }

    return (
        <div className={` w-full mx-auto py-40 `}>
            <div id='Contact' className='max-w-full md:max-w-[800px] mx-auto w-full px-4 md:px-0'>
                <div className='flex flex-col md:items-start'>
                    <h2 className={` text-lg uppercase font-bold ${theme === 'light' ? 'text-blue-600 ' : 'text-[#FF0063] '} `}>Contact</h2>
                    <h1 className='text-2xl my-4 font-bold text-black dark:text-[#CDD7F6]'>Don't be shy! Hit me up! 👇</h1>
                </div>
                <div className='flex flex-col  sm:flex-row items-start md:items-center justify-between'>
                    <div className='flex items-center justify-start md:justify-center space-x-4 mt-8'>
                        <div className='h-14 w-14 md:h-20 md:w-20 rounded-full shadow-md flex items-center justify-center '>
                            <div className={`${theme === 'light' ? 'text-blue-600' : 'text-[#FF0063]'}`}>
                                <FaMapLocationDot size={36} />
                            </div>
                        </div>
                        <p className='text-md break-all text-black dark:text-[#CDD7F6]'>Bokaro Steel City, Jharkhand<br />India</p>
                    </div>
                    <div className='flex items-center justify-start md:justify-center space-x-4 mt-8'>

                        <div className='h-14 w-14 md:h-20 md:w-20 rounded-full shadow-md flex items-center justify-center'>
                            <div className={`${theme === 'light' ? 'text-blue-600' : 'text-[#FF0063]'}`}>
                                <HiMail size={36} />
                            </div>
                        </div>
                        <p className='text-md break-all text-black dark:text-[#CDD7F6]'>manjesh.hembrom@gmail.com</p>

                    </div>
                </div>
                <button onClick={handleSubmit} className={`cursor-pointer my-10 py-4 md:py-2 text-xl px-4 rounded-xl text-white md:text-center mx-auto w-full sm:w-[200px] md:w-[200px]  ${theme === 'light' ? 'bg-blue-600' : 'bg-[#FF0063]'}`}>
                    Message me
                </button>
            </div>

        </div>
    )
}

export default Contact