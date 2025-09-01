import React from "react";
import styles from "../styles/ProfileTabs.module.css";
import person from "../../../assets/person.png";

const ProfileTabs = () => {
  return (
    <div className={styles.middleSection}>
      <div className={styles.repost}>
        <div className={styles.repostIcon}>🔄</div>
        <span className={styles.repostText}>React reposted</span>
      </div>

      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <div className={styles.avatarPlaceholder}>
                <img src={person} />
              </div>
            </div>
            <div className={styles.userDetails}>
              <span className={styles.displayName}>danabramov.bsky.social</span>
              <span className={styles.username}>@dan.abramov</span>
              <span className={styles.timestamp}>May 29</span>
            </div>
          </div>
          <button className={styles.moreButton}>⋯</button>
        </div>

        <div className={styles.postContent}>
          <p className={styles.postText}>
            happy 10th birthday to{" "}
            <span className={styles.mention}>@reactjs</span> 🎂🎉
          </p>
        </div>

        <div className={styles.postActions}>
          <button className={styles.actionButton}>
            💬 <span>46</span>
          </button>
          <button className={styles.actionButton}>
            🔄 <span>676</span>
          </button>
          <button className={styles.actionButton}>
            ❤️ <span>3,701</span>
          </button>
          <button className={styles.actionButton}>
            📤 <span>1.4M</span>
          </button>
          <button className={styles.actionButton}>⬇️</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
