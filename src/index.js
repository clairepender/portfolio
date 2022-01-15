import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/comp_index';


const App = () => {

    return(
        <>

        <h3>hello from the app component</h3>
        <NavBar />
    
        </>
    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);