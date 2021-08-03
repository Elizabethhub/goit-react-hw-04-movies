import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { MovieListStyled } from "./MovieListStyled";
import defaultImg from "../../../images/defaultMovieImg.jpeg";

const MovieList = ({ movies, location }) => {
  return (
    <MovieListStyled>
      {movies.map((movie) => (
        <li className="moviesItem" key={movie.id}>
          <NavLink
            className="title"
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              src={movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : defaultImg}
              alt={movie.title}
              className="movieImg"
            />

            <h2 className="title">{movie.title}</h2>
          </NavLink>
        </li>
      ))}
    </MovieListStyled>
  );
};

export default withRouter(MovieList);
