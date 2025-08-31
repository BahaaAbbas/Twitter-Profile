import React from "react";
import styles from "../styles/LowerSection.module.css";
import tailwind from "../../../assets/tailwind.png";
import typescript from "../../../assets/typescript.png";
import freecode from "../../../assets/freecode.jpg";

const LowerSection = () => {
  const suggestions = [
    {
      id: 1,
      src: tailwind,
      follows: "Node.js and 9 others follow",
      name: "freeCodeCamp.org",
      username: "@freeCodeCamp",
      bio: "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity.",
      isVerified: true,
    },
    {
      id: 2,
      src: typescript,
      follows: "Node.js and 5 others follow",
      name: "TypeScript",
      username: "@typescript",
      bio: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript.",
      isVerified: false,
    },
    {
      id: 3,
      src: freecode,
      follows: "Node.js and 2 others follow",
      name: "Tailwind CSS",
      username: "@tailwindcss",
      bio: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
      isVerified: true,
    },
  ];

  return (
    <div className={styles.lowerSection}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>Who to follow</h2>
      </div>

      {suggestions.map((user) => (
        <div key={user.id} className={styles.suggestion}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <div className={styles.avatarPlaceholder}>
                <img src={user.src} alt={user.name} className={styles.avatar} />
              </div>
            </div>
            <div className={styles.userDetails}>
              <span className={styles.follows}>{user.follows}</span>
              <div className={styles.nameRow}>
                <span className={styles.displayName}>{user.name}</span>
                {user.isVerified && (
                  <span className={styles.verifiedIcon}>✓</span>
                )}
              </div>
              <span className={styles.username}>{user.username}</span>

              <p className={styles.bio}>{user.bio}</p>
            </div>
          </div>
          <button className={styles.followButton}>Follow</button>
        </div>
      ))}

      <button className={styles.showMore}>Show more</button>
    </div>
  );
};

export default LowerSection;
