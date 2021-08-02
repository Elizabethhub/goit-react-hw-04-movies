import React from "react";
import NavigationItem from "./navigationItem/NavigationItem";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = ({ routes, url = "", prevPathname = "" }) => {
  return (
    <NavigationStyled>
      <ul className="navigationList">
        {routes.map((route) => (
          <NavigationItem {...route} key={route.path} url={url} className="navigationItem" />
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
