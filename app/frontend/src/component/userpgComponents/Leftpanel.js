import React, { Component } from "react";
import { Link } from 'react-router-dom';

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

    // style="width: 18rem;"
    return (
      <div className="container-fluid">
        <div className="row" id="left-panels">
          <div className="col-12" >
            <div className="card" >
              <img src="/image/icon.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="col-12" id="feed-main">
            <div className="card">
              <div className="card-header">
                Quick Settings
              </div>
              <ul class="list-group list-group-flush">
                <li className = "list-group-item">Notifications</li>
                <li className = "list-group-item">Friends</li>
                <li className = "list-group-item">Other</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}