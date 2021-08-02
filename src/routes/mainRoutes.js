import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

export const mainRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "movies", path: "/movies", exact: true, component: MoviesPage },
];
