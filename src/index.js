import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Home, Tech, About, Contact } from './components/comp_index';


const App = () => {

    return(
        <>
        <Router>
        
            <img src={require('./images/chilecrop.jpg')} className="thumbnail rounded-circle" alt="..." />

        {/* <img src={require('./images/chilecrop.jpg')} className="thumbnail rounded-circle" alt="..." /> */}
                {/* <div className="intro text-center position-absolute top-0 start-50 p-5 translate-middle"> */}
                    {/* <h1 className="font-assistant-title">Hey, I'm Claire</h1> */}
                       
                {/* </div> */}

                <NavBar />
               
           
        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
        <Route path="/home" render={(routeProps) => <Home {...routeProps} />} />
        
        <Route path="/tech" render={(routeProps) => <Tech {...routeProps} />} />
        <Route path="/about" render={(routeProps) => <About {...routeProps} />} />
        <Route path="/contact" render={(routeProps) => <Contact {...routeProps} />} />

        </Router>
        </>

    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);