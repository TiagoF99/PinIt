import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import { createBrowserHistory} from "history";

export default class Login extends Component {
  /*
  the login form component for the user
  -> figure out proper authetification
  */

  constructor(props) {
      super(props);
    }

  getUser = () => {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;

    axios
      .get("http://localhost:8000/api/todos/" + username + "/")
      .then(res => this.login(res.data, username, password))
      .catch(err => console.log(err.toString()));
  };

  login = (data, username, password) => {
    console.log(data);
    if (data) {
        if (data.username === username && data.password === password) {
          console.log("succesful");
          createBrowserHistory().push("/UserPage/" + username);
      } else {
        // alert("Username or Password do not match");
        console.log("username/pwd dont match");
      }
    } else {
      console.log("username doesnt exits in database/ error in request");
      //alert("That Username Does Not Exist In Our DataBase");
    }
  }
  
  render() {
    return (
      <form id="loginform" className="bg-light">
        <div id="logintitle"> Login </div>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input id="loginUser" type="username" className="form-control"></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input id="loginPassword" type="password" className="form-control"></input>
          </div>
        </div>
        
        <div className="form-group row">
          <div className="col-sm-10">
            <button onClick={() => this.getUser()} 
            type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>

        <Link to="/Register">Dont have an account? Click here to register!</Link>
      </form>
      
    );
  }
}