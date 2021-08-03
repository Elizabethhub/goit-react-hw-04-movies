import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ButtonStyled } from "../components/button/ButtonStyled";
import MovieCard from "../components/movieCard/MovieCard";
import { getMovieDetails } from "../services/Api";
import { useHistory } from "react-router-dom";

const Cast = lazy(() => import("../components/cast/Cast"));
const Reviews = lazy(() => import("../components/reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
    from: "",
    query: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId || "";
    console.log(this.props.match.url);
    await getMovieDetails(id)
      .then((results) =>
        this.setState({
          movieDetails: results,
          from: this.props.location.state?.from,
        })
      )
      .catch((error) => console.log(error));
  }

  goBack = () => {
    // const { location, history } = this.props;
    this.props.history.push(this.state?.from);
  };

  // demo = () => {
  //   let history = useHistory();
  //   const goToPreviousPath = () => {
  //     history.goBack();
  //   };
  // };
  render() {
    const { movieDetails } = this.state;

    return (
      <div className="movieWrap">
        {movieDetails.id && (
          <>
            <ButtonStyled type="button" onClick={this.goBack}>
              Go back
            </ButtonStyled>
            <MovieCard movieDetails={movieDetails} />
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
