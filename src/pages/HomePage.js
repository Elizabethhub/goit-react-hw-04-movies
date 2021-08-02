import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MovieListStyled } from "../components/navigation/movieList/MovieListStyled";
import { Wrapper } from "../components/searchform/SearchFormStyled";
import { getTrendingMovies } from "../services/Api";

//добавить прелоадер

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await getTrendingMovies()
      .then((response) => this.setState({ movies: response }))
      .catch((error) => console.log(`error`, error));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <Wrapper>
          <h1>Trending today</h1>
        </Wrapper>
        <MovieListStyled>
          {!!movies.length &&
            movies.map((movie) => (
              <li className="moviesItem" key={movie.id}>
                <NavLink
                  className="title"
                  to={{ pathname: `/movies/${movie.id}`, state: { from: this.props.location.pathname } }}
                >
                  <img
                    className="movieImg"
                    src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                    alt={movie.title}
                  />
                  <h2 className="title">{movie.title}</h2>
                </NavLink>
              </li>
            ))}
        </MovieListStyled>
      </>
    );
  }
}

export default HomePage;
