import React, { Component } from 'react'
import Axios from 'axios';
import API from '../utils/API'
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import AvailButton from '../components/AvailButton/AvailButton.js';


export default class Tutors extends Component {
    state = {
        tutors:[],
        name:"",
        main_subject: "",
        availability:[]
      };

     componentDidMount() {
       this.loadTutors()
     } 


     loadTutors = () => {
        API.getTutors()
          .then(res =>
            this.setState({ tutors: res.data, name: "", main_subject: "", availability:[] })
          )
          .catch(err => console.log(err));
      };
     
    

    render() {
        console.log("this is our state in tutors",this.state)
        return (

            <Col size="md-6 sm-12">
            <Jumbotron>
            <h1>List of Tutors</h1>
            </Jumbotron>
            {this.state.tutors.length ? (
              <List>
                {this.state.tutors.map(tutor => (
                  <ListItem key={tutor._id}>
                    <Link to={"/tutors/" + tutor._id}>
                      <strong>
                        {tutor.name} | {tutor.main_subject}
                      </strong>
                    </Link>
                    {tutor.availability.map((availTime)=> {
                        return (
                            <AvailButton tutorName={tutor.name} time={availTime} tutorId={tutor._id}></AvailButton>
                        )
                    })}
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        )
    }
}
