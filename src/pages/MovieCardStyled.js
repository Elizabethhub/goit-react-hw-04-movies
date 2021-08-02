import styled from "styled-components";

export const MovieCardStyled = styled.div`
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  display: inline-flex;

  .movieCardImg {
    margin-right: 20px;
    border-radius: 4px;
  }
  .moviePartTitle {
    color: cornflowerblue;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 30px;
    color: #c0aa2e;
  }
  .cardLink {
    margin-right: 15px;
    margin-bottom: 20px;
    border: solid 1px cornflowerblue;
    border-radius: 3px;
    padding: 7px;
    text-decoration: none;
  }
`;
