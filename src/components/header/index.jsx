import React from 'react'
import Logo from './logo'
import Nav from './nav'
import { motion } from 'framer-motion'

const Header = () => {


    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 2.5
            }}
            className='z-20 max-w-full md:max-w-[800px] w-full mx-auto sticky top-0 left-0 backdrop-blur-md '>
            <div className=' mx-auto w-full md:px-0 px-4'>
                <div className='max-w-full md:max-w-[800px] h-16 w-full mx-auto flex flex-row items-center justify-between'>
                    <Logo />
                    <Nav />
                </div>
            </div>
        </motion.div>
    )
}

export default Header