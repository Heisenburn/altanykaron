import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  padding-top: 200px;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    padding-top: 140px;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
  }
  h1,
  p {
    margin: 0;
  }
`;

export default Heading;
