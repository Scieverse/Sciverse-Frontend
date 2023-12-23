import AuthPagesBg from "../components/AuthPagesBg";
import { logoOrangeBlack, profilePic } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../contexts/UserContext";
import {
  variantSignInLgAbove,
  variantSignInMaxLg,
  variantSignInMaxSm,
} from "../constants";

const SignIn = () => {
  const navigate = useNavigate();
  const { logIn, isLoggedIn } = useContext(UserContext);
  let userProfileData;

  const handleSignIn = async () => {
    userProfileData = {
      role: "admin",
      username: "imadeddine",
      profilePicture: profilePic,
    };
    await logIn(userProfileData);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/layout");
  }, [isLoggedIn]);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [variant, setVariant] = useState(() => {
    if (window.innerWidth < 640) {
      return variantSignInMaxSm;
    } else if (window.innerWidth < 1024) {
      return variantSignInMaxLg;
    } else {
      return variantSignInLgAbove;
    }
  });

  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center ">
      <AuthPagesBg animationBgVariant={variant} />
      <div className="flex flex-col gap-6 w-2/3 h-[90vh] items-center bg-white padding-x rounded-3xl bg-opacity-90 shadow-[0_0_45px_-5px_rgba(223,125,0,0.7)] max-lg:w-10/12 max-lg:h-[65vh]">
        <div className="w-full flex justify-center items-center flex-col">
          <motion.img
            src={logoOrangeBlack}
            alt="logo"
            className="w-[300px] pt-10"
            exit={{ scale: 1.5, y: 30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.h1
            className="text-xl font-bold font-poppins max-sm:text-lg"
            exit={{ opacity: 0 }}
          >
            Welcome to lkasmdkn
          </motion.h1>
        </div>
        <motion.section className="w-full flex flex-col gap-4" exit={{ opacity: 0 }}>
          <form className="flex flex-col w-full justify-center items-center gap-6 padding-x max-lg:px-0">
            <div className="flex w-9/12 flex-col max-md:w-full">
              <label
                for="email"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Email adress:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="register-input"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex w-9/12 flex-col max-md:w-full">
              <label
                for="password"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Password:
              </label>
              <div className="relative flex w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="register-input"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className={`absolute inset-y-0 right-0 flex items-center mr-4 text-gray-500 cursor-pointer`}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </form>
          <div
            className="w-full flex justify-center items-center gap-6 py-3"
            onClick={() => {
              navigate("/");
            }}
          >
            <button className="font-poppins font-medium text-lg px-12 max-lg:px-8 max-sm:px-6">
              Cancel
            </button>
            <Link to="/layout">
              <button
                className="bg-orange text-white font-poppins font-medium text-md px-12 py-3.5 rounded-full max-lg:px-8 max-sm:px-6 max-lg:py-3"
                onClick={() => {
                  handleSignIn();
                }}
              >
                Sign in
              </button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SignIn;
