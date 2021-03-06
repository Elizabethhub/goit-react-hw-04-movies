import React, { Component } from "react";
import SearchForm from "../components/searchform/SearchForm";
import queryString from "query-string";

import MovieList from "../components/navigation/movieList/MovieList";
import { searchMovie } from "../services/Api";
import { Route } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage";
import Button from "../components/button/Button";
import AppLoader from "../components/loader/Loader";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    if (query) {
      this.setState({
        query: query,
        movies: [],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getMovies(this.state.query);
    }

    if (this.state.movies !== prevState.movies && this.currentPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      query: query,
      movies: [],
      currentPage: 1,
      error: null,
    });
    this.props.history.push({ search: `query=${query}` });
  };

  getMovies = async () => {
    const { query, currentPage } = this.state;

    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    await searchMovie(options)
      .then((response) =>
        this.setState((prevState) => ({
          movies: response,
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMore = async () => {
    const { query, currentPage } = this.state;

    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    await searchMovie(options)
      .then((response) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...response],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => console.log(`error`, error))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    const { movies, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>????, ????????????, ?????? ??????????????!!!</h1>}
        <SearchForm onSubmit={this.onChangeQuery} />
        {!!movies.length && <MovieList movies={movies} />}
        {!!movies.length && !isLoading && <Button loadMore={this.loadMore} />}
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default MoviesPage;
