import React from "react";
import styles from "../styles/Nav.module.css";
import { navItems } from "../utils/SidebarConstant";

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
