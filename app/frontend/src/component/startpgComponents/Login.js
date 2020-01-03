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

  async getUser() {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:8000/api/users/" + username + "/");
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.login(json, username, password);
    } catch (error) {console.log(error);}


    // axios
    //   .get("http://localhost:8000/api/users/" + username + "/")
    //   .then(res => this.login(res.data, username, password))
    //   .catch(err => console.log(err.toString()));
  };

  login = (data, username, password) => {
    if (data) {
        if (data.username === username && data.password === password) {
          console.log("succesful");
          // createBrowserHistory().push("/UserPage/" + username);
          // render() {
          //   return(<Link to='/UserPage/{username}' />);
          // }
          window.open("/UserPage/" + username);
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
      <form id="loginform">
        <div id="logintitle" > Sign into PinIt! </div>
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

        <Link to="/Register" style={{color: "white", textDecorationLine: 'underline', fontSize: "12px"}}>
          Dont have an account? Click here to make a new one!
        </Link>
      </form>
      
    );
  }
}