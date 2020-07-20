import React, { Component } from 'react'
import "./style.css";
import UserContext from '../../userContext'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


//make handler for button onclick
//create button to take in props
//render button in tutors.js with values 0, 1

function AvailButton(props) {
    var user = React.useContext(UserContext)
        console.log('this is user in context!1', user)

    var selectAvailability = (time,tutorName)  =>{
        console.log('we got clciked!!!!!!', time, tutorName, user)

        
    }
  
   

        console.log('PRops in avail button!!', props)
        return (
            <div>
                <button className="avail-btn" onClick={ () => {selectAvailability(props.time, props.tutorName)}}> {props.time}</button>
            </div>
        )

}

export default AvailButton;
