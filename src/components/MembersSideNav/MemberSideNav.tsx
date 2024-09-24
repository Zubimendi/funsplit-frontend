import React from "react";
import MemberList from "../MemberList/MemberList";
const MemberSideNav = ({className}: { className: string }) => {
  return (
    <nav className={className}>
      <div>Group Members</div>
      {/* Render Group Members here */}
      <MemberList />
    </nav>
  );
};

export default MemberSideNav;
