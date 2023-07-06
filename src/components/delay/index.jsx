import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../../context/theme';
import { PuffLoader } from 'react-spinners';

const Delayed = ({ children, waitBeforeShow = 2000 }) => {

    const { theme } = useContext(ThemeContext);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children :
        <div className={`
                    fixed 
                    inset-0 
                    flex 
                    items-center 
                    justify-center
                    ${theme === 'light' ? 'bg-[#F7F7F7]' : 'bg-[#0B192E]'}
                    `}>
            <PuffLoader color={`${theme === 'light' ? '#2563eb' : '#FF0063'}`} />
        </div>;
};

export default Delayed;