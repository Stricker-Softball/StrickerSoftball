import React from 'react';
import { useState } from 'react';

// import { useForm } from "react-hook-form"
import General from '../Sections/General.js'
import Clinics from '../Modals/ClinicsModal.js'

function AdminScreen(props) {
    const [showModal, setModal] = useState(false);
    function onModalClick(e){
        if(e.target.classList[0] && e.target.classList[0] == 'editModal'){
            props.setShowModal()
        }

    }
    console.log('dataname:', props.dataName, props.dataName.length, props.dataName === 'Clinics')
    return (
            <div>
                <h6>Edit Sections</h6>
                <div class="editModal" onMouseDown={onModalClick}>
                    <div class={"editModal-dialog selected-" + props.dataName}>
                        {props.dataName === 'general' ? <General />:<></>}
                        {props.dataName === 'Clinics' ? <Clinics preFill={props.preFill} tabName="Clinics" cards={props.allSections.clinics} setShowModal={props.setShowModal} />:<></>}
                    </div>
                </div>
            </div>
    );
}

export default AdminScreen;