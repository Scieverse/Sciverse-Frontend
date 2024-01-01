import { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { IoLanguage } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

function ModifierModerateur({moder}){
    return (
        <div className="w-[100vw] h-[100vh]">
            <div className="w-full h-full py-6 px-6 flex flex-col flex-wrap justify-center content-center bg-[rgb(222,222,222)] font-poppins">
                <div className="h-11/12 w-1/3 bg-[#E87D00] bg-opacity-20 p-8 rounded-[20px] relative flex flex-col content-center justifyevenly flex-wrap mt-14">
                    <div className="h-[8.5rem] w-[8.5rem] rounded-full absolute -top-16 left-1/3 bg-white p-1">
                        <img src={moder.photo} alt="Profile Picture" className="h-32 w-32 rounded-full border-4 border-[#E87D00] "/>
                    </div>
                    <div className="w-11/12 flex flex-col content-center justify-evenly flex-wrap mt-12">
                        <div className="flex justify-center flex-col content-center flex-wrap w-full">
                            <p className="capitalize text-xl font-medium font-poppins ">{moder.nom} {moder.prenom}</p>
                            <p className="capitalize text-base font-poppins text-center">{moder.role}</p>
                        </div>
                        <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none mb-3 mt-3"/>

                        <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-2">
                            <p className="capitalize text-xs font-poppins ">Email</p>
                            <p className="capitalize text-sm font-poppins">{moder.mail}</p>
                        </div>
                        <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-2">
                            <p className="capitalize text-xs font-poppins ">UserName</p>
                            <p className="capitalize text-sm font-poppins">{moder.surnom}</p>
                        </div>
                        <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4">
                            <p className="capitalize text-xs font-poppins ">Role</p>
                            <p className="capitalize text-sm font-poppins">{moder.role}</p>
                        </div>
                        <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none mb-3 mt-3"/>

                        <p className="text-lg font-medium ml-2 mb-1">Settings</p>
                        <button className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3 mt-2">
                            <IoLanguage className="h-5 w-5 mr-1"/>
                            <p className="capitalize text-base font-poppins">Modifier la langue</p>
                        </button>
                        <button className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3">
                            <RiLockPasswordFill className="h-5 w-5 mr-1"/>
                            <p className="capitalize text-base font-poppins">Modifier le mot de passe</p>
                        </button>
                        <button className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3">
                            <FaRegUser className="h-5 w-5 mr-1"/>
                            <p className="capitalize text-base font-poppins">Supprimer le compte</p>
                        </button>
                        <button className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4">
                            <CgLogOut  className="h-5 w-5 mr-1"/>
                            <p className="capitalize text-base font-poppins">Se déconnecter</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  export default ModifierModerateur;