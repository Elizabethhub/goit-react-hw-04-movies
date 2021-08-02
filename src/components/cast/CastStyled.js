import styled from "styled-components";

export const CastStyled = styled.div`
  margin-top: 20px;

  ul {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .castCardWrap {
    border: 1px solid cornflowerblue;
    padding: 5px;
  }
  .castImg {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    .castImg:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
  }
  .castName {
    color: cornflowerblue;
    margin-bottom: 10px;
    margin-top: 20px;
    text-align: center;
  }
`;
