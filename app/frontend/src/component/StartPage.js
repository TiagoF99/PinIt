import React, { Component } from "react";
import Register from "./startpgComponents/Register.js";
import Login from "./startpgComponents/Login.js";

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
        <div id="logintitle"> Pinit! </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Login />
            </div>
            <div className="col-6">
              <Register />
            </div>  
          </div>
        </div>
      </main>
    );
  }
}