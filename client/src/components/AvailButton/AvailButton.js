import React, { Component } from 'react'
import "./style.css";
import UserContext from '../../userContext'
import Axios from 'axios';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


//make handler for button onclick
//create button to take in props
//render button in tutors.js with values 0, 1

function AvailButton(props) {
    var user = React.useContext(UserContext)
        console.log('this is user in context!', user)

    var selectAvailability = (time,tutorId)  =>{
        console.log('we got clicked!!!!!!', time, tutorId)
        Axios.put(`api/students/${user.studentId}/add-availability`, {time, tutorId})
        .then(result => {
            console.log(result)
            // Axios.put(`api/students/${tutorId}/remove-availability`)
        })

        
    }
  
   
        console.log('Props in avail button!!', props)
        return (
            <div>
                <button className="avail-btn" onClick={ () => {selectAvailability(props.time, props.tutorId)}}> {props.time}</button>
            </div>
        )

}

export default AvailButton;
