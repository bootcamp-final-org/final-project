import React, { useState } from 'react'
import "./style.css";
import UserContext from '../../userContext'
import Axios from 'axios'
import { Redirect } from "react-router-dom";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


//make handler for button onclick
//create button to take in props
//render button in tutors.js with values 0, 1

function AvailButton(props) {
    const [isRedirect, setIsRedirect] = useState(false);
    // function display(){
    //     alert("You are scheduled for: " + props.time)
    // };

    var user = React.useContext(UserContext)
        // console.log('this is user in context!', user)

    var selectAvailability = (time,tutorId,tutorName)  =>{
        console.log(user, tutorName, time)
        Axios.put(`api/students/${user.studentId}/add-availability`, {time, tutorId, tutorName})
        .then(result => {
            console.log(result.data.nModified)
            if (result.data.nModified > 0){
                Axios.put(`api/tutors/${tutorId}/remove-availability`, {time}).then( res => {
                    console.log(res);
                    if (result.data.nModified > 0){
                    alert("You are now scheduled with " + tutorName + " at " + time)
                    setIsRedirect(true)
                    }
                });
               
                // props.history.push(`/dashboard/${user.studentId}`)
            }
        })

        
    }
  
   
        console.log('Props in avail button!!', props)
        if (isRedirect){
            return <Redirect to={`/dashboard/${user.studentId}`} />
        }
        return (
            <div>
                <button className="avail-btn" onClick={ () => {selectAvailability(props.time, props.tutorId, props.tutorName)}}> {props.time} </button>
            </div>
        )

}

export default AvailButton;
