import React from "react";
import { motion } from "framer-motion";

const AuthPagesBg = ({ animationBgVariant }) => {
  return (
    <motion.div className="w-full h-full absolute -z-10 inset-0">
      <motion.div
        className="w-[80%] h-[72vw] bg-orange opacity-[80%] absolute -top-[74%] -right-[7%] rounded-[50%]"
        variants={animationBgVariant}
        initial="initialEllipse1"
        exit="exitEllipse1"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="w-[40%] h-[40vw] bg-orange opacity-[80%] absolute -bottom-[33%] -left-[5%] rounded-full"
        variants={animationBgVariant}
        initial="initialEllipse2"
        exit="exitEllipse2"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default AuthPagesBg;
