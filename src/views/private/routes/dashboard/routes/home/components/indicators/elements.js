import styled from "styled-components";
import { Card, Typography } from "antd";

const { Text } = Typography;

const Container = styled.div`
  .ant-table-content {
    overflow-x: scroll;
  }
`;

const ComponentCard = styled(Card)`
  border-radius: 9px;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.14);
  margin: 10px 10px;
`;

const ComponentTitle = styled(Text)`
  &.ant-typography {
    color: black;
    font-family: "Roboto", sans-serif;
    opacity: 1;
    font-size: 1rem;
    font-weight: 600;
  }
  display: block;
  white-space: nowrap;
`;

const ComponentSubtitle = styled(Text)`
  &.ant-typography {
    color: gray;
    font-family: "Roboto", sans-serif;
    opacity: 1;
    font-size: 1.875rem;
    font-weight: 700;
  }
`;

const ComponentDescription = styled(Text)`
  &.ant-typography {
    color: black;
    font-family: "Roboto", sans-serif;
    opacity: 1;
    font-size: 1.175rem;
    font-weight: 700;
  }
`;

const IconDiv = styled.div`
  background-color: #fff056;
  border-radius: 5px;
  font-size: 25px;
  color: #d93831;
  padding: 0px 7px;
`;

export {
  Container,
  IconDiv,
  ComponentDescription,
  ComponentSubtitle,
  ComponentTitle,
  ComponentCard,
};
