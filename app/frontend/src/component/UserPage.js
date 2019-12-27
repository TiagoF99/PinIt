import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class UserPage extends Component {
  /*
  This page will represent the page that the user logs into.
  We can define all the main components later
  */

  constructor(props) {
      super(props);
      this.curr_username = this.props.match.params.curr_username;
    }
  
  render() {
    return (
      <main className="content">
        <div>Hello1 {this.curr_username} !</div>
      </main>
    );
  }
}