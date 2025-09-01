import React from "react";
import styles from "../styles/Summary.module.css";
import { FaEllipsisH } from "react-icons/fa";
import person from "../../../assets/person.png";
const Summary = () => {
  return (
    <div className={styles.summary}>
      <img src={person} alt="user" className={styles.avatar} />
      <div className={styles.userInfo}>
        <strong>Bahaa Abbas</strong>
        <span>@BahaaAbb...</span>
      </div>
      <div className={styles.moreIcon}>
        <span className={styles.more}>
          <FaEllipsisH />
        </span>
      </div>
    </div>
  );
};

export default Summary;
