import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './sidebar';
import CreateStudent from './createStudent';
import CreateCampus from './createCampus';
import DisplayAll from './displayAll';
import NavBar from './navBar';
import { connect } from 'react-redux';
import Students from './students';
import Campuses from './campuses';
import Home from './home';
import Footer from './footer'
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Root extends Component {
 

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }


  render() {

    return (
      <div>
      <NavBar/>
        <main>
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/campuses" component={Campuses} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}