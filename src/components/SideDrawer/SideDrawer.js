import React from "react";
import HeaderNavigation from "../Header/HeaderNavigation";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }
  return (
    <nav className={drawerClasses.join("")}>
      <ul>
        <HeaderNavigation />
      </ul>
    </nav>
  );
};
export default sideDrawer;
