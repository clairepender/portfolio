import React from 'react';
// import chilecrop from '.images/chilecrop.jpg'
// import { Link } from 'react-router-dom';

const Welcome = () => {


    return(
      <div className="container">

         <img src={require('../images/rose.jpg')} className="thumbnail rounded-circle" alt="..." />

         <h1 className="font-assistant-title"></h1>
    </div>
    )
}

export default Welcome;