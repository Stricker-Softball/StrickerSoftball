import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className={'Navbar-items'}>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/softballlessons'>
                    Softball Lessons
                </NavLink>
                <NavLink to='/wphg'>
                    Weekly Power Hitting Groups
                </NavLink>
                <NavLink to='/bookonline'>
                    Book Online
                </NavLink>
                <NavLink to='/meetthecoaches'>
                    Meet The Coaches
                </NavLink>
                <NavLink to='/coach2coach'>
                    Coach 2 Coach
                </NavLink>
            </nav>

        </div>
    );
}

export default Navbar;