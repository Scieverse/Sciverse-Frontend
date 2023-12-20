import { Link } from "react-router-dom";
import { logoOrangeBlack, profilePic } from "../assets/icons";
import { MdGroups } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { navLinks } from "../constants";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { getTitleIcon } from "../functions/layoutFct";
import { FilterProvider } from "../contexts/FilterContext";
function Layout({ profile, title }) {
  const { role } = profile;
  const [selectedItem, setSelectedItem] = useState(title);
  
  const TitleIcon = getTitleIcon(title);
 

  
  return (
    <FilterProvider>
      <div
        className={
          "h-screen w-1/3 sm:w-1/3 md:w-1/4 xl:w-[250px] sm:flex flex-col text-black duration-1000 ease-in-out"
        }
      >
        <div className="side-bar h-full w-full flex flex-col items-center">
          <img src={logoOrangeBlack} className=" w-2/3 py-4" />
          <div className="flex flex-col h-1/2 items-center justify-between mt-10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  className={`menu-text ${
                    selectedItem === link.label
                      ? "text-orange font-bold"
                      : "text-slate-gray"
                  }`}
                  to={link.href}
                >
                  <Icon className="w-[22px] h-[22px]" />
                  {link.label}
                </Link>
              );
            })}

            {role === "admin" ? (
              <Link
                className={`menu-text ${
                  selectedItem === "Moderators"
                    ? "text-orange font-bold"
                    : "text-slate-gray"
                }`}
                to="/moderators"
              >
                <MdGroups className="w-[24px] h-[24px]" />
                Moderators
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="fixed w-8/12 top-4 right-4 flex gap-10 justify-between items-center">
        <div className="rounded-full shadow-[0_0_25px_-7px_rgba(223,125,0,0.7)]">
          <SearchBar />
        </div>

        <div className="flex flex-row justify-center items-center gap-2 p-2 rounded-full cursor-pointer shadow-[0_0_25px_-7px_rgba(223,125,0,0.7)] hover:text-orange">
          <div className="w-[30px] h-[30px] justify-center items-center">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full rounded-full object-center object-cover"
            />
          </div>
          <p className="font-medium font-poppins">{profile.username}</p>
          <IoIosArrowDown />
        </div>
      </div>

      <div className="mt-28 w-full h-fit flex flex-col justify-center ">
        <div className=" bg-orange text-white flex justify-start p-4 items-center rounded-t-2xl">
          <TitleIcon className="w-6 h-6 mx-2" />
          <p className=" font-bold text-2xl font-poppins">{title}</p>
        </div>
      </div>
    </FilterProvider>
  );
}

export default Layout;
