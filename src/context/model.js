import { createContext, useCallback, useEffect, useState } from "react";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [toggleModel, setToggleModel] = useState(false);

  const callback = useCallback(() => {
    if (toggleModel) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [toggleModel]);

  useEffect(() => {
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  }, [callback]);

  return (
    <ModelContext.Provider value={{ toggleModel, setToggleModel }}>
      {children}
    </ModelContext.Provider>
  );
};
