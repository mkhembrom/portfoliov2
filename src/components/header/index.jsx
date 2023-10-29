import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import { AnimatePresence, motion } from "framer-motion";
import useScrollDirection from "../../utils/ScrollToTop";

const Header = () => {
  const { isScrollingUp } = useScrollDirection();

  return (
    <AnimatePresence>
      <motion.div
        initial={isScrollingUp ? { y: -100, opacity: 0 } : { y: 0, opacity: 0 }}
        animate={
          isScrollingUp ? { y: [-50, 0], opacity: 1 } : { y: 0, opacity: 1 }
        }
        transition={{
          duration: isScrollingUp ? 0.5 : 2,
        }}
        className={`z-50 max-w-full md:max-w-[800px] w-full mx-auto backdrop-blur-md ${
          isScrollingUp ? "sticky top-0 left-0 right-0" : ""
        }`}
      >
        <div className=" mx-auto w-full md:px-0 px-4">
          <div className="max-w-full md:max-w-[800px] h-16 w-full mx-auto flex flex-row items-center justify-between">
            <Logo />
            <Nav />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
