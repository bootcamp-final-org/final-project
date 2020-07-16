import React, { Component } from 'react'


export default class Dashboard extends Component {
    

    render() {
        return (
            <div>
                <div className="page-heading">
                <h1>Welcome, firstName</h1>
                <h2>Let's finish setting up your profile.</h2>
                </div>
                <main>
                <div class="dashboard-container">
                    <div class="card-1">
                        <h3 class="chart-lbl">
                            Upcoming Session:
                        </h3>
                        <div class="divider">
                        </div>
                        <div class="content-center">
                            <div class="doughnut-chart-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-2">
                        <h4 class="chart-lbl">
                        Block 2
                        </h4>
                        <div class="divider">
                        </div>
                        <div class="content-center">
                            <div class="pie-chart-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-3">
                        <h4 class="chart-lbl">
                        Block 3
                        </h4>
                        <div class="divider">
                        </div>
                        <div class="content-center">
                            <div class="polar-chart-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-4">
                        <h4 class="chart-lbl">
                        Block 4
                        </h4>
                        <div class="divider">
                        </div>
                        <div class="line-chart-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div class="card-5">
                        <h4 class="chart-lbl">
                        Block 5
                        </h4>
                        <div class="divider">
                        </div>
                        <div class="bar-chart-container">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        )
    }
}