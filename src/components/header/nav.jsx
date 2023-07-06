import React, { useContext, useEffect } from 'react';
import { ThemeContext } from "../../context/theme";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { useState } from 'react';


const Nav = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)


    const nav = [
        {
            label: "Home",
        },
        {
            label: "About",
        },
        {
            label: "Project",
        },
        {
            label: "Contact",
        },
        {
            label: "dark",
        },
    ]

    const [activeTab, setActiveTab] = useState(window.location.hash !== "" ? window.location.hash.split('#')[1] : "Home");

    useEffect(() => {
        const handleHashChange = () => {
            if (nav.map((item) => item.label).includes(window.location.hash.split('#')[1])) {
                setActiveTab(window.location.hash.split('#')[1]);
                window.location.href = `/${window.location.hash}`
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [activeTab, window.location.hash.split('#')[1]]);



    return (
        <ul className='text-xl flex items-center cursor-pointer'>
            {
                nav.map(item => {

                    if (item.label === "dark") {
                        return <button
                            key={item.label}
                            onClick={toggleTheme}
                            className='rounded-md text-sm flex items-center'
                        >{
                                theme === "dark" ? <img className='drop-shadow' height={24} width={24} src={sun} alt="sun" /> : <img className='drop-shadow' height={24} width={24} src={moon} alt='moon' />
                            }</button>
                    }

                    return <li key={item.label} className='hidden md:flex mr-8 text-sm'>
                        <a href={`#${item.label}`} className={`${activeTab === item.label ? `${theme === 'light' ? 'text-blue-600' : 'text-[#FF0063]'}` : ''} ${theme === 'light' ? 'hover:text-blue-600 text-[#0B192E]' : 'hover:text-[#FF0063] text-[#CDD7F6]'}`}>
                            {item.label}
                        </a>
                    </li>
                })
            }
        </ul>
    )
}

export default Nav