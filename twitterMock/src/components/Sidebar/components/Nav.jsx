import React from "react";
import styles from "../styles/Nav.module.css";

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

const navItems = [
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

const Nav = () => {
  return (
    <ul className={styles.navList}>
      {navItems.map((item, index) => (
        <li key={index} className={styles.navItem}>
          <span className={styles.icon}>{item.icon}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
