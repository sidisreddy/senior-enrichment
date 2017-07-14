import React, { Component } from "react";
import CreateCampus from "./createCampus";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from '../store'

function campuses(props) {
  console.log("campuses ", props);

  return (
    <div className="container">
      <CreateCampus />
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(campuses));
