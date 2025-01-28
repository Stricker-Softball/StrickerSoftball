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
        url:props.preFill.url, 
        name:props.preFill.name,
        file:props.preFill.file,
        id:props.preFill.id
    })

    function checkUrlValue(url){
        let urlArray = url.split('/')
        if(urlArray[0] == 'https:' && urlArray[urlArray.length-1] == 'view'){
            return true;
        }else{
            setInput({url:'',file:'',name:inputObj.name,id:inputObj.id})
            alert('URL is in the wrong format! Canceling...')
            return false
        }
    
    }

    const handleSubmit = (e) => {
        let formData = new FormData(e.target)
        for (const pair of formData.entries()) {
            if(pair[0] != "listPos"){
                if(pair[0] == 'url'){
                    let value = pair[1].split('?')[0]
                    let passCheck = checkUrlValue(value)
                    if(!passCheck){
                        return false;
                        break;
                    }
                   
                }
                
            }
        }
        if(helpOpen)setHelp(!helpOpen)
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
                <form id="stationsModalForm" onSubmit={handleSubmit} data-id={inputObj.id}>
                    <div className="formGroup preveiewGroup">
                        {/* <img className="preveiwImage" src={fileImg} /> */}
                        {/* <iframe style={{background:'#000000', maxWidth: '300px', maxHeight:"150px", margin:'0 auto'}} frameBorder="0" navpanes="0" scrolling="no" toolbar="0" allowtransparency="true" src={inputObj.file} ></iframe> */}
                    </div>
                     <div className="formGroup">
                        <label>Name (optional)</label>
                        <input defaultValue={inputObj.name}  name="name" data-name="name" />
                    </div>
                    <div className="formGroup">
                        <label>Url<button onClick={handleHelp} className="adminFormButton admin-modal-action">what url (help)?</button></label>
                        <input id="stationsUrl" defaultValue={inputObj.url} data-name="url" name="url" />
                    </div>
                    {/* help with url section  */}
                    <div id="adminUrlHelp" className={helpOpen?'adminHelpContainer':'adminHelpContainer hide'}>
                        <p>1. Download Your PDF</p>
                        <p>2. Add Your PDF file to <a href="https://drive.google.com/drive/u/0/home">Google Drive</a></p>
                        <p>3. Right Click the File in Google drive</p>
                        <img src={step3Img} />
                        <p>4. Click the "Share" button in the menu, another "Share" button should pop up, click that as well</p>
                        <img src={step4Img} />
                        <p>5. A window should pop up. In that window, Change "General Access" to  "Anyone with the link"</p>
                        <img src={step5Img} />
                        <p>6. Click "Copy Link" </p>
                        <img src={step6Img} />
                        <p>7. Paste the copied link into the URL input above! - You did it! Great Job!! Your a rockstar!!!
                        </p>
                        <button onClick={handleHelp} className="adminFormButton admin-modal-action">Close these instructions</button>
                        
                        {/* <p>Click "what url (help)?" to close these instructions.</p> */}
                    </div>
                    {/* <div className={`formGroup${inputObj.id != -1?' hide-form-group':''}`}>
                        <label>Add new item to start or end of the current list?</label>
                        <div className="radio-parent">
                            <div className="radio-group">
                                <input value="end" type="radio"  name="listPos" data-name="listPos" checked/>
                                <label>End</label>
                            </div>
                            <div className="radio-group">
                            <input value="start" type="radio"  name="listPos" data-name="listPos" />
                                <label>Start</label>
                            </div>
                        </div>
                    </div> */}
                    <div className="modal-footer">
                        <button type="submit" className="adminFormButton">Save changes</button>
                        <button onClick={handleCancel} className="adminFormButton">Cancel</button>
                    </div>
                </form>
            </div>
    );
}

export default AdminScreen;
