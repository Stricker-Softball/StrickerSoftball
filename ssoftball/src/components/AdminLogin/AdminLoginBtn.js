import React from 'react';
import './AdminModal.scss';

import { useState } from 'react';
// import './Footer.scss';
//630 3361553
//sftbllcoach@gmail.com
import Modal from './AdminModal.js';
function AdminLoginBtn(props) {

    const [modalOn, setModalOn]= useState(false)
    function setShowModal(){
        let hasLoggedSession = sessionStorage.getItem("hasLoggedIn");
        if(hasLoggedSession && hasLoggedSession === "True"){
            buttonPress('/admin/events/edit')
        }else{
          setModalOn(!modalOn)  
        }
        
    }
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }

    return (<>
        <div id="adminButtonSection" onClick={() => setShowModal()}>
                Admin Log in
            </div>
            <Modal {...props} showModal={modalOn} setShowModal={setShowModal}/>
            </>
    );
}

export default AdminLoginBtn;