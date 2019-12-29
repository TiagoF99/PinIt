import React, { Component } from "react";

export default class Leftpanel extends Component {
  
  constructor(props) {
    super(props);
    this.curr_username = this.props.curr_username;
  }

  render() {

    var today = new Date();
    var hour = today.getHours();
    if (hour >= 0 && hour < 12) {
      this.phrase = "morning";
    } else if (hour >= 12 && hour < 18) {
      this.phrase = "afternoon";
    } else {
      this.phrase = "evening";
    }

    return (
      <div className="container-fluid">
        <div className="row" id="left-panels">
          <div className="col-12" >
            <div> Photo with cool background </div>
            <div> Good {this.phrase} {this.curr_username}!</div>
          </div>
          <div className="col-12" id="feed-main">
            <div> Notifications </div>
            <div> Friends </div>
          </div>
        </div>
      </div>
      
    );
  }
}