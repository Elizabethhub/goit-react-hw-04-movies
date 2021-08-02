import React from "react";
import { Route, Switch } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import { mainRoutes } from "../../routes/mainRoutes";
import { MainStyled } from "./MainStyled";

const Main = ({ path = "" }) => {
  return (
    <MainStyled>
      <Switch>
        <Route path="/movies/:movieId" component={MovieDetailsPage} exact={false} />
        {mainRoutes.map((route) => (
          <Route path={path + route.path} component={route.component} exact={route.exact} key={route.path} />
        ))}
      </Switch>
    </MainStyled>
  );
};

export default Main;
