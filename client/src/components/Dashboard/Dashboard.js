import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../Auth/styles.css";

export default class Dashboard extends Component {
  state = {
    user: {},
    error: "",
  };

  componentDidMount() {
    Axios.get(`/api/students/${this.props.match.params.id}`)
      .then((user) => {
        this.setState({ user });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state.user;
    if (!data) {
      return <h1>...loading</h1>;
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="page-heading">
                  <h1>Welcome, {data.firstName} </h1>
                </div>
                <div className="eula">
                  <p>Let's finish setting up your profile.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="page-heading">
                  <h1>Find a Tutor</h1>
                </div>
                <div className="eula">
                  <button className="button">
                    <Link to="/tutors" id="tutor-list">
                      Find a Tutor
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="page-heading">
                  <h1>Message your Tutor</h1>
                </div>
                <div className="eula">
                  <button className="button">
                    <Link to="/tutors" id="tutor-list">
                      Find a Tutor
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="page-heading">
                  <h1>Upcomming Sessions</h1>
                </div>
                <div className="eula">
                  <p>List goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
