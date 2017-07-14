import React, { Component } from "react";
import { connect } from "react-redux";
import store, { postStudent, writeStudent } from "../store";
import $ from 'jquery';


var selectedCampus = 1;
function handleCampus(evt)
{



}
function createStudent(props) {
  console.log("createStudent ", props);

  const {newStudentEntry, campuses, handleSubmit, handleChange } = props;


  return (

      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Student
        <input
          value={newStudentEntry}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter student name"
        />
        </label>
      </div>
      <label>
          Select Campus
          <br />
          <select id = "campusSelect" onChange = {handleCampus()} >
            {campuses &&
              campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.name}>
                    {campus.name}
                  </option>
                );
              })}
          </select>
        </label>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Student</button>
      </div>
    </form>

 

  );
}

const mapStateToProps = function(state) {

  return {
    newStudentEntry: state.newStudentEntry,
    campuses: state.campuses
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    handleChange(evt) {
      //console.log("event ", evt.target)
      dispatch(writeStudent(evt.target.value));
    },
    handleSubmit(evt) {
      console.log("submit event ", evt)
      evt.preventDefault();
      const name = evt.target.studentName.value;
      dispatch(postStudent({ name, campusId : selectedCampus }));
      dispatch(writeStudent(""));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createStudent);
