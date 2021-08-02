import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ exact, path, name, route, url }) => {
  return (
    <li className="navigationItem" key={path}>
      <NavLink
        className="navigationLink"
        activeClassName="activeNavigationLink"
        to={{ pathname: url + path }}
        exact={exact}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
