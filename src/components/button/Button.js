import React from "react";
import { ButtonStyled } from "./BuuttonStyled";

const Button = ({ loadMore }) => {
  return (
    <ButtonStyled type="button" onClick={loadMore}>
      Load more
    </ButtonStyled>
  );
};

export default Button;
