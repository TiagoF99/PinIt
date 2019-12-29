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
        <Login />
        <div id="description"> This is a description for the app. 
        Trying to make it very long for the sake of it being long.
        Hmmm. Hope I can commit soon. Words. How the fuck do I fill
        up a whole description full of words if my brain is empty? 
        Seems tricky. </div>
      </main>
    );
  }
}