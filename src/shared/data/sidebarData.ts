import * as AiIcon from "react-icons/ai";
import * as FaIcon from "react-icons/fa";

const iconColor: string = "white";
const iconSize: number = 24;

export const topSectionData = [
  {
    title: "Home",
    path: "/",
    icon: AiIcon.AiFillHome,
    iconColor: iconColor,
    iconSize: iconSize,
    cName: "sidebar-tab",
  },
  {
    title: "Store",
    path: "/store",
    icon: FaIcon.FaStore,
    iconColor: iconColor,
    iconSize: iconSize,
    cName: "sidebar-tab",
}
]

export const bottomSectionData = [
  {
    title: "Settings",
    path: "/settings",
    icon: AiIcon.AiFillSetting,
    iconColor: iconColor,
    iconSize: iconSize,
    cName: "sidebar-tab",
  },
  {
    title: "About Us",
    path: "/about",
    icon: AiIcon.AiFillInfoCircle,
    iconColor: iconColor,
    iconSize: iconSize,
    cName: "sidebar-tab",
  },
]

