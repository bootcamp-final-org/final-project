import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from "react-router-dom";


export default class Dashboard extends Component {

    state = {
        user: {},
        error: "",
      };

     componentDidMount() {
         Axios.get(`/api/students/${this.props.match.params.id}`)
         .then(user => {
                 this.setState({user})
         })
         .catch(error => {
             console.log(error);
         })
     } 
    
    render() {
        const{data} = this.state.user;
        if(!data) {
            return <h1>...loading</h1>
        }
        return (
            <div>
                <div className="page-heading">
                <h1>Welcome, {data.firstName} </h1>
                <h2>Let's finish setting up your profile.</h2>
                </div>
                <main>
                <div className="dashboard-container">
                    <div className="card-1">
                        <h3 className="chart-lbl">
                            Upcoming Session:
                        </h3>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="doughnut-chart-container">
                            <button><Link to="/tutors" id="tutor-list">Find a Tutor</Link></button>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <h4 className="chart-lbl">
                        Block 2
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="pie-chart-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-3">
                        <h4 className="chart-lbl">
                        Block 3
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="content-center">
                            <div className="polar-chart-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-4">
                        <h4 className="chart-lbl">
                        Block 4
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="line-chart-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="card-5">
                        <h4 className="chart-lbl">
                        Block 5
                        </h4>
                        <div className="divider">
                        </div>
                        <div className="bar-chart-container">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        )
    }
}

