import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <a
      href="#Home"
      className={`text-[20px] cursor-pointer font-[700] ${
        theme === "light" ? " text-blue-600" : " text-[#FF0063]"
      }`}
    >
      mkhembrom.dev
    </a>
  );
};

export default Logo;
