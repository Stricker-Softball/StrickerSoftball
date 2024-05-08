import React from 'react';
import { useState, useEffect } from 'react';

function AdminScreen(props) {
    let defaultPassword = 'sftbllscnc'
    let [inputObj, setInput] = useState({
        password:''
    })

    const handleSubmit = (e) => {
        let formData = new FormData(e.target)

        for (const pair of formData.entries()) {
            if(pair[0] == 'password') {
                if(pair[1] == defaultPassword){
                    sessionStorage.setItem("hasLoggedIn", 'True')
                    buttonPress('/admin/events/edit')
                }else{
                    alert('Incorrect password, try again later')
                }
            }
        }
    }
    const handleCancel = (e) => {
        e.preventDefault()
        props.setShowModal()
    }
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }
    return (    
            <div className='modal-section clinics-modal'>
                {/* <button onClick={handleCancel} className="adminFormButton modalCloseBtn">Close</button> */}
                <form id="clinicsModalForm" onSubmit={handleSubmit} >
                    <div className="formGroup">
                        <label>Admin Password</label>
                        <input type="password" name="password" data-name="password" />
                    </div>
                    
                    <div className="modal-footer">
                        <button type="submit" className="adminFormButton">Login</button>
                        <button onClick={handleCancel} className="adminFormButton">Cancel</button>
                    </div>
                </form>
            </div>
    );
}

export default AdminScreen;