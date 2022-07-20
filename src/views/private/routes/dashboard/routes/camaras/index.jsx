import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Col, Row, Table } from "antd";
import { compose } from "redux";
import WebRtcStreamer from "../../../../../../webrtc-streamer/webrtcstreamer";
import { Container } from "./elements";
import TableTitle from "./components/table-title";
import { useOpenCv } from "opencv-react";

const Camaras = () => {
  const [state, setState] = useState("off");

  const webRtcServer = new WebRtcStreamer(
    document.getElementById("videoDiv"),
    "https://ploggm-webrtc.ngrok.io"
  );
  useEffect(() => {
    webRtcServer
      .connect(
        "Pollo Loco Gomez Morin 18",
        undefined,
        "rtptransport=tcp&timeout=60"
      )
      .then(() => {
        stateChange(-1);
      });
  }, []);

  function stateChange(newState) {
    setTimeout(function() {
      if (newState == -1) {
        setState("on");
      }
    }, 5000);
  }

  console.log("State Change", state);

  //Este es el <Video/> para mandar a Open CV
  const cam = document.getElementById("prueba");
  document.getElementById("prueba");

  // Este es el media stream que va a usar Open CV
  console.log(cam?.srcObject);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Fecha",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Duracion",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Estatus",
      dataIndex: "name",
      key: "name",
    },
  ];

  // OpenCV
  const { loaded, cv } = useOpenCv();

  useEffect(() => {
    if (cv && state === "on") {
      let video = document.getElementById("prueba");
      // Aqui pones codigo de opencv.js
    }
  }, [cv, state]);

  return (
    <Container>
      <Col>
        <Row>
          <div style={{ fontSize: 30, fontWeight: "800" }}>
            Pollo Loco Gomez Morin
          </div>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <div style={{ width: "50%" }}>
            <video
              width="120%"
              height="90%"
              id="prueba"
              autoPlay={true}
              playsInline={true}
            ></video>
          </div>
          <div style={{ width: "40%" }}>
            <Table
              locale="es"
              title={() => <TableTitle />}
              dataSource={[]}
              columns={columns}
              rowKey="id"
              scroll={{ y: "65vh" }}
            />
          </div>
        </Row>
      </Col>
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
)(Camaras);
