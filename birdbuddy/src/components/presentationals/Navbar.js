import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">My Bird Buddy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">Take the Quiz</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bird Profiles</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/profile/cockatiel">Cockatiel</Link>
                            <Link className="dropdown-item" to="/profile/budgie">Budgie</Link>
                            <Link className="dropdown-item" to="/profile/conure">Conure</Link>
                            <Link className="dropdown-item" to="/profile/macaw">Macaw</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;