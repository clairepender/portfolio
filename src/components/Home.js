import React from 'react';
// import chilecrop from '.images/chilecrop.jpg'
// import { Link } from 'react-router-dom';

const Home = () => {


    return(
      <div className="container">
          <div className="card bg-muted text-dark position-absolute top-50 start-50 translate-middle font-assistant w-75">
                
                    <div className="card-body bg-muted text-dark">
                        <h5 className="card-title text-center">I'm a fullstack web developer.</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     
                    </div>
        
                
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>

        </div>

   
    </div>
    )
}

export default Home;