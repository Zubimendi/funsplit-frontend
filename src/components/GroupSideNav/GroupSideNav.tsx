import React from "react";
// import Image from "next/image";
import GroupList from "../GroupList/GroupList";
const GroupSideNav = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      <div>
        <p>Groups</p>
        {/* Render groups here */}
        <GroupList />
      </div>

      <button>Create Group</button>
    </nav>
  );
};

export default GroupSideNav;
