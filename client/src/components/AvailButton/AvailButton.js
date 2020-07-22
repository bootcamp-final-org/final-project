import React, { Component } from 'react'
import "./style.css";
import UserContext from '../../userContext'
import Axios from 'axios'
import { Redirect } from "react-router-dom"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


//make handler for button onclick
//create button to take in props
//render button in tutors.js with values 0, 1

function AvailButton(props) {

    function display(){
        alert("You are scheduled for: " + props.time)
    };

    var user = React.useContext(UserContext)
        // console.log('this is user in context!', user)

    var selectAvailability = (time,tutorId)  =>{
        console.log(user)
        Axios.put(`api/students/${user.studentId}/add-availability`, {time, tutorId})
        .then(result => {
            console.log(result)
            if (result.data.nModified > 0){
                Axios.put(`api/tutors/${tutorId}/remove-availability`, {time});
                alert(time)
            }
        })

        
    }
  
   
        console.log('Props in avail button!!', props)
        return (
            <div>
                <button className="avail-btn" onClick={ () => {selectAvailability(props.time, props.tutorId)}}> {props.time} </button>
            </div>
        )

}

export default AvailButton;
