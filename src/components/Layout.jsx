import { Link } from "react-router-dom";
import { logoOrangeBlack, logoSOrange } from "../assets/icons";
import { MdGroups } from "react-icons/md";
import { navLinks } from "../constants";
import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { getTitleIcon } from "../functions/layoutFct";
import { FilterProvider } from "../contexts/FilterContext";
import ProfileButton from "./ProfileButton";
import { UserContext } from "../contexts/UserContext";

function Layout({ title }) {
  const { userProfile } = useContext(UserContext);

  const { role } = userProfile;
  //Getting page title and icon
  const [selectedItem, setSelectedItem] = useState(title);
  const TitleIcon = getTitleIcon(title);

  return (
    <FilterProvider>
      <div
        className={
          "h-screen w-2/12 sm:w-2/12 md:w-1/4 xl:w-[250px] sm:flex flex-col text-black"
        }
      >
        <div className="side-bar w-full h-full flex flex-col gap-10 items-center">
          <img src={logoOrangeBlack} className=" w-2/3 py-4 max-md:hidden" />
          <img src={logoSOrange} className=" w-7/12 py-4 md:hidden" />
          <div className="flex flex-col h-1/2 items-center justify-start gap-10 2xl:gap-y-16 ">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  className={`menu-text ${
                    selectedItem === link.label
                      ? "text-orange font-bold"
                      : ""
                  }`}
                  to={link.href}
                >
                  <Icon className="w-[22px] h-[22px]" />
                  <p className="max-md:hidden">{link.label}</p>
                </Link>
              );
            })}

            {role === "admin" ? (
              <Link
                className={`menu-text ${
                  selectedItem === "Moderators"
                    ? "text-orange font-bold"
                    : ""
                }`}
                to="/moderators"
              >
                <MdGroups className="w-[24px] h-[24px]" />
                <p className="max-md:hidden">Moderators</p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-cetner items-center py-5 gap-8">
        <div className="w-full px-5 flex justify-center items-center max-xl:justify-start ">
          <div className="w-fit rounded-full shadow-[0_0_25px_-7px_rgba(223,125,0,0.7)]">
            <SearchBar />
          </div>
                      
          <ProfileButton />
        </div>

        <div className="w-full h-full flex flex-col justify-start">
          <div className=" bg-orange text-white flex justify-start p-4 items-center rounded-t-2xl max-lg:p-2">
            <TitleIcon className="w-6 h-6 mx-2 max-lg:w-5" />
            <p className=" font-bold text-2xl font-poppins max-lg:text-xl">
              {title}
            </p>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}

export default Layout;
