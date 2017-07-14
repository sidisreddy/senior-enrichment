import React, { Component } from "react";

export default class createCampus extends Component {
  render() {
    //onSubmit={props.handleSubmit}
    // <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
    return (
      <form>
        <h4>Create New Campus </h4>
        <label>
          Campus Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
