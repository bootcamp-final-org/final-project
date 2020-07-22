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
        console.log(user);
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
                <a className="button profile-button">
                  <Link to="/tutors" id="tutor-list">
                    Edit Profile
                  </Link>
                </a>
                <a className="button profile-button">
                    <Link to="/tutors" id="tutor-list">
                      Chat
                    </Link>
                  </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="page-heading">
                  <h1>Settings</h1>
                </div>
                <div className="eula">
                  <ul className="settings">
                    <li>
                    <a className="settings-li">Billing</a>
                    </li>
                    <li>
                    <a className="settings-li">Support</a>
                    </li>
                    <li>
                    <a className="settings-li">Support</a>
                    </li>
                  </ul>
      
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
                  <h1>Find a Tutor</h1>
                </div>
                <div className="eula">
                
                </div>
                <a className="button profile-button">
                    <Link to="/tutors" id="tutor-list">
                      View All Tutors
                    </Link>
                  </a>
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
  
                  <ul className="upcoming-sesssion">
                    {data.selected_availability.map(date => {
                      return(<li className="session-list-item"><h3>{date.name}</h3><p>{date.time}</p> </li>)
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
