import React from "react";
import styles from "./styles/Sidebar.module.css";
import { FaXTwitter } from "react-icons/fa6";
import Nav from "./components/Nav";
import Summary from "./components/Summary";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaXTwitter />
      </div>

      <Nav />

      <button className={styles.postBtn}>Post</button>

      <div className={styles.summaryContainer}>
        <Summary />
      </div>
    </div>
  );
};

export default Sidebar;
