import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Row, Tabs } from "antd";
import { Container } from "./elements";
import Indicators from "./components/indicators";
import LineChart from "./components/line-chart";
import {
  getTodayDate,
  getThisMonth,
  getThisWeek,
  getLastMonth,
  getLastWeek,
  getYesterdayDate,
} from "./components/date-functions";

const { TabPane } = Tabs;

const Analitics = ({ profile }) => {
  const [tab, updateTab] = useState(3);
  const [metricsDate, updateMetricsDate] = useState(new Date());
  const [lastPerdiodDate, updateLastPeriodDate] = useState(new Date());

  const handleTabChange = (tabKey) => {
    if (tabKey == 1) {
      //Today
      updateMetricsDate(getTodayDate());
      updateLastPeriodDate(getYesterdayDate());
    }
    if (tabKey == 2) {
      //Week
      updateMetricsDate(getThisWeek());
      updateLastPeriodDate(getLastWeek());
    }
    if (tabKey == 3) {
      //Month
      updateMetricsDate(getThisMonth());
      updateLastPeriodDate(getLastMonth());
    }
    updateTab(tabKey);
  };

  useEffect(() => {
    const db = firebase.firestore();

    const query = async () => {
      const user = firebase.auth().currentUser;

      db.collection("seguimeinto").onSnapshot((querySnapshot) => {
        const info = [];

        // eslint-disable-next-line func-names
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          info.push(doc.data());
        });
      });
    };

    query();
  }, []);

  return (
    <Container>
      <Tabs
        tabPosition="top"
        style={{ paddingLeft: 20 }}
        size="large"
        onChange={(tabKey) => handleTabChange(tabKey)}
        destroyInactiveTabPane="true"
        defaultActiveKey="3"
      >
        <TabPane tab="Hoy" key="1"></TabPane>
        <TabPane tab="Semana" key="2"></TabPane>
        <TabPane tab="Mes" key="3"></TabPane>
      </Tabs>
      <Indicators />
      <Row style={{ justifyContent: "space-between" }}>
        <LineChart />
        <LineChart />
      </Row>
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
)(Analitics);
