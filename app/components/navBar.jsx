import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Jedi Academies</a>
            <a className="navbar-brand">
              <img
                src="logo.png"
                height="20"
                alt="the force is not strong with you"
              />
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="/">Choose Your Side</a>
            </li>
            <li>
              <a href="/students">Students</a>
            </li>
            <li>
              <a href="/campuses">Campuses</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
