import { MdGroups } from "react-icons/md";
import { navLinks } from "../constants";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

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

export const filterLabel = (filterTable) => {
  let isOneFilterUnchecked = false;
  filterTable.map((item) => {
    if (!item.checked) {
      isOneFilterUnchecked = true;
    }
  });
  if (isOneFilterUnchecked) return "Custom";
  else return "All";
};
