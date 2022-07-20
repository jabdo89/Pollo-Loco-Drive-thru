import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  :hover {
    cursor: help;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export { TitleContainer, DescriptionContainer };
