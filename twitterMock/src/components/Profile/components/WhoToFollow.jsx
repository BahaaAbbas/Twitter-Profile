import React from "react";
import styles from "../styles/WhoToFollow.module.css";
import { suggestions } from "../utils/ProfileConstant";

const WhoToFollow = () => {
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

export default WhoToFollow;
