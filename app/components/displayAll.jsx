
import React, { Component } from 'react';

export default class displayAll extends Component {

  render () {
      //onSubmit={props.handleSubmit}
      // <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
    return (
<div className="container">
  <h2>Students & Campuses</h2>     
  <table className="table table-condensed">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
}




