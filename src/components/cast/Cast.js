import React, { Component } from "react";

import defaultCastImg from "../../images/defaultCastImg.png";
import { getMovieCast } from "../../services/Api";
import { CastStyled } from "./CastStyled";

class Cast extends Component {
  state = {
    castInfo: {},
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await getMovieCast(id)
      .then((results) => this.setState({ castInfo: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { castInfo } = this.state;
    return (
      <>
        <CastStyled>
          {castInfo.id ? (
            <ul>
              {castInfo.cast.map(({ id, profile_path, name }) => (
                <li className="castCardWrap" key={id}>
                  <img
                    className="castImg"
                    src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : defaultCastImg}
                    alt={name}
                  />
                  <h2 className="castName">{name}</h2>
                </li>
              ))}
            </ul>
          ) : (
            <h2>Page not found </h2>
          )}
        </CastStyled>
      </>
    );
  }
}

export default Cast;
