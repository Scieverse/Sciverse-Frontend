import AuthPagesBg from "../components/authPagesBg";
import { logoOrangeBlack } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const SignIn = () => {
  const navigate = useNavigate();
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

  const animationBgVariant = {
    initialEllipse1: { left: "-7%" },
    exitEllipse1: { left: "25%" },
    initialEllipse2: { left: "65%" },
    exitEllipse2: { left: "-7%" },
  };

  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center ">
      <AuthPagesBg animationBgVariant={animationBgVariant} />
      <div className="flex flex-col gap-4 w-2/3 h-[90vh] items-center bg-white padding-x rounded-3xl bg-opacity-90 shadow-[0_0_45px_-5px_rgba(223,125,0,0.7)] ">
        <div className="w-full flex justify-center items-center flex-col">
          <motion.img
            src={logoOrangeBlack}
            alt="logo"
            className="w-[300px] pt-10"
            exit={ { scale: 1.3, y: 30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <h1 className="text-xl font-bold font-poppins">
            Welcome to lkasmdkn
          </h1>
        </div>
        <form className="flex flex-col w-full justify-center items-center gap-6 padding-x">
          <div className="flex w-9/12 flex-col">
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

          <div className="flex w-9/12 flex-col">
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
                className={`absolute inset-y-0 right-0 flex items-center mr-4 text-gray-500 cursor-pointer ${
                  showPassword ? "text-orange" : ""
                } `}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
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
          <button className="font-poppins font-medium text-lg px-12">
            Cancel
          </button>
          <button className="bg-orange text-white font-poppins font-medium text-md px-12 py-3.5 rounded-full">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
