import React from 'react';
// no local state required
import './UserModal.scss';

import UserLogin from './UserLogin.js'

function AdminScreen(props) {
    function onModalClick(e){
        if(e.target.classList[0] && e.target.classList[0] === 'modal-container'){
            props.setShowModal(true)
            props.history.push('/')
        }

    }
    return (
            <div onMouseDown={onModalClick} className={`modal-container admin-modal${props.showModal ? ' modal-show' : ''}`}>
                <div className="editModal" >
                    <div className={"editModal-dialog "}> 
                        <UserLogin {...props} setShowModal={props.setShowModal} />
                    </div>
                </div>
            </div>
    );
}

export default AdminScreen;