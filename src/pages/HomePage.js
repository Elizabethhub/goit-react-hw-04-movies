import React, { Component } from "react";
import { Wrapper } from "../components/searchform/SearchFormStyled";
import TrendingMovies from "../components/trendingMovies/TrendingMovies";
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
    return (
      <>
        <Wrapper>
          <h1>Trending today</h1>
        </Wrapper>
        <TrendingMovies movies={this.state.movies} props={this.props} />
      </>
    );
  }
}

export default HomePage;
