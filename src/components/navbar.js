import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
<>


<nav class="nav">
    
    
    <Link className="nav-link" to="/personal">about</Link>
    <Link className="nav-link" to="/techstack">tech</Link>
    <Link className="nav-link" to="/contact">contact me</Link>
</nav>

       
</>      
    )
}

export default NavBar