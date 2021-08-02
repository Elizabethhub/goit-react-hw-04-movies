import React, { Component } from "react";
import { SearchFormStyled, Wrapper } from "./SearchFormStyled";

class SearchForm extends Component {
  state = {
    query: "",
    page: 1,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  handleInputChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  render() {
    return (
      <Wrapper className="Searchbar">
        <SearchFormStyled className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </SearchFormStyled>
      </Wrapper>
    );
  }
}

export default SearchForm;
