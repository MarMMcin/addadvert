import React from "react";
import { withRouter } from "react-router";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import HeaderNavigation from "../Header/HeaderNavigation";

const toolbar = props => (
  <div className="navigation_links">
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__dTB">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <section className="page">
            <HeaderNavigation />
          </section>
        </div>
      </nav>
    </header>
  </div>
);

export default withRouter(toolbar);
