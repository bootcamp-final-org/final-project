import React, { Component } from "react";
import Axios from "axios";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import AvailButton from "../components/AvailButton/AvailButton.js";

export default class Tutors extends Component {
  state = {
    tutors: [],
    name: "",
    main_subject: "",
    availability: [],
  };

  componentDidMount() {
    this.loadTutors();
  }

  loadTutors = () => {
    API.getTutors()
      .then((res) =>
        this.setState({
          tutors: res.data,
          name: "",
          main_subject: "",
          availability: [],
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    console.log("this is our state in tutors", this.state);
    return (

      <div>
        <div className="container">
        <div className="row">
          <div className="col-lg-4">
        <h1 className="page-title">List of Tutors</h1>
        </div>
        
          {this.state.tutors.length ? (
             <ul className="tutor-list">
            <li className="tutor-block">
              {this.state.tutors.map((tutor) => (
                <div className="col-md-8 tutor-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="tutor-name-block">
                        {/* <Link to={"/tutors/" + tutor._id}> */}
                        <h3> {tutor.name}</h3>
                        <h5> Subject: {tutor.main_subject}</h5>
                        {/* </Link> */}
                      </div>
                      <div className="avail-buttons-block">
                        {tutor.availability.map((availTime) => {
                          return (
                            <AvailButton
                              tutorName={tutor.name}
                              time={availTime}
                              tutorId={tutor._id} history={this.props.history}
                            ></AvailButton>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </li>
            </ul>
          ) : (
            <h3>No Results to Display</h3>
          )}
      
        </div>
        </div>
        </div>
    );
  }
}
