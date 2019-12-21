import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  
  makeItem = (username, password, name) => {
      return {username: username, password:password, name: name};
  };

  addUser = item => {
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => {
          return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  };

  register = () => {
      const username = document.getElementById("registerUser").value;
      const password = document.getElementById("registerPassword").value;
      const name = document.getElementById("registerName").value;
      if (username.length <= 0 || password.length <= 0 || name.length <= 0) {
        alert("All values must have atleast one character")
      } else {
        const item = this.makeItem(username, password, name);
        const check = this.addUser(item);
        if (check) {
          alert("Registration Succesful! You can now login");
          window.location.reload();
        } else {
          alert("Username has been taken already");
        }
      }
  };
  
  render() {
    return (
        <div className="col-6">
          <form id="loginform" className="bg-light">
            <div id="logintitle"> Register </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input id="registerName" type="username" class="form-control"></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
              <div class="col-sm-10">
                <input id="registerUser" type="username" class="form-control"></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input id="registerPassword" type="password" class="form-control"></input>
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-sm-10">
                <button onClick={() => this.register()} 
                type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}