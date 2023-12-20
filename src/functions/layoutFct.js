import { MdGroups } from "react-icons/md";
import { navLinks } from "../constants";

export const getTitleIcon = (title) => {
    switch (title) {
      case "Home":
        return navLinks[0].icon;
      case "Favorites":
        return navLinks[1].icon;
      case "Historique":
        return navLinks[2].icon;
      case "Categories":
        return navLinks[3].icon;
      case "Moderators":
        return MdGroups;
    }
  };