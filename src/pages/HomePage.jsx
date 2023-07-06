import React, { useContext, useEffect, useRef } from 'react';
import { About, Contact, Footer, Header, HeroTwo, Model, Project, UpArrow } from '../components';
import { ModelContext } from '../context/model';
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
    const { toggleModel } = useContext(ModelContext);


    return (
        <div className='h-full w-full relative z-10'>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Header />
            <HeroTwo />
            <About />
            <Project />
            <Contact />
            <Footer />
            <UpArrow />
            <AnimatePresence>
                {toggleModel && <Model />}
            </AnimatePresence>
        </div>
    );
}

export default HomePage