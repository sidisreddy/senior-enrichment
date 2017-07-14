import React, { Component } from "react";
import { connect } from "react-redux";
import store, { deleteOneCampus, updateCampusM, updateCampus } from "../store";
import { NavLink, withRouter } from "react-router-dom";

function SingleCampus(props) {
  const {
    handleChange,
    updateCampus,
    campusId,
    campuses,
    students,
    handleOnClick,
    handleSubmit
  } = props;

  return (
    <div>
      <div>
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
        <br />
        <br />
        <div className="form-group">
          <button onClick={handleOnClick} type="submit" className={campusId}>
            Delete Campus
          </button>
        </div>
      </div>
      <div>
        <ul>
          <h4> Students </h4>
          {students &&
            students.map(student => {
              return (
                <li key={student.id}>
                  <NavLink to={`/student/${student.id}`}>
                    <span>
                      {student.name}
                    </span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
        <br />
        <br />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Update Campus Name
            {campuses &&
              campuses.map(campus => {
                return (
                  <input
                    value={updateCampus}
                    onChange={handleChange}
                    className={campus.id}
                    type="text"
                    name="campusName"
                    placeholder="Update campus name"
                  />
                );
              })}
          </label>
        </div>
        <div className="form-group">
          {campuses &&
            campuses.map(campus => {
              return (
                // <button onClick = {handleSubmit} type="submit" className={campus.id + "|" + campus.name}>Update</button>
                <button type="submit" className={campus.id + "|" + campus.name}>
                  Update
                </button>
              );
            })}
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = function(state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);

  const filteredCampuses = state.campuses.filter(function(campus) {
    return campus.id === campusId;
  });

  const filteredStudents = state.students.filter(function(students) {
    return students.campusId === campusId;
  });

  return {
    campuses: filteredCampuses,
    students: filteredStudents,
    campusId,
    updateCampus: state.updateCampus
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(evt) {
      dispatch(updateCampus(evt.target.value));
    },
    handleOnClick(evt) {
      //console.log("delete ", Number(evt.target.className))
      //console.log("ownProps ", ownProps)
      dispatch(deleteOneCampus(Number(evt.target.className), ownProps.history));
    },

    handleSubmit(evt) {
      evt.preventDefault();
      console.log("submit ", updateCampusM);
      console.log("submit ", evt.target.campusName.className);

      dispatch(
        updateCampusM(
          updateCampusM,
          evt.target.campusName.className,
          ownProps.history
        )
      );
      dispatch(updateCampus(""));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
);
