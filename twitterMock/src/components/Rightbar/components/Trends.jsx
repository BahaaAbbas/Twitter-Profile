import React from "react";
import styles from "../styles/Trends.module.css";

const trends = [
  {
    category: "Gaming · Trending",
    title: "#VALORANTChampions",
    posts: "27.9K",
  },
  { category: "Trending", title: "Mako", posts: "14.1K" },
  { category: "Gaming · Trending", title: "fnatic", posts: "8,748" },
];

const Trends = () => {
  return (
    <div className={styles.card}>
      <h3>Trends for you</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index} className={styles.trend}>
            <span className={styles.category}>{trend.category}</span>
            <strong>{trend.title}</strong>
            <span className={styles.posts}>{trend.posts} posts</span>
          </li>
        ))}
      </ul>
      <button className={styles.showMore}>Show more</button>
    </div>
  );
};

export default Trends;
