import React from 'react';
import { useState } from 'react';
import './Modal.scss';

// import { useForm } from "react-hook-form"
import General from '../Sections/General.js'
import Clinics from '../Modals/ClinicsModal.js'
import Ads from '../Modals/AdsModal.js'
import Registation from '../Modals/RegistrationModal.js'

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
                        {props.dataName === 'Clinics' ? <Clinics  submitAllSectionsData={props.submitAllSectionsData} preFill={props.preFill} tabName="Clinics" cards={props.allSections.Clinics} setShowModal={props.setShowModal} />:<></>}
                        {props.dataName === 'Teams' ? <Clinics  submitAllSectionsData={props.submitAllSectionsData} preFill={props.preFill} tabName="Teams" cards={props.allSections.Teams} setShowModal={props.setShowModal} />:<></>}
                        {props.dataName === 'ClassRegistration' ? <Registation  submitAllSectionsData={props.submitAllSectionsData} preFill={props.preFill} tabName="ClassRegistration" cards={props.allSections.ClassRegistration} setShowModal={props.setShowModal} />:<></>}
                        {props.dataName === 'Ads' ? <Ads  submitAllSectionsData={props.submitAllSectionsData} preFill={props.preFill} tabName="Ads" cards={props.allSections.Ads} setShowModal={props.setShowModal} />:<></>}
                    </div>
                </div>
            </div>
    );
}

export default AdminScreen;