import React from "react";
import MemberSideNav from "@/components/MembersSideNav/MemberSideNav";
import GroupSideNav from "@/components/GroupSideNav/GroupSideNav";
import styles from './layout.module.css'; // Assuming you're using CSS modules

const HomeLayout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <GroupSideNav className={styles.sideNav} />
      <div className={styles.dashboard}>{children}</div>
      <MemberSideNav className={styles.sideNav} />
    </main>
  );
};

export default HomeLayout;
