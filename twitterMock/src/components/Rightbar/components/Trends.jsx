import React from "react";
import styles from "../styles/Trends.module.css";
import { trends } from "../utils/RightbarConstant";

const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

const Trends = () => {
  return (
    <div className={styles.card}>
      <h3>Trends for you</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index} className={styles.trend}>
            <span className={styles.category}>{trend.category}</span>
            <strong
              style={{
                display: "block",
                textAlign: isArabic(trend.title) ? "right" : "left",
              }}
            >
              {trend.title}
            </strong>
            <span className={styles.posts}>{trend.posts} posts</span>
          </li>
        ))}
      </ul>
      <button className={styles.showMore}>Show more</button>
    </div>
  );
};

export default Trends;
