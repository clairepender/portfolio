import React from 'react';

const Projects = () => {


    return(
        
        <div className="container">
       
                <div className="project-container">
                    <h5 className="text-center p-3 projects-title">My Projects:</h5>
            
                    <p className="project-image"><img src={require('../images/FitnessTracker_Screenshot.png')} alt="..." 
                    style={{width: 800, height: 500}}
                    /></p>

                </div> 
        </div>
    )
}

export default Projects;