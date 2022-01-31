import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
<>
        <div className="text-center font-assistant">
            
            

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/">home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">tech stack</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">personal stack</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">contact me</Link>
            </li>
            </ul>

        </div>
</>      
    )
}

export default NavBar