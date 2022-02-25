import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
<>


<nav class="nav flex-column">
    
    <Link className="nav-link" to="/home">home</Link>
    <Link className="nav-link" to="/about">about</Link>
    <Link className="nav-link" to="/tech">tech</Link>
    <Link className="nav-link" to="/projects">projects</Link>
    {/* <Link className="nav-link" to="/contact">contact me</Link> */}
</nav>

       
</>      
    )
}

export default NavBar