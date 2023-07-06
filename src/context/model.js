import { createContext, useEffect, useState } from "react";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {

    const [toggleModel, setToggleModel] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (toggleModel) {
                document.body.classList.add("stop-scrolling");
            } else {
                document.body.classList.remove("stop-scrolling");
            }
        }
        window.addEventListener('mouseover', handleScroll);

        return () => window.removeEventListener('mouseover', handleScroll);
    }, [toggleModel])


    return (
        <ModelContext.Provider
            value={{ toggleModel, setToggleModel }}
        >
            {children}
        </ModelContext.Provider>
    );
}

