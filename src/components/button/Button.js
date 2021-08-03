import React from "react";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ loadMore }) => {
  return (
    <ButtonStyled type="button" onClick={loadMore}>
      Load more
    </ButtonStyled>
  );
};

export default Button;
