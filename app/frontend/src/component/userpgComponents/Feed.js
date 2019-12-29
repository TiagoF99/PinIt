import React, { Component } from "react";

export default class Feed extends Component {
  
  constructor(props) {
    super(props);
    this.curr_username = this.props.curr_username;
  }

  render() {

    return (

      <div>{this.curr_username}</div>

    );
  }
}