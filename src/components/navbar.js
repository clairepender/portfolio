import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
<>
        <div className="text-center font-assistant">
            
            

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/home">home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/techstack">tech stack</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/personal">personal stack</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">contact me</Link>
            </li>
            </ul>

        </div>
</>      
    )
}

export default NavBar