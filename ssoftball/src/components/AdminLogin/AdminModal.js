import React from 'react';
import { useState } from 'react';
import './AdminModal.scss';

import AdminLogin from './AdminLogin.js'

function AdminScreen(props) {
    function onModalClick(e){
        if(e.target.classList[0] && e.target.classList[0] == 'modal-container'){
            props.setShowModal()
        }

    }
    return (
            <div onMouseDown={onModalClick} className={"modal-container admin-modal" + `${props.showModal?' modal-show':''}`}>
                <div class="editModal" >
                    <div class={"editModal-dialog "}>
                        <AdminLogin {...props} setShowModal={props.setShowModal} />
                    </div>
                </div>
            </div>
    );
}

export default AdminScreen;