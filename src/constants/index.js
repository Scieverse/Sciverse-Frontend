import { GoHomeFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

export const navLinks = [
  { href: "/home", label: "Home", icon: GoHomeFill },
  { href: "/favorite", label: "Favorite", icon: IoStar },
  { href: "/historique", label: "Historique", icon: FaClockRotateLeft },
  { href: "/categories", label: "Categories", icon: FaFilter },
];

export const filterInitialization = [
  { checked: true, label: "Option 1" },
  { checked: true, label: "Option 2" },
  { checked: true, label: "Option 3" },
];
