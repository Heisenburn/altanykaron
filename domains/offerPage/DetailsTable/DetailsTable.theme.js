import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: ${({ isAdditionalInfo }) =>
    isAdditionalInfo ? "baseline" : "center"};
  border-bottom: 1px solid #0000001c;

  img {
    margin-right: 10px;
  }

  p {
    color: #004f7b;
    span {
      color: black;
    }
  }
`;
