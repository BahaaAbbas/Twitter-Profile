import React from "react";
import styles from "../styles/Search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.icon} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
