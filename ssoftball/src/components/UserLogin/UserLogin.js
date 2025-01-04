import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function AdminScreen(props) {
    let defaultPassword = 'ss2025'
    let [inputObj, setInput] = useState({
        password:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        for (const pair of formData.entries()) {
            if(pair[0] == 'password') {
                if(pair[1] == defaultPassword){
                    sessionStorage.setItem("hasUserLoggedIn", 'True')
                    props.setShowModal(true)
                }else{
                    alert('Incorrect password, try again later')
                }
            }
        }
    }
    const handleCancel = (e) => {
        e.preventDefault()
        props.setShowModal(true)
        props.history.push('/')
    }
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }
    return (    
            <div className='modal-section clinics-modal'>
                {/* <button onClick={handleCancel} className="adminFormButton modalCloseBtn">Close</button> */}
                <form id="userLoginModalForm" onSubmit={handleSubmit} >
                    <div className="formGroup">
                    <FontAwesomeIcon icon={faLock} className="modal-icon"/>
                        <label>
                            Enter a Code to view this page - ( Ask a coach )</label>
                        <input type="password" name="password" data-name="password" />
                    </div>
                    
                    <div className="modal-footer">
                        
                        <button onClick={handleCancel} className="adminFormButton">Cancel</button>
                        <button type="submit" className="adminFormButton submitButton">Enter</button>
                    </div>
                </form>
            </div>
    );
}

export default AdminScreen;