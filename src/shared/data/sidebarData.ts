import * as AiIcon from "react-icons/ai"
import * as FaIcon from "react-icons/fa"

const sidebarData = [
    {
        title: "Home",
        path: "/",
        icon: AiIcon.AiFillHome,
        cName: "sidebar-tab"
    },
    {
        title: "Store",
        path: "/store",
        icon: FaIcon.FaStore,
        cName: "sidebar-tab"
    },
    {
        title: "Settings",
        path: "/settings",
        icon: AiIcon.AiFillSetting,
        cName: "sidebar-tab"
    },
    {
        title: "About Us",
        path: "/aboutus",
        icon: AiIcon.AiFillInfoCircle,
        cName: "sidebar-tab"
    },
]

export default sidebarData;