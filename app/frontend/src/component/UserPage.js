import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Leftpanel from "./userpgComponents/Leftpanel.js";
import Feed from "./userpgComponents/Feed.js";

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
       
        <div className="container-fluid" id="user-main">
          <div className="row">
            <div className="col-xs-12 col-md-3" >
              <Leftpanel curr_username={this.curr_username}/>
            </div>
            <div className="col-xs-12 col-md-9" id="feed-main">
              <Feed curr_username={this.curr_username}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}