import React from 'react';

const Projects = () => {


    return(
        
        <div className="container">
       
                <div className="project-container">
                    <h5 className="text-center fw-bolder p-3 projects-title">Solo Projects:</h5>
                        <div className="container-body p-3">
                            <h2>Fitness Tracker</h2>
                            <li> Fullstack application which allows users to track and create their own fitness routines from a list of activities</li>
                            <li>Implemented user features to include control over private and/or public publishing of activity and visibility
                            of public routines</li>
                            <li>Developed independently over the course of 2 weeks</li>
                            <li>Tech stack: PostgreSQL, Express, Node, React</li>
                            <li className="project-link"><a href="https://fitness-tracker-5.herokuapp.com">Check it out!</a></li>
                            <p className="project-image"><img src={require('../images/FitnessTracker_Screenshot.png')} alt="..." 
                            style={{width: 600, height: 400}}
                            /></p>

                            <h2>Snake</h2>
                            <li>A remake of the classic game where users can control the position of the snake to eat randomly-positioned food</li>
                            <li>Designed game experience using Javascript to create a game loop and CSS Grid for positioning of snake
                            and food</li>
                            <li>Game is initiated by pressing any key, and direction of the snake
                            controlled using arrow keys</li>
                            <li>Tech stack: HTML, CSS, CSS Grid, Javascript</li>
                            <li className="project-link"><a href="https://admiring-kowalevski-13ca99.netlify.app">Check it out!</a></li>

                            <p className="project-image"><img src={require('../images/Snake_Screenshot.png')} alt="..." 
                            style={{width: 600, height: 400}}
                            /></p>

                        <h5 className="text-center fw-bolder p-3 projects-title">Group Projects:</h5>
                            <h2>GraceShopper</h2>
                            <h5>An eCommerce site that sells hardcopy movies the old-fashioned way</h5>
                            <h5>Individual contributions to the project included:</h5>
                            <li>Building front-end view of a single product, allowing user to interact with the product, leave
                                reviews or add to their cart</li>
                            <li>Developing front-end and back-end functionality of My Account page, allowing logged-in users to
                                edit their account or contact information, and view previous order history</li>
                            <li>Collaborated with a team of 3 other remote developers in a 5-week agile sprint to build product and key
                                features from the ground up</li>
                            <li>Tech stack: Axios, Express, Postgres, Bootstrap, React</li>
                            <li className="project-link"><a href="https://calm-oasis-12634.herokuapp.com">Check it out!</a></li>

                            <p className="project-image"><img src={require('../images/GraceShopper_Screenshot.png')} alt="..." 
                            style={{width: 600, height: 400}}
                            /></p>
                             
                        </div>
                </div> 
        </div>
    )
}

export default Projects;