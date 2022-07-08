import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { CarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Row, Col, Spin } from "antd";
import {
  Container,
  ComponentCard,
  ComponentSubtitle,
  ComponentDescription,
  IconDiv,
  ComponentTitle,
} from "./elements";

const Indicators = ({ history, profile }) => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Spin size="large" style={{ padding: 200 }} />;
  }

  return (
    <Container>
      {!loading ? (
        <Row justify="space-between">
          <Col xs={24} sm={12} md={12} lg={6}>
            <ComponentCard>
              <Row>
                <Col flex="auto">
                  <ComponentSubtitle>0</ComponentSubtitle>
                </Col>
                <Col flex="20px">
                  <IconDiv>
                    <CarOutlined />
                  </IconDiv>
                </Col>
              </Row>
              <ComponentTitle>Trafico</ComponentTitle>
            </ComponentCard>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <ComponentCard>
              <Row>
                <Col flex="auto">
                  <ComponentSubtitle>0</ComponentSubtitle>
                </Col>
                <Col flex="20px">
                  <IconDiv>
                    <ClockCircleOutlined />
                  </IconDiv>
                </Col>
              </Row>
              <ComponentTitle>Tiempo de Servicio</ComponentTitle>
            </ComponentCard>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <ComponentCard>
              <Row>
                <Col flex="auto">
                  <ComponentSubtitle>
                    0<ComponentDescription></ComponentDescription>
                  </ComponentSubtitle>
                </Col>
                <Col flex="20px">
                  <IconDiv>
                    <ClockCircleOutlined />
                  </IconDiv>
                </Col>
              </Row>
              <ComponentTitle>Tiempo Muerto</ComponentTitle>
            </ComponentCard>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <ComponentCard>
              <Row>
                <Col flex="auto">
                  <ComponentSubtitle>
                    0<ComponentDescription></ComponentDescription>
                  </ComponentSubtitle>
                </Col>
                <Col flex="20px">
                  <IconDiv>
                    <ClockCircleOutlined />
                  </IconDiv>
                </Col>
              </Row>
              <ComponentTitle>Tiempo Atencion</ComponentTitle>
            </ComponentCard>
          </Col>
        </Row>
      ) : (
        <Spin size="large" style={{ padding: 150 }} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.profile.userID === undefined) return [];

    return [];
  })
)(Indicators);
