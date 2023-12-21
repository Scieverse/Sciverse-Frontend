import AuthPagesBg from "../components/authPagesBg";
import { googleIcn, logoOrangeBlack } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);

  // useEffect(() => {
  //   const handleSignInClick = () => {
  //     setSignIn(true); // Set signIn state to true
  //     navigate("/signin"); // Navigate to the sign-in page
  //   };

  //   const handleSignUpClick = () => {
  //     setSignIn(false); // Set signIn state to false
  //     navigate("/signup"); // Navigate to the sign-up page
  //   };
  // }, []);

  const animationBgVariant = {
    initialEllipse1: { x: 0 },
    exitEllipse1: { left: "-7%" },
    initialEllipse2: { x: 0 },
    exitEllipse2: { left: "65%" },
  };

  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center">
      <AuthPagesBg animationBgVariant={animationBgVariant} />
      <div className="flex flex-col gap-4 w-2/3 h-[90vh] items-center bg-white padding-x rounded-3xl bg-opacity-90 shadow-[0_0_45px_-5px_rgba(223,125,0,0.7)] ">
        <motion.img
          src={logoOrangeBlack}
          alt="logo"
          className="w-[450px] py-12"
          exit={
            signIn
              ? { scale: 0.7, y: -30 }
              : { scale: 0.7, y: "50%", x: "-50%" }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <div className="flex flex-row w-full justify-center items-center gap-10 padding-x">
          <button
            className="bg-white text-orange font-poppins font-medium text-md px-[72px] py-[18px] rounded-[26px] shadow-lg"
            onClick={() => {
              setSignIn(true);
              navigate("/signin");
            }}
          >
            Sign in
          </button>
          <button
            className="bg-orange text-white font-poppins font-medium text-md px-[72px] py-[18px] rounded-[26px] shadow-lg"
            onClick={() => {
              setSignIn(fals);
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        </div>
        <Link to="/">
          <div className="flex flex-row gap-4 justify-center items-center border-2 border-orange border-opacity-50 px-[72px] py-2.5 rounded-[26px] cursor-pointer">
            <img src={googleIcn} alt="" width={35} />
            <h1 className="text-black font-poppins font-medium text-md">
              Sign in with Google
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
