import React from 'react';

const Projects = () => {


    return(
        
        <div className="container">
       
                <div className="project-container">
                    <h5 className="text-center p-3 projects-title">My Projects:</h5>
                        <div className="container-body p-3">
                            <h2>Fitness Tracker</h2>
                            <h5>info here</h5>
                            <h5>link here</h5>
                            <p className="project-image"><img src={require('../images/FitnessTracker_Screenshot.png')} alt="..." 
                            style={{width: 600, height: 400}}
                            /></p>
                        </div>
                </div> 
        </div>
    )
}

export default Projects;