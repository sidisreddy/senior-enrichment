import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import store , {deleteOneStudent} from "../store";

function SingleStudent(props) {
  const { studentId, students, handleOnClick,handleSubmit } = props;

  return (
    <div>
      <ul>
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
      <div className="form-group">
        <button onClick = {handleOnClick}type="submit" className={studentId}>
          Delete Student
        </button>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Update Student Name
        <input
          value=""
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Update student name"
        />
        </label>
      </div>
      <div className="form-group">
           {students &&
          students.map(student => {
            return (
            <button type="submit" className={student.id}>Update</button>
            );
          })}
      </div>
    </form>


    </div>
  );
}

const mapStateToProps = function(state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);

  const filteredStudents = state.students.filter(function(students) {
    return students.id === studentId;
  });

  return { students: filteredStudents, studentId };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleOnClick(evt) {
        console.log("delete ", Number(evt.target.className))
        console.log("ownProps ", ownProps)
        dispatch(deleteOneStudent(Number(evt.target.className), ownProps.history));
        //dispatch(postCampus(Number(evt.target.className)));
    },
  
   handleSubmit(evt)
    {
       evt.preventDefault();
       console.log("submit ", evt.target.className)
    }
    

  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SingleStudent));
