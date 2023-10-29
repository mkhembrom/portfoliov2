import React, { useState } from "react";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ModelContext } from "../../context/model";
import { ThemeContext } from "../../context/theme";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Model = () => {
  const { setToggleModel } = useContext(ModelContext);
  const { theme } = useContext(ThemeContext);
  const [isValid, setIsValid] = useState(true);
  const [isValidShake, setIsValidShake] = useState(false);

  const closeModel = () => {
    document.body.classList.remove("stop-scrolling");
    setToggleModel(false);
  };

  const form = useRef();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const initialData = {
    name: "",
    email: "",
    message: "",
  };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
    setIsValid(validateEmail(user.email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.message) {
      return null;
    }

    if (isValid && !isValidShake) {
      emailjs
        .sendForm(
          "service_yxiw7ax",
          "template_avi314q",
          form.current,
          "XHSSBxZdySRRRHoOV"
        )
        .then(
          (result) => {
            setUser({ ...initialData });
            setToggleModel(false);
            toast.success("🦄 Message sent successfully!");
          },
          (error) => {
            toast(error.text);
          }
        );
    } else {
      setIsValidShake(true);
    }
  };

  return (
    <motion.div className="fixed inset-0 z-50">
      <div className="relative inset-0 h-screen w-screen grid place-items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen z-30 bg-black opacity-90 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen bg-red grid place-items-center z-30 p-4">
          <motion.div
            initial={{ y: [1000, 200], scale: [0, 0.5] }}
            animate={{ y: [-30, 0], scale: [0.5, 1] }}
            exit={{ y: [-30, 0, 600], scale: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="p-4 m-4 w-full md:w-[450px] rounded-xl bg-white shadow-xl z-50 "
          >
            <div className="flex items-center justify-end relative">
              {/* <div className='absolute -top-24 -left-20 w-40 h-40 rotate-[20deg]'>
                                <img src={rocket} alt="rocket" />
                            </div> */}
              <div
                className={
                  "rounded-full p-1  cursor-pointer " +
                  `${theme === "light" ? "bg-blue-600" : "bg-[#FF0063]"}`
                }
                onClick={closeModel}
              >
                <MdClose size={22} color={`white`} />
              </div>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col items-start w-full"
            >
              <label htmlFor="" className="my-2 text-md text-gray-600">
                Full Name
              </label>
              <input
                value={user.name}
                type="text"
                name="name"
                onChange={handleChange}
                autoComplete="off"
                className="caret-pink-500 w-full px-4 py-2 bg-slate-200 rounded-xl text-black"
              />
              <label htmlFor="" className="my-2 text-md text-gray-600">
                Email
              </label>
              <motion.input
                animate={
                  isValid || isValidShake ? {} : { x: [4, -4, 2, -2, 0] }
                }
                transition={{
                  duration: 0.4,
                }}
                value={user.email}
                type="email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                className={`caret-pink-500 w-full px-4 py-2 bg-slate-200 rounded-xl text-black ${
                  isValid
                    ? "border-none"
                    : "border-2 border-red-600 focus:border-red-600"
                }`}
              />
              <label htmlFor="" className="my-2 text-md text-gray-600">
                Message
              </label>

              <textarea
                value={user.message}
                name="message"
                onChange={handleChange}
                autoComplete="off"
                className="caret caret-pink-500 focus:caret-pink-500 p-4 rounded-xl bg-slate-200 w-full min-h-full h-36 text-black"
              ></textarea>
              <button
                type="submit"
                className={
                  "px-4 py-2 rounded-xl text-white mx-auto mt-4 " +
                  `${theme === "light" ? "bg-blue-600" : "bg-[#FF0063]"}`
                }
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
