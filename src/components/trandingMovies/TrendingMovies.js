import React from "react";
import { NavLink } from "react-router-dom";
import { MovieListStyled } from "../navigation/movieList/MovieListStyled";

const TrendingMovies = ({ movies, props }) => {
  return (
    <MovieListStyled>
      {!!movies.length &&
        movies.map((movie) => (
          <li className="moviesItem" key={movie.id}>
            <NavLink
              className="title"
              to={{ pathname: `/movies/${movie.id}`, state: { from: props.location.pathname } }}
            >
              <img className="movieImg" src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title} />
              <h2 className="title">{movie.title}</h2>
            </NavLink>
          </li>
        ))}
    </MovieListStyled>
  );
};

export default TrendingMovies;
