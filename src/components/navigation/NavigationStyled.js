import styled from "styled-components";

export const NavigationStyled = styled.nav`
  .navigationList {
    display: flex;
    list-style: none;
  }
  .navigationItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationLink {
    text-decoration: none;
    text-transform: uppercase;
    color: cornflowerblue;
  }
  .activeNavigationLink {
    color: #5f73a1;
  }
`;
