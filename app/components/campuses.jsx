import React, { Component } from "react";
import CreateCampus from "./createCampus";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../store";

function campuses(props) {
  const { campuses } = props;

  return (
    <div>
    <h2>List of campuses</h2>
      <ul>
        {campuses &&
          campuses.map(campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campus/${campus.id}`}>
                  <span>
                    {campus.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
      </ul>
      <br/>
      <br/>
      <CreateCampus />
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(campuses);
