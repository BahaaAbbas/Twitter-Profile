import React from "react";
import styles from "./styles/Profile.module.css";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import WhoToFollow from "./components/WhoToFollow";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <ProfileTabs />
      <WhoToFollow />
    </div>
  );
};

export default Profile;
