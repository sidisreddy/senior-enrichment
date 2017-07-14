import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./sidebar";
import CreateStudent from "./createStudent";
import CreateCampus from "./createCampus";
import DisplayAll from "./displayAll";
import NavBar from "./navBar";
import { connect } from "react-redux";
import Students from "./students";
import Campuses from "./campuses";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import Home from "./home";
import Footer from "./footer";
import store, { fetchCampuses, fetchStudents } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

class Root extends Component {
  componentDidMount() {
    // const campusesThunk = fetchCampuses();
    // const studentsThunk = fetchStudents();

    // store.dispatch(campusesThunk);
    // store.dispatch(studentsThunk);

    this.props.fetchStudents();
    this.props.fetchCampuses();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/students" component={Students} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/student/:studentId" component={SingleStudent} />
              <Route path="/campus/:campusId" component={SingleCampus} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchStudents: function() {
      dispatch(fetchStudents());
    },
    fetchCampuses: function() {
      dispatch(fetchCampuses());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
