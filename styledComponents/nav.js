import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;

  margin: 0;
  padding-top: 68px;
  ul {
    justify-content: space-between;
    display: flex;
    list-style: none;
    color: white;
    width: 100%;
    padding-left: 0;

    margin: 0;
    li {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const NavigationHome = styled(Navigation)`
  background-color: ${({ theme }) => theme.brown};
`;
