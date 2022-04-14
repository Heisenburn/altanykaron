import styled from "styled-components";
import DESKTOP_MEDIA_QUERY from "../../../constants/screenSize";

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background: white;
  width: 220px;
  height: 65px;
  color: black;
  border: none;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
    font-size: 16px;
  }
  cursor: pointer;

  &:disabled {
    background: grey;
  }
`;
