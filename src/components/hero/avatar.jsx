import React, { useContext } from "react";
import avatar from "../../assets/images/manjesh.jpg";
import { ThemeContext } from "../../context/theme";
import { motion } from "framer-motion";

const Avatar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full flex items-center justify-center px-10 overflow-hidden z-20 mb-4">
      <motion.div
        initial={{ scale: 1, opacity: 0, y: 0 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 0.1,
        }}
        className={`cursor-pointer shape w-40 h-40 border-4 overflow-hidden ${
          theme === "light"
            ? "hover:border-blue-600 border-[#2D2E32] border-6"
            : `hover:border-[#FF0063] border-white border-6`
        }`}
      >
        <img className="" src={avatar} alt="avatar" />
      </motion.div>
    </div>
  );
};

export default Avatar;
