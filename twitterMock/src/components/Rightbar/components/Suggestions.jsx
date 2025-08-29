import React from "react";
import styles from "../styles/Suggestions.module.css";

const suggestions = [
  { name: "Tailwind CSS", handle: "@tailwindcss" },
  { name: "TypeScript", handle: "@typescript" },
  { name: "freeCodeCamp.org", handle: "@freeCodeCamp" },
];

const Suggestions = () => {
  return (
    <div className={styles.card}>
      <h3>Who to follow</h3>
      <ul>
        {suggestions.map((user, index) => (
          <li key={index} className={styles.user}>
            <img
              src={`https://via.placeholder.com/40?text=${user.name[0]}`}
              alt={user.name}
              className={styles.avatar}
            />
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
