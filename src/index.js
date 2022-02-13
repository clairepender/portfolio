import React from 'react';
import ReactDOM from 'react-dom';
// import collage from './images/grey_collage.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Home, TechStack, Personal, Contact } from './components/comp_index';


const App = () => {

    return(
        <>
        <Router>
        
            <div className="container">
            <img src={require('./images/chilecrop.jpg')} className="thumbnail rounded-circle" alt="..." />
        {/* <img src={require('./images/chilecrop.jpg')} className="thumbnail rounded-circle" alt="..." /> */}
                {/* <div className="intro text-center position-absolute top-0 start-50 p-5 translate-middle"> */}
                    {/* <h1 className="font-assistant-title">Hey, I'm Claire</h1> */}
                       
                {/* </div> */}

                <NavBar />
                </div> 
           

        <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
        
        <Route path="/techstack" render={(routeProps) => <TechStack {...routeProps} />} />
        <Route path="/personal" render={(routeProps) => <Personal {...routeProps} />} />
        <Route path="/contact" render={(routeProps) => <Contact {...routeProps} />} />

        </Router>
        </>

    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);