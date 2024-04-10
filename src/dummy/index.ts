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
import { TbSunset2, TbHomeLink } from "react-icons/tb";
import { LuHistory, LuMessagesSquare } from "react-icons/lu";
import { BsBookmarkHeart } from "react-icons/bs";
import { TfiHome } from "react-icons/tfi";
import { PiDoorOpen, PiFireExtinguisherFill } from "react-icons/pi";
import { AiFillCar } from "react-icons/ai";
import { BsSnow, BsWifi } from "react-icons/bs";
import { MdLocalLaundryService, MdOutlineDesk } from "react-icons/md";
import { LiaFirstAidSolid, LiaHotTubSolid } from "react-icons/lia";

export const facility = [
  {
    key: "ac",
    label: "AC",
    icon: BsSnow,
  },
  {
    key: "wifi",
    label: "Wifi",
    icon: BsWifi,
  },
  {
    key: "dedicated-workspace",
    label: "Dedicated workspace",
    icon: MdOutlineDesk,
  },
  {
    key: "hot-tube",
    label: "Hot tube",
    icon: LiaHotTubSolid,
  },
  {
    key: "wash",
    label: "Washer",
    icon: MdLocalLaundryService,
  },
  {
    key: "fire-extinguisher",
    label: "Fire extinguisher",
    icon: PiFireExtinguisherFill,
  },
  {
    key: "free-parking",
    label: "Free parking on premise",
    icon: AiFillCar,
  },
  {
    key: "firs-aid-kit",
    label: "Firs aid kit",
    icon: LiaFirstAidSolid,
  },
];

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

export const LodgingType = [
  {
    key: "home",
    label: "An entire place",
    icon: TfiHome,
    desc: "Guests have the whole place to themselves.",
  },
  {
    key: "room",
    label: "A room",
    icon: PiDoorOpen,
    desc: "Guests have their own room in a home, plus access to shared spaces.",
  },
  {
    key: "shared",
    label: "A shared room",
    icon: TbHomeLink,
    desc: "Guests sleep in a room or common area that may be shared with you or others.",
  },
];
