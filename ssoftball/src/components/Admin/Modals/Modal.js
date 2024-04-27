import React from 'react';
import { useState } from 'react';
import './Modal.scss';

// import { useForm } from "react-hook-form"
import General from '../Sections/General.js'
import Clinics from '../Modals/ClinicsModal.js'

function AdminScreen(props) {
    function onModalClick(e){
        if(e.target.classList[0] && e.target.classList[0] == 'modal-container'){
            props.setShowModal()
        }

    }
    return (
            <div onMouseDown={onModalClick} className={"modal-container" + `${props.showModal?' modal-show':''}`}>
                <div class="editModal" >
                    <div class={"editModal-dialog selected-" + props.dataName}>
                        {props.dataName === 'general' ? <General />:<></>}
                        {props.dataName === 'clinics' ? <Clinics  submitAllSectionsData={props.submitAllSectionsData} preFill={props.preFill} tabName="Clinics" cards={props.allSections.clinics} setShowModal={props.setShowModal} />:<></>}
                    </div>
                </div>
            </div>
    );
}

export default AdminScreen;