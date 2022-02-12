import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
<>


<nav class="navbar-text nav flex-column">
    <Link className="nav-link active" to="/home">home</Link>
    <Link className="nav-link" to="/techstack">tech</Link>
    <Link className="nav-link" to="/personal">personal stack</Link>
    <Link className="nav-link" to="/contact">contact me</Link>
</nav>

       
</>      
    )
}

export default NavBar