import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Register extends Component {

  makeItem = (un, pwd, nm) => {
      return {"username": un, "password": pwd, "name": nm};
  };

  addUser = () => {
    const username = document.getElementById("registerUser").value;
    const password = document.getElementById("registerPassword").value;
    const name = document.getElementById("registerName").value;

    if (username.length <= 0 || password.length <= 0 || name.length <= 0) {
      alert("All values must have atleast one character");
    } else {
      const item = this.makeItem(username, password, name);
      // axios
      //   .post("http://localhost:8000/api/todos/", item)
      //   .then(res => this.register(res))
      //   .catch(err => console.log(err));
      fetch('http://localhost:8000/api/todos/', {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json', },
        body: item,
        }).then(result => this.register(result))
          .then(data => this.register(data))
          .catch(error => console.log('error============:', error));
    }
  };

  register = res => {
      console.log(res.toString());
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
              <button onClick={() => this.addUser()} 
              type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

          <Link to="/">Already have an account? Click here to return to the start page!</Link>
        </form>
    );
  }
}