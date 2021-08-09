import styled from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background: white;
  width: 220px;
  height: 65px;
  color: black;
  border: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;