import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link, withRouter } from "react-router-dom";
import {
  UserAddOutlined,
  HomeOutlined,
  PushpinOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import Logo from "./pl_logo.png";
import { breakpoints } from "../../../theme/media";
import { Menu } from "./elements";

const { Item, SubMenu } = Menu;

const Sidebar = ({ history, collapsed, onCollapse, profile }) => {
  const [isLg, toggleLg] = useState(window.innerWidth > breakpoints.lg);

  const updateWidth = () => {
    toggleLg(window.innerWidth > breakpoints.lg);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  let routes = (
    <>
      <Item style={{ marginRight: 10 }} icon={<HomeOutlined />} key="home">
        <Link to="/home">Home</Link>
      </Item>
      <Item style={{ marginRight: 10 }} icon={<CameraOutlined />} key="camaras">
        <Link to="/camaras">Camaras</Link>
      </Item>
      <Item icon={<UserAddOutlined />} key="users">
        <Link to="/users">Usuarios</Link>
      </Item>
    </>
  );
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ padding: 10 }}
        defaultSelectedKeys={history.location.pathname.toLowerCase()}
        selectedKeys={history.location.pathname.toLowerCase()}
      >
        <img
          width={80}
          src={Logo}
          style={{ marginRight: 100, marginLeft: 40 }}
        />
        {routes}
      </Menu>
    </>
  );
};

Sidebar.propTypes = {
  history: PropTypes.object.isRequired,
  collapsed: PropTypes.bool.isRequired,
  onCollapse: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default compose(connect(mapStateToProps), withRouter)(Sidebar);
