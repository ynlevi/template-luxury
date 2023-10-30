"use client";
import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import MenuItems from "./ManuItems";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = {
    shown: { y: 0 },
    hidden: { y: "-100px" },
  };
  const toggleClick = () => {
    setIsOpen((prev) => !prev);
    console.log("click");
  };
  return (
    <div className="lg:hidden flex items-center">
      <AnimatePresence>
        {isOpen ? (
          <MenuOpen key="open" handleClick={toggleClick} />
        ) : (
          <motion.button
            key="hamburger"
            onClick={toggleClick}
            variants={hamburger}
            initial="hidden"
            animate="shown"
            exit="hidden"
          >
            <VscMenu size={30} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

const MenuOpen = ({ handleClick }) => {
  const menuScreen = {
    initial: { y: "-100vh" },
    shown: {
      y: 0,

      transition: {
        delay: 0.25,
        type: "tween",
      },
    },
    exit: {
      y: "-100vh",

      transition: { delay: 0.5, type: "tween" },
    },
  };
  return (
    <>
      <motion.div
        onClick={handleClick}
        className="cursor-pointer text-opacity-100 opacity-[87%] text-2xl z-40 bg-theme-dark absolute inset-0 h-[100vh] "
        variants={menuScreen}
        initial="initial"
        animate="shown"
        exit="exit"
      >
        <motion.div
          initial={{ y: "-500px" }}
          animate={{ y: 0, transition: { delay: 0.5 } }}
          exit={{ y: "-500px" }}
          className="w-fit mr-2 mt-6 ml-auto"
        >
          <VscClose size={40} />
        </motion.div>
        <motion.ul
          initial={{ y: "-180%" }}
          animate={{
            y: 0,
            transition: {
              delay: 0.85,
              duration: 0.5,
              type: "spring",
              stiffness: "140",
            },
          }}
          exit={{ y: "-180%", transition: { delay: 0.25 } }}
          transition={{}}
          className="flex flex-col gap-3 mx-auto text-center relative z-50 top-10 cursor-default "
          onClick={(e) => e.stopPropagation()}
        >
          <MenuItems handleClick={handleClick} />
        </motion.ul>
      </motion.div>
    </>
  );
};
