import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

import MenuNav from './Menu/MenuNav.js';

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
        {name:'Events', link:'/events'},
        {name:'Softball Lessons', link:'/lessons'},
        {name:'Meet The Coaches', link:'/meetthecoach'},
        {name:'Contacts', link:'/contacts'}
    ]

    return (
        <div className="Navbar">
            <nav className={'Navbar-items'}>
 
                {nav_item_list.map((item) => {
                    
                    return <NavLink to={item.link}>
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