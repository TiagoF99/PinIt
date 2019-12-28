import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Register extends Component {

  makeItem = (username, password, name) => {
      return {'username': username, 'password':password, 'name': name};
  };

  addUser = item => {
    axios
      .post("http://localhost:8000/api/todos/", JSON.stringify(item))
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
        console.log(item);
        const check = this.addUser(item);
        if (check) {
          alert("Registration Succesful! You can now login");
        } else {
          console.log("error");
        }
      }
  };
  
  render() {
    return (
        <form id="loginform" className="bg-light">
          <div id="logintitle"> Register </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input id="registerName" type="username" className="form-control"></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input id="registerUser" type="username" className="form-control"></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input id="registerPassword" type="password" className="form-control"></input>
            </div>
          </div>
          
          <div className="form-group row">
            <div className="col-sm-10">
              <button onClick={() => this.register()} 
              type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

          <Link to="/">Already have an account? Click here to return to the start page!</Link>
        </form>
    );
  }
}