import Store from "../types/Store";

import { SteamIcon, GogIcon, OriginIcon, FanaticalIcon, UplayIcon, HumbleIcon } from "../../assets";

const Stores: Store[] = [
    {
        id: 1,
        name: "Steam",
        icon: SteamIcon
    },
    {
        id: 7,
        name: "Gog",
        icon: GogIcon
    },
    {
        id: 8,
        name: "Origin",
        icon: OriginIcon
    },
    {
        id: 11,
        name: "Humble Store",
        icon: HumbleIcon
    },   
    {
        id: 13,
        name: "Uplay",
        icon: UplayIcon
    },
    {
        id: 15,
        name: "Fanatical",
        icon: FanaticalIcon
    }     
]

export default Stores;