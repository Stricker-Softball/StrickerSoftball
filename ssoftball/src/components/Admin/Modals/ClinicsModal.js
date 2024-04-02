import React from 'react';
import { useState } from 'react';

// import { useForm } from "react-hook-form"
import step3Img from '../../../images/helpers/step3.png';
import step4Img from '../../../images/helpers/step4.png';
import step5Img from '../../../images/helpers/step5.png';
import step6Img from '../../../images/helpers/step6.png';

function AdminScreen(props) {
    let [helpOpen, setHelp] = useState(false);
    let [inputObj, setInput] = useState({
        url:props.preFill.url?props.preFill.url:'', 
        // order:props.preFill.url?props.preFill.url:'',
        name:props.preFill.name?props.preFill.name:'',
        file:props.preFill.file?props.preFill.file:''})

    // useEffect(() => {
    //     async function fetchData() {
    //         setInput()
    //     }
    //     fetchData();
    //   }, []);

    const handleSubmit = (e,data) => {
        e.preventDefault()
        // e.target.toArray().forEach(ele => {
        //     console.log(ele)
        // })
        props.setShowModal()
        console.log('data', data, e.target, e.target.elements.missionStatement)
        
    }
    const handleCancel = (e) => {
        e.preventDefault()
        props.setShowModal()
    }
    

    const handleChange = (e) => {
        let property = "missionText"
        let updatedObjec = {...inputObj}
        updatedObjec[property] = e.target.value
        setInput(updatedObjec)
    }
    const handleHelp = (e) => {
        e.preventDefault()
        setHelp(!helpOpen)
    }
    return (    
            <div className='modal-section clinics-modal'>
                <h6>Edit Clinics</h6>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup preveiewGroup">
                        <img className="preveiwImage" src={inputObj.file} />
                    </div>
                     <div className="formGroup">
                        <label>Name (optional)</label>
                        <input defaultValue={inputObj.name}  name="name" />
                    </div>
                    <div className="formGroup">
                        <label>Url<button onClick={handleHelp} className="adminFormButton admin-modal-action">what url (help)?</button></label>
                        <input defaultValue={inputObj.url} name="url" onChange={handleChange}/>
                    </div>
                    {/* help with url section  */}
                    <div id="adminUrlHelp" className={helpOpen?'':'hide'}>
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
                        <p>7. Paste the link into the URL input above! - You did it! Great Job!! Your a rockstar!!!
                        </p>
                        <button onClick={handleHelp} className="adminFormButton admin-modal-action">Close these instructions</button>
                        
                        {/* <p>Click "what url (help)?" to close these instructions.</p> */}
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
