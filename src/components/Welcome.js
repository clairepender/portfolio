import React from 'react';
// import chilecrop from '.images/chilecrop.jpg'
// import { Link } from 'react-router-dom';

const Welcome = () => {


    return(
      <div className="container">

         <img src={require('../images/rose.jpg')} className="thumbnail rounded-circle" alt="..." />
         <div className="intro">
            <h4 className="intro-text">hey, my name is</h4>
            <h4 className="intro-name-title">Claire Pender</h4>
         </div>
    </div>
    )
}

export default Welcome;