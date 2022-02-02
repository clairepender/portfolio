import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Home } from './components/comp_index';


const App = () => {

    return(
        <>
        <Router>
            <div className="font-assistant">
            <img src={require('./images/chilecrop.jpg')} className="thumbnail rounded-circle" alt="..." />
                <div className="text-center m-5"><h1>Hey, I'm Claire!</h1></div>
                <NavBar />
            </div>

        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />



        </Router>
        </>

    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);