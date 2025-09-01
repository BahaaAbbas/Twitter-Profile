import React from "react";
import styles from "../styles/Suggestions.module.css";
import { suggestions } from "../utils/RightbarConstant";

const Suggestions = () => {
  return (
    <div className={styles.card}>
      <h3>You might like</h3>
      <ul>
        {suggestions.map((user, index) => (
          <li key={index} className={styles.user}>
            <img src={user.src} alt={user.name} className={styles.avatar} />
            <div className={styles.info}>
              <strong>{user.name}</strong>
              <span>{user.handle}</span>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
        ))}
      </ul>
      <button className={styles.showMore}>Show more</button>
    </div>
  );
};

export default Suggestions;
