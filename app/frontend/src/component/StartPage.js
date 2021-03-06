import React, { Component } from "react";
import Register from "./startpgComponents/Register.js";
import Login from "./startpgComponents/Login.js";
import { Link } from 'react-router-dom';

export default class StartPage extends Component {
  /*
  This is the initial page where the user can login.
  There is a link to the registration page that is
  a component on this page and renders like the login
  component.
  */

  render() {
    return (
      <main className="content">
        <div id="apptitle"> PinIt! </div>
        <img src="/image/transparent-line.png" alt="Line" style={{width: 310, height: 60,
        position: 'absolute', top: 123, left: 50}}/>
        
        <Login />
        <div id="description"> This is a description for the app. 
        This is a description for the app. This is a description
        for the app. This is a description for the app. This is
        a description for the app. This is a description for 
        the app. Description. Description. </div>
      </main>
    );
  }
}