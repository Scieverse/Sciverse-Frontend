import AuthPagesBg from "../components/AuthPagesBg";
import { logoOrangeBlack } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  optionsField,
  optionsNature,
  variantSignLgAbove,
  variantSignMaxLg,
  variantSignMaxSm,
} from "../constants";
import { UserContext } from "../contexts/UserContext";
import { routes } from "../routes/routes";

const AddModerator = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpenNature, setIsOpenNature] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    nature: "Moderateur",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleListNature = () => {
    setIsOpenNature(!isOpenNature);
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    if (data.password !== data.confirmPassword)
      alert("Passwords do not match. Please re-enter your password.");
    else {
      //logic with backend
      setFormSubmitted(true);
    }
    if (formSubmitted) navigate(routes.MODERATORS);
    else alert("Une erreur c'est produit");
  };

  // useEffect(() => {
  //   if (formSubmitted) navigate("/layout");
  // }, [formSubmitted]);

  const handleAnnuler = (event) => {
    event.preventDefault();     
    navigate(-1);
}

  return (
    <div className="w-full h-full relative flex justify-center items-center bg-grey">
      <div className="flex flex-row w-1/2 justify-center items-center py-2">
          <form
            className="flex flex-col w-full justify-center items-center gap-4"
            onSubmit={handleSubmit}
          >
            {/* ********** full name input ********** */}
            <div className="flex flew-row justify-center items-center w-full gap-3">
              <div className="flex flex-1 flex-col">
                <label className="font-poppins text-xs pl-1 text-[#190B28] my-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  required
                  className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  required
                  className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            {/* ************************************* */}

            {/* ************ email input ************ */}
            <div className="flex w-full flex-col">
              <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
                Email adress:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                placeholder="Enter your email address"
              />
            </div>
            {/* ************************************* */}

            {/* *********** password input ********** */}
            <div className="flex w-full flex-col">
              <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
                Password:
              </label>
              <div className="relative flex w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className={`absolute inset-y-0 right-0 flex items-center mr-6 text-gray-500 cursor-pointer`}
                >
                  {showPassword ? <FaEyeSlash className="text-black text-opacity-90 h-4 w-4"/> : <FaEye className="text-black text-opacity-90 h-4 w-4"/>}
                </div>
              </div>
            </div>
            {/* ************************************* */}

            {/* ******* confirm password input ****** */}
            <div className="flex w-full flex-col">
              <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
                Confirm Password:
              </label>
              <div className="relative flex w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className={`absolute inset-y-0 right-0 flex items-center mr-6 text-gray-500 cursor-pointer`}
                >
                  {showConfirmPassword ? <FaEyeSlash className="text-black text-opacity-90 h-4 w-4" /> : <FaEye className="text-black text-opacity-90 h-4 w-4"/>}
                </div>
              </div>
            </div>
            {/* ************************************* */}
            <div className="w-full flex justify-center items-center gap-6 mt-6">
              <button onClick={handleAnnuler} className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-10 px-7 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#A7A7A7]'>Annuler</button>
              <button
                type="submit"
                className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#E87D00]'
              >
                Continue
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default AddModerator;
