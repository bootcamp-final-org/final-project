import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container container-home">
          <main className="hero-content">
            <div className="row">
              <div className="col-sm-9">
                <h1 className="hero-h1">
                  Teaching assistance for your child. Anywhere. Anytime.
                </h1>
                <p className="hero-p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, exercitationem vitae sequi error repudiandae quasi
                  necessitatibus illum. Hic, asperiores totam amet mollitia in
                  repudiandae eligendi ipsum non. Est, veritatis, saepe!
                </p>
                <Link to="/signup" id="signup">Sign Up</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
