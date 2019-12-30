import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Friends extends Component {

	constructor(props) {
      super(props);
      this.curr_username = this.props.match.params.curr_username;
    }

    render() {
      return (
        <main className="content">Friends {this.curr_username}</main>
      );
    }
}