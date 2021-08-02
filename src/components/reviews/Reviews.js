import React, { Component } from "react";
import { getMovieReviews } from "../../services/Api";
import { ReviewsStyled } from "./ReviewsStyled";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await getMovieReviews(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        {!!reviews.length ? (
          <ReviewsStyled>
            {reviews.map((review) => (
              <li key={review.author}>
                <h2 className="author">{review.author}</h2>
                <p className="content">{review.content}</p>
              </li>
            ))}
          </ReviewsStyled>
        ) : (
          <h2 className="noReview">We don't have any reviews for this movie</h2>
        )}
      </>
    );
  }
}

export default Reviews;
