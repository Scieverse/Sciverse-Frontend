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

export const variantSignInLgAbove = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-7%" },
};

export const variantSignInMaxSm = {
  initialEllipse1: { left: "-143%" },
  exitEllipse1: { left: "0%" },
  initialEllipse2: { left: "40%" },
  exitEllipse2: { left: "-55%" },
};

export const variantSignInMaxLg = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-7%" },
};

export const variantSignUpLgAbove = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-7%" },
};

export const variantSignUpMaxSm = {
  initialEllipse1: { left: "-143%" },
  exitEllipse1: { left: "0%" },
  initialEllipse2: { left: "40%" },
  exitEllipse2: { left: "-55%" },
};

export const variantSignUpMaxLg = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-7%" },
};

export const variantHeaderLgAbove = {
  initialEllipse1: { x: 0 },
  exitEllipse1: { left: "-7%" },
  initialEllipse2: { x: 0 },
  exitEllipse2: { left: "65%" },
};

export const variantHeaderMaxSm = {
  initialEllipse1: { x: 0 },
  exitEllipse1: { left: "-143%" },
  initialEllipse2: { x: 0 },
  exitEllipse2: { left: "40%" },
};

export const variantHeaderMaxLg = {
  initialEllipse1: { left: "-7%" },
  exitEllipse1: { left: "25%" },
  initialEllipse2: { left: "65%" },
  exitEllipse2: { left: "-7%" },
};
