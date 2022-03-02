import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0000001c;

  @media screen and (max-width: 790px) {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  img {
    margin: 0;

    &.detailsImage {
      width: 100%;
      object-fit: contain;
      margin: 20px;
      max-width: 530px;
    }
    @media screen and (min-width: 790px) {
      margin-left: 50px;
    }
  }

  div {
    color: #004f7b;
    margin-left: 10px;
  }

  p {
    color: black;
    margin-left: 20px;
  }
`;
