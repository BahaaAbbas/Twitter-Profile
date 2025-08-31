import React from "react";
import styles from "./styles/Profile.module.css";
import UpperSection from "./components/UpperSection";
import MiddleSection from "./components/MiddleSection";
import LowerSection from "./components/LowerSection";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  );
};

export default Profile;
