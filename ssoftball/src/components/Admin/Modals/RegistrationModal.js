import React from 'react';
import { useState, useEffect } from 'react';

// import { useForm } from "react-hook-form"
import step3Img from '../../../images/helpers/step3.png';
import step4Img from '../../../images/helpers/step4.png';
import step5Img from '../../../images/helpers/step5.png';
import step6Img from '../../../images/helpers/step6.png';



function AdminScreen(props) {
    // console.log('cmodal',props.preill)
    // return <></>
    let [helpOpen, setHelp] = useState(false);
    let [inputObj, setInput] = useState({
        description:props.preFill.description, 
        buttons:[{link:props.preFill.buttons[0].link,name:props.preFill.buttons[0].name}],
        id:props.preFill.id
    })

    function checkUrlValue(url){
        // let urlArray = url.split('/')
        // if(urlArray[0] == 'https:' && urlArray[urlArray.length-1] == 'view'){
        //     return true;
        // }else{
        //     setInput({url:'',file:'',name:inputObj.name,id:inputObj.id})
        //     alert('URL is in the wrong format! Canceling...')
        //     return false
        // }
        return true
    
    }

    const handleSubmit = (e) => {
        let formData = new FormData(e.target)
        for (const pair of formData.entries()) {
        }
        props.submitAllSectionsData(e)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        if(helpOpen)setHelp(!helpOpen)
        props.setShowModal()
    }
    const handleHelp = (e) => {
        e.preventDefault()
        setHelp(!helpOpen)
    }
    if(inputObj.id != props.preFill.id) setInput(props.preFill)
    // console.log(inputObj)
    return (    
            <div className='modal-section clinics-modal'>
                <button onClick={handleCancel} className="adminFormButton modalCloseBtn">Close</button>
                <form id="clinicsModalForm" onSubmit={handleSubmit} data-id={inputObj.id}>
                    <div className="formGroup preveiewGroup">
                        {/* <img className="preveiwImage" src={fileImg} /> */}
                        {/* <iframe style={{background:'#000000', maxWidth: '300px', maxHeight:"150px", margin:'0 auto'}} frameBorder="0" navpanes="0" scrolling="no" toolbar="0" allowtransparency="true" src={inputObj.file} ></iframe> */}
                    </div>
                     <div className="formGroup">
                        <label>Title (optional)</label>
                        <input defaultValue={inputObj.description}  name="description" data-name="description" />
                    </div>
                    <div className="formGroup">
                        <label>Button Label</label>
                        <input defaultValue={inputObj.buttons[0].name}  name="name" data-name="name" />
                    </div>
                    <div className="formGroup">
                        <label>Button Link</label>
                        <input defaultValue={inputObj.buttons[0].link}  name="link" data-name="link" />
                    </div>
                    
                    <div className="modal-footer">
                        <button type="submit" className="adminFormButton">Save changes</button>
                        <button onClick={handleCancel} className="adminFormButton">Cancel</button>
                    </div>
                </form>
            </div>
    );
}

export default AdminScreen;
