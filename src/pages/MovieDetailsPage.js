import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { ButtonStyled } from "../components/button/BuuttonStyled";
import { getMovieDetails } from "../services/Api";
import { MovieCardStyled } from "./MovieCardStyled";

const Cast = lazy(() => import("../components/cast/Cast"));
const Reviews = lazy(() => import("../components/reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
    from: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId || "";
    await getMovieDetails(id)
      .then((results) =>
        this.setState({
          movieDetails: results,
          from: this.props.location.state?.from,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { movieDetails } = this.state;

    return (
      <div className="movieWrap">
        {movieDetails.id && (
          <>
            <ButtonStyled type="button" onClick={() => this.props.history.push(this.state.from)}>
              Go back
            </ButtonStyled>
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
                  <NavLink className="cardLink" to={`/movies/${this.state.movieDetails.id}/reviews`}>
                    Reviews
                  </NavLink>
                  <NavLink className="cardLink" to={`/movies/${this.state.movieDetails.id}/cast`}>
                    Cast
                  </NavLink>
                </div>
              </div>
            </MovieCardStyled>

            <div>
              <Suspense fallback={<h2>...Loading</h2>}>
                <Switch>
                  <Route path="/movies/:id/reviews" exact component={Reviews} />
                  <Route path="/movies/:id/cast" exact component={Cast} />
                </Switch>
              </Suspense>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
