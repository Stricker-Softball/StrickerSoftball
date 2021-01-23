import React, {useState} from 'react';
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

    let nav_item_list = [
        {name:'Home', link:'/'},
        // {name:'Events', link:'/events'},
        {name:'Softball Lessons', link:'/lessons'},
        {name:'Meet The Coaches', link:'/meetthecoach'},
        {name:'Contacts', link:'/contacts'}
    ]

    return (
        <div className="Navbar">
            <nav className={'Navbar-items'}>
 
                {nav_item_list.map((item) => {
                    if (item.name === "Events"){
                        return <NavLink className='events' to={item.link}>
                            {item.name} <span>V</span>
                        </NavLink>
                    }
                    return <NavLink to={item.link}>
                        {item.name}
                    </NavLink>
                })}
            </nav>
            <div className='menu-div'>
                <MenuNav {...props}/>
            </div>
        </div>
    );
}

export default Navbar;