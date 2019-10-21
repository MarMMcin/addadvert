import React from "react";
import "./DrawerToggleButton.css";

const drawerToogleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="iconBurger">
      <i className="fas fa-bars"></i>
    </div>
  </button>
);

export default drawerToogleButton;
