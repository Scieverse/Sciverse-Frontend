import { motion } from "framer-motion";

const animationBgVariant = {
  initial: {},
  animate: {},
  exit: {},
};

const AnimatedBg = ({ children }) => {
  return (
    <motion.div
      variants={animationBgVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBg;
