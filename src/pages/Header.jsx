import React from "react";
import AuthPagesBg from "../components/authPagesBg";
import { googleIcn, logoOrangeBlack } from "../assets/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center ">
      <AuthPagesBg />
      <div className="flex flex-col gap-4 w-2/3 h-[90vh] items-center bg-white padding-x rounded-3xl bg-opacity-70 shadow-[0_0_45px_-5px_rgba(223,125,0,0.7)] ">
        <img src={logoOrangeBlack} alt="logo" className="w-[350px] py-14" />
        <div className="flex flex-row w-full justify-center items-center gap-10 padding-x">
          <button className="bg-white text-orange font-poppins font-medium text-md px-[72px] py-[18px] rounded-[26px] shadow-lg">
            Sign in
          </button>
          <button className="bg-orange text-white font-poppins font-medium text-md px-[72px] py-[18px] rounded-[26px] shadow-lg">
            Sign in
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
