import { useState, useContext  } from "react";
import { CgLogOut } from "react-icons/cg";
import { IoLanguage } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { routes } from '../../routes/routes.js'
import { FaUserClock } from "react-icons/fa";
import { UserContext } from "../../contexts/UserContext.jsx";

function Profile(){
    const { userProfile , logOut} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className="w-full h-full">
            <div className="w-full pb-6 px-6 flex flex-wrap justify-center content-center bg-[rgb(222,222,222)] font-poppins">
                <div className="h-11/12 w-4/5 bg-[#E87D00] bg-opacity-20 p-8 pt-5 rounded-[20px] relative flex flex-col content-center justifyevenly flex-wrap mt-2">
                    <div className="w-[97%] flex content-center justify-evenly flex-wrap mt-2">
                        <div className="flex justify-evelny w-full">
                                <div className="h-[6,5rem] w-[6,5rem] rounded-full bg-white p-1">
                                    <img src={userProfile.profilePicture} alt="Profile Picture" className="h-24 w-24 rounded-full border-4 border-[#E87D00] "/>
                                </div>
                                <div className="flex justify-center flex-col flex-wrap w-1/2 ml-4">
                                    <p className="capitalize text-xl font-medium font-poppins ">{userProfile.firstName} {userProfile.lastName}</p>
                                    <p className="capitalize text-base font-poppins pl-1">{userProfile.nature}</p>
                                </div>
                        </div>
                        <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none mt-3"/>
                        <div className="w-1/2 flex flex-col content-center justify-evenly flex-wrap mt-12 pl-3">
                            <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-2">
                                <p className="capitalize text-xs font-poppins ">Email</p>
                                <p className="capitalize text-sm font-poppins">{userProfile.email}</p>
                            </div>
                            <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-2">
                                <p className="capitalize text-xs font-poppins ">UserName</p>
                                <p className="capitalize text-sm font-poppins">{userProfile.username}</p>
                            </div>
                            <div className="flex justify-center flex-col flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4">
                                <p className="capitalize text-xs font-poppins ">Role</p>
                                <p className="capitalize text-sm font-poppins">{userProfile.nature}</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col content-center justify-evenly flex-wrap mt-2">
                            <p className="text-lg font-medium ml-2 mb-3">Settings</p>
                            <button onClick={()=>{ navigate(routes.MODERATOREDIT)}} className="flex flex-wrap content-center w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3">
                                <FaUserClock className="h-5 w-5 mr-1"/>
                                <p className="capitalize text-base font-poppins ml-2">Modifier le compte</p>
                            </button>
                            <button onClick={()=>{ navigate(routes.PASSWORDEDIT)}} className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3">
                                <RiLockPasswordFill className="h-5 w-5 mr-1"/>
                                <p className="capitalize text-base font-poppins ml-2">Modifier le mot de passe</p>
                            </button>
                            <button className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4 mb-3">
                                <FaRegUser className="h-5 w-5 mr-1"/>
                                <p className="capitalize text-base font-poppins ml-2">Supprimer le compte</p>
                            </button>
                            <button onClick={() => {logOut();}} className="flex flex-wrap w-full border-l-[3px] border-l-[#E87D00] pl-3 ml-4">
                                <CgLogOut  className="h-5 w-5 mr-1"/>
                                <p className="capitalize text-base font-poppins ml-2">Se déconnecter</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  export default Profile;