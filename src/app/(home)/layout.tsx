import React from "react";
import MemberSideNav from "@/components/MembersSideNav/MemberSideNav";
import GroupSideNav from "@/components/GroupSideNav/GroupSideNav";
const HomeLayout = ({ children }) => {
  return (
    <main>
      <GroupSideNav />
      <div>{children}</div>
      <MemberSideNav />
    </main>
  );
};

export default HomeLayout;
