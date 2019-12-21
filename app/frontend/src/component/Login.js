import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {

  getUser = username => {
    axios
      .get("http://localhost:8000/api/todos/$" + username + "/")
      .then(res => {
           console.log("succesful get request; data: " + res.data);
           return res.data;
      })
      .catch(err => {
        console.log(err);
        return {};
      });
  };

  login = () => {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;

    const user_data = this.getUser(username);
    if (user_data) {
        if (user_data.username === username && user_data.password === password) {
        // succesful login -> route to next page with the username atleast
      } else {
        alert("Username or Password do not match");
      }
    } else {
      alert("That Username Does Not Exist In Our DataBase");
    }
  }
  
  render() {
    return (
      <div className="col-6">
        <form id="loginform" className="bg-light">
          <div id="logintitle"> Login </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input id="loginUser" type="username" class="form-control"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input id="loginPassword" type="password" class="form-control"></input>
            </div>
          </div>
          
          <div class="form-group row">
            <div class="col-sm-10">
              <button onClick={() => this.login()} 
              type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}