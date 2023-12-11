import React from "react";
import { Ellipse1, Ellipse2 } from "../assets/icons";

const AuthPagesBg = () => {
  return (
    <div className="w-full h-full absolute -z-10 inset-0">
      <div className="w-[80%] h-[72vw] bg-orange opacity-[80%] absolute -top-[74%] -right-[7%] rounded-[50%] "></div>
      <div className="w-[40%] h-[40vw] bg-orange opacity-[80%] absolute -bottom-[33%] -left-[5%] rounded-full "></div>
    </div>
  );
};

export default AuthPagesBg;
