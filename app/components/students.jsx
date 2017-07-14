import CreateStudent from "./createStudent";
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function students(props) {
  const { students } = props;

  console.log(students)

  return(  <div>
    <ul>
      {students && students.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/student/${student.id}`}>
                <span>
                  # {student.name}
                </span>
              </NavLink>
            </li>
          );
        })}
    </ul>
    <CreateStudent />
  </div>);

}

const mapStateToProps = function(state) {
  return {
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(students));
