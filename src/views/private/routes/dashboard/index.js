import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Loadable from "react-loadable";

/* webpackChunkName: "Home" */
const Home = Loadable({
  loader: () => import("./routes/home"),
  loading: TopBarProgress,
});

/* webpackChunkName: "Camaras" */
const Camaras = Loadable({
  loader: () => import("./routes/camaras"),
  loading: TopBarProgress,
});

/* webpackChunkName: "Users" */
const Users = Loadable({
  loader: () => import("./routes/users"),
  loading: TopBarProgress,
});

const Dash = () => (
  <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/camaras">
      <Camaras />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Redirect to="/home" />
  </Switch>
);

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Dash);
