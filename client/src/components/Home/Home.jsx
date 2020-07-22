import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron container-home">
        
    
            <div className="row">
              <div className="col-sm-9">
                <h1 className="hero-h1">
                  Teaching assistance for your child. Anywhere. Anytime.
                </h1>
                <p className="lead hero-p">Online learning just got so much easier. Whether you are on the go, unable to commute, TOLC is able to connect your child with certified tutors accross the U.S.</p>
                <Link to="/signup" id="signup">Sign Up</Link>
              </div>
            </div>
 
        </div>
      </div>
    );
  }
}
