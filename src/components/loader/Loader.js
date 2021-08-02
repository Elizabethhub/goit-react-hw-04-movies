import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class AppLoader extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="cornflowerblue"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className="loader"
      />
    );
  }
}
