import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

import MenuNav from './Menu/MenuNav.js';
import ssLogo from '../../images/ssLogo.png';
import Modal from '../UserLogin/UserModal.js';

function Navbar(props) {
    // menuOpen state not used here

    // Nav item list

    let nav_item_list = [
        {name:'Home', link:'/'},
        {name:'Classes', link:'/classes'},
        {name:'Registration', link:'/register'},
        // {name:'Memberships', link:'/members'},
        {name:'Teams', link:'/teams'},
        {name:'Coaches & Lessons', link:'/meetthecoach'},
        {name:'Stations', link:'/stations'},
        // {name:'Q & A', link:'/questions'},
        {name:'Contacts', link:'/contacts'}, 
    ]
    // nav conditionals
    if(!props.sectionList.Clinics || props.sectionList.Clinics.length === 0){
        let navIndex = nav_item_list.findIndex(obj => obj.name === 'Classes')
        nav_item_list.splice(navIndex, 1)
    }
    if(!props.sectionList.ClassRegistration || props.sectionList.ClassRegistration.length === 0){
        let navIndex = nav_item_list.findIndex(obj => obj.name === 'Registration')
        nav_item_list.splice(navIndex, 1)
    }
    if(!props.sectionList.Teams || props.sectionList.Teams.length === 0){
        let navIndex = nav_item_list.findIndex(obj => obj.name === 'Teams')
        nav_item_list.splice(navIndex, 1)
    }
    function handleMenuClick(e) {
        if(e.target.dataset.key === 'Stations'){
            props.setShowModal()
        }
    }

    return (
        <>
        <div className="Navbar">
            
            <nav className={'Navbar-items'}>
            <div id="navBarLogo">
                <img src={ssLogo} alt='logo' />
            </div>
                {nav_item_list.map((item) => {
                    let isCurrentNav = item.link === window.location.pathname
                    return <NavLink key={item.name} data-key={item.name} onClick={handleMenuClick} to={item.link} className={`bar-nav-item${isCurrentNav?' bar-nav-current':''}`}>
                        <span>{item.name}</span>
                    </NavLink>
                })}
            </nav>
            <div className={`menu-div`}>
                <MenuNav {...props} nav_item_list={nav_item_list}/>
            </div>
        </div>
    <Modal {...props} showModal={props.modalOn} setShowModal={props.setShowModal}/>
    </>);
}

export default Navbar;
