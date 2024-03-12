import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiModernCity,
  GiVillage,
  GiTowerBridge,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdVilla } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbSunset2 } from "react-icons/tb";
import { LuHistory, LuMessagesSquare } from "react-icons/lu";
import { BsBookmarkHeart } from "react-icons/bs";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    value: "beach",
  },
  {
    label: "City center",
    icon: GiModernCity,
    value: "city+center",
  },
  {
    label: "Village",
    icon: GiVillage,
    value: "village",
  },
  {
    label: "Amazing views",
    icon: TbSunset2,
    value: "amazing+views",
  },
  {
    label: "Villa",
    icon: HiOutlineHomeModern,
    value: "villa",
  },
  {
    label: "Iconic cities",
    icon: GiTowerBridge,
    value: "iconic+cities",
  },
  {
    label: "Tiny homes",
    icon: MdOutlineVilla,
    value: "tiny+home",
  },
  {
    label: "Mountains",
    icon: TbMountain,
    value: "mountains",
  },
  {
    label: "Amazing pools",
    icon: TbPool,
    value: "amazing+pools",
  },
  {
    label: "Tropical",
    icon: GiIsland,
    value: "tropical",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    value: "lake",
  },
  {
    label: "Mansion",
    icon: MdVilla,
    value: "mansion",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    value: "cave",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    value: "camping",
  },
  {
    label: "Barn",
    icon: GiBarn,
    value: "barn",
  },
  {
    label: "Luxury",
    icon: IoDiamond,
    value: "luxury",
  },
];

export const NavMenu = [
  {
    title: "Messages",
    path: "/Messages",
    icon: LuMessagesSquare,
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: BsBookmarkHeart,
  },
  {
    title: "History",
    path: "/History",
    icon: LuHistory,
  },
];
