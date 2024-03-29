import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

import MenuNav from './Menu/MenuNav.js';
import ssLogo from '../../images/ssLogo.png';

function Navbar(props) {
    let [menuOpen, setMenuOpen] = useState(false)

    function handleMenuClick() {
        setMenuOpen(!menuOpen)
    }
    function handleMenuClick() {
        setMenuOpen(false)
    }

    // Nav item list

    let nav_item_list = [
        {name:'Home', link:'/'},
        {name:'Class Registration', link:'/clinics'},
        // {name:'Memberships', link:'/members'},
       
        {name:'Teams', link:'/teams'},
        {name:'Coaches & Lessons', link:'/meetthecoach'},
        // {name:'Q & A', link:'/questions'},
        {name:'Contacts', link:'/contacts'}, 
        
    ]

    return (
        <div className="Navbar">
            <div id="navBarLogo">
            <img src={ssLogo} alt='logo' />
            </div>
            <nav className={'Navbar-items'}>
 
                {nav_item_list.map((item) => {
                    
                    return <NavLink key={item.name} to={item.link}>
                        {item.name}
                    </NavLink>
                })}
            </nav>
            <div className={`menu-div`}>
                <MenuNav {...props} nav_item_list={nav_item_list}/>
            </div>
        </div>
    );
}

export default Navbar;
