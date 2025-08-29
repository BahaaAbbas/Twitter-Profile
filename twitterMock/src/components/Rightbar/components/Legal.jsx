import React from "react";
import styles from "../styles/Legal.module.css";

const legalLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "More...",
  "© 2025 X Corp.",
];

const Legal = () => {
  return (
    <div className={styles.legalFooter}>
      <ul className={styles.linkList}>
        {legalLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legal;
