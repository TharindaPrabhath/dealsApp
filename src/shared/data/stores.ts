import Store from "../types/Store";

import { SteamIcon, GogIcon, OriginIcon, FanaticalIcon, UplayIcon, HumbleIcon, DefaultStoreIcon } from "../../assets";

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
];

export const defaultStore: Store = {
    id: 0,
    name: "-",
    icon: DefaultStoreIcon
}

export default Stores;