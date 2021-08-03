import React from "react";
import { NavLink } from "react-router-dom";
import { MovieCardStyled } from "./MovieCardStyled";

const MovieCard = ({ movieDetails }) => {
  return (
    <MovieCardStyled>
      {movieDetails.poster_path && (
        <img
          className="movieCardImg"
          src={"https://image.tmdb.org/t/p/w300" + movieDetails.poster_path}
          alt={movieDetails.original_title}
        />
      )}
      <div>
        <h2>
          {movieDetails.original_title}
          {!!movieDetails.release_date && (
            <>
              <span> (</span> {Number.parseInt(movieDetails.release_date)}
              <span>)</span>
            </>
          )}
        </h2>
        <p>User Score: {(movieDetails.vote_average * 10).toFixed(0)}%</p>
        <h3 className="moviePartTitle">Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3 className="moviePartTitle">Genres</h3>
        <ul>
          {movieDetails.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h3 className="moviePartTitle">Additional information</h3>
        <div>
          <NavLink className="cardLink" to={`/movies/${movieDetails.id}/reviews`}>
            Reviews
          </NavLink>
          <NavLink className="cardLink" to={`/movies/${movieDetails.id}/cast`}>
            Cast
          </NavLink>
        </div>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
