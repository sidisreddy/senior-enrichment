import React, { Component } from "react";
import { connect } from "react-redux";
import store, { postCampus, writeCampusName } from '../store';

function createCampus(props) {

  const {newCampusEntry, handleSubmit, handleChange} = props;

  return (
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Campus
        <input
          value={newCampusEntry}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="campusName"
          placeholder="Enter campus name"
        />
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Campus</button>
      </div>
    </form>
  );
}

const mapStateToProps = function(state) {
  return {
    newCampusEntry: state.newCampusEntry
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    handleChange(evt) {
      dispatch(writeCampusName(evt.target.value));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const name = evt.target.campusName.value;
      dispatch(postCampus({ name }));
      dispatch(writeCampusName(""));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createCampus);
