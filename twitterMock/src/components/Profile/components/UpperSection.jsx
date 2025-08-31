import React from "react";
import styles from "../styles/UpperSection.module.css";
import bannerImage from "../../../assets/react-avatar.jpg";
import avatarImage from "../../../assets/react-avatar.jpg";

const UpperSection = () => {
  const tabs = ["Posts", "Replies", "Media", "Likes"];

  return (
    <div className={styles.upperSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton}>←</button>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>React</h1>
            <span className={styles.postCount}>2,671 posts</span>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className={styles.banner}>
        <img
          src={bannerImage}
          alt="Profile Banner"
          className={styles.bannerImage}
        />
      </div>

      {/* Profile Info */}
      <div className={styles.profileInfo}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarContainer}>
            <img
              src={avatarImage}
              alt="React Avatar"
              className={styles.avatar}
            />
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.iconButton}>⋯</button>
            <button className={styles.iconButton}>🔔</button>
            <button className={styles.followButton}>Following</button>
          </div>
        </div>

        <div className={styles.userInfo}>
          <h2 className={styles.displayName}>React</h2>
          <span className={styles.username}>@reactjs</span>
          <p className={styles.bio}>
            The library for web and native user interfaces
          </p>
          <div className={styles.metadata}>
            <div className={styles.metadataItem}>
              🔗
              <a href="#" className={styles.link}>
                react.dev
              </a>
            </div>
            <div className={styles.metadataItem}>
              📅 <span>Joined July 2013</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.profileStats}>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>267</span>
              <span className={styles.statLabel}>Following</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>708.1K</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>
          <div className={styles.followedBy}>
            <span>
              Followed by Mohammad Kukhun, Yazan Alsade, and 14 others you
              follow
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.profileTabs}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`${styles.tab} ${index === 0 ? styles.activeTab : ""}`}
            >
              <span className={styles.tabText}>{tab}</span>
              {index == 0 && <div className={styles.activeIndicator} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
