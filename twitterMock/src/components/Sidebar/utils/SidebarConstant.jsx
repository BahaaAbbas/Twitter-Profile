import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaList,
  FaBookmark,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

export const navItems = [
  { label: "Home", icon: <FaHome /> },
  { label: "Explore", icon: <FaMagnifyingGlass /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Messages", icon: <FaEnvelope /> },
  { label: "Lists", icon: <FaList /> },
  { label: "Bookmarks", icon: <FaBookmark /> },
  { label: "Communities", icon: <FaPeopleGroup /> },
  { label: "Profile", icon: <FaUser /> },
  { label: "More", icon: <FaEllipsisH /> },
];
