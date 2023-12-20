import AuthPagesBg from "../components/authPagesBg";
import { logoOrangeBlack } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpenProfession, setIsOpenProfession] = useState(false);
  const [isOpenField, setIsOpenField] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    profession: "",
    field: "",
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

  const toggleListProfession = () => {
    setIsOpenProfession(!isOpenProfession);
  };

  const toggleListField = () => {
    setIsOpenField(!isOpenField);
  };

  const optionsProfession = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const optionsField = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
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
      <div className="flex flex-row gap-10 w-2/3 h-[93vh] justify-center items-center padding-x bg-white rounded-3xl bg-opacity-90 shadow-[0_0_45px_-5px_rgba(223,125,0,0.7)] ">
        <div className="flex w-4.5/12 justify-center items-center flex-col">
          <motion.img
            src={logoOrangeBlack}
            alt="logo"
            className="w-[300px]"
            exit={{ scale: 1.3, y: "-60%", x: "50%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <h1 className="text-xl font-bold font-poppins">
            Welcome to lkasmdkn
          </h1>
        </div>
        <div className="w-full flex-1">
          <h1 className="font-poppins font-bold text-2xl mb-4">
            Personal information
          </h1>
          <form className="flex flex-col w-full justify-center items-center gap-4">
            {/* ********** full name input ********** */}
            <div className="flex w-full flex-col">
              <label
                for="fullName"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                className="register-input"
                placeholder="Enter your full name"
              />
            </div>
            {/* ************************************* */}

            {/* ********* profession input ********** */}
            <div className="flex w-full flex-col">
              <label
                for="profession"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Profession:
              </label>
              <div className="flex flew-row justify-center items-center w-full gap-4">
                <div className="relative flex-1">
                  <div>
                    <select
                      name="profession"
                      id="profession"
                      onClick={toggleListProfession}
                      onChange={({ value }) => {
                        setData({ ...data, profession: value });
                      }}
                      className="register-input appearance-none signup-select"
                    >
                      <option value={null}>You are a ...</option>
                      {optionsProfession.map((profession) => {
                        return (
                          <option value={profession.value}>
                            {profession.label}
                          </option>
                        );
                      })}
                    </select>
                    {isOpenProfession ? (
                      <FaAngleUp className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                    ) : (
                      <FaAngleDown className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                    )}
                  </div>
                </div>

                <div className="relative flex-1">
                  <div>
                    <select
                      name="field"
                      id="field"
                      onClick={toggleListField}
                      className="register-input appearance-none signup-select"
                    >
                      <option value={null}>Field</option>
                      {optionsField.map((field) => {
                        return (
                          <option value={field.value}>{field.label}</option>
                        );
                      })}
                    </select>
                    {isOpenField ? (
                      <FaAngleUp className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                    ) : (
                      <FaAngleDown className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* ************************************* */}

            {/* ************ email input ************ */}
            <div className="flex w-full flex-col">
              <label
                for="email"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Email adress:
              </label>
              <input
                type="text"
                id="email"
                onChange={handleChange}
                className="register-input"
                placeholder="Enter your email address"
              />
            </div>
            {/* ************************************* */}

            {/* *********** password input ********** */}
            <div className="flex w-full flex-col">
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
                  onChange={handleChange}
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
            {/* ************************************* */}

            {/* ******* confirm password input ****** */}
            <div className="flex w-full flex-col">
              <label
                for="confirmPassword"
                className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50"
              >
                Confirm Password:
              </label>
              <div className="relative flex w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="register-input"
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className={`absolute inset-y-0 right-0 flex items-center mr-4 text-gray-500 cursor-pointer`}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            {/* ************************************* */}
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
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
