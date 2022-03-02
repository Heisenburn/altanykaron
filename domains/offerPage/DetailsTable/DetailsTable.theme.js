import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #0000001c;
  align-items: center;

  @media screen and (max-width: 790px) {
    margin-bottom: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .firstRow {
    display: flex;
    align-items: center;
    min-width: 20%;

    .label {
      color: #004f7b;
      margin-left: 10px;
    }

    img {
      margin: 0;
    }
  }

  .secondRow {
    img {
      width: 100%;
      object-fit: contain;
      margin: 20px;
      max-width: 530px;
    }

    @media screen and (min-width: 790px) {
      margin-left: 50px;
    }

    .value {
      color: black;
      line-height: 35px;
    }
  }
`;
