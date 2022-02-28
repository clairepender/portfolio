import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Home, Tech, Projects, About, Contact } from './components/comp_index';


const App = () => {

    return(
        <>
        
        
        <Router>
        

        <NavBar />
               
           
        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
        <Route path="/home" render={(routeProps) => <Home {...routeProps} />} />
        <Route path="/tech" render={(routeProps) => <Tech {...routeProps} />} />
        <Route path="/projects" render={(routeProps) => <Projects {...routeProps} />} />
        <Route path="/about" render={(routeProps) => <About {...routeProps} />} />
        {/* <Route path="/contact" render={(routeProps) => <Contact {...routeProps} />} /> */}

        </Router>

        <h5 className="portfolio-version">made with love and coffee - V 1.0</h5>
        </>

    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);