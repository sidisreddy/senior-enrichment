
import React, { Component } from 'react';

export default class createStudent extends Component {

  render () {
      //onSubmit={props.handleSubmit}
      // <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      const hello = "";
    return (
    <form  >
      <div className="form-group">
        <label htmlFor="name">Create a Student
        <input value={hello}  className="form-control" type="text" name="studentName" placeholder="Enter student name" /></label>
        <br/>
        <label>
        Select Campus
        <br/>
        <select>
        <option value="campus1">Campus 1</option>
        <option value="campus2">Campus 2</option>
        <option value="campus3">Campus 3</option>
        <option value="campus4">Campus 4</option>
        </select>
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Student</button>
      </div>
    </form>
    );
  }
}







