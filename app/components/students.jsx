import CreateStudent from "./createStudent";
import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

function students(props) {
  const { students } = props;

  return(  
    <div>
    <h2>List of students</h2>
    <ul>
      {students && students.map(student => {
          return (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                <span>
                  {student.name}
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
    <br/>
    <br/>
    <CreateStudent />
    </div>
  )

}

const mapStateToProps = function(state) {
  return {
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(students));
