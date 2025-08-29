import React from "react";
import styles from "./styles/Rightbar.module.css";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";
import Trends from "./components/Trends";
import Legal from "./components/Legal";

const Rightbar = () => {
  return (
    <div className={styles.rightbar}>
      <Search />
      <Suggestions />
      <Trends />
      <Legal />
    </div>
  );
};

export default Rightbar;
