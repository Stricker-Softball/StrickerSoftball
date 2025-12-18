import React from 'react';
import { useState } from 'react';



function AdminScreen(props) {
    // console.log('cmodal',props.preill)
    // return <></>
    let [helpOpen, setHelp] = useState(false);
    let [inputObj, setInput] = useState({
        description:props.preFill.description, 
        buttons:[{link:props.preFill.buttons[0].link,name:props.preFill.buttons[0].name}],
        id:props.preFill.id
    })

    // no-op url checker (kept for reference)

    const handleSubmit = (e) => {
        props.submitAllSectionsData(e)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        if(helpOpen)setHelp(!helpOpen)
        props.setShowModal()
    }
    // help toggle removed (not used)
    if(inputObj.id !== props.preFill.id) setInput(props.preFill)
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
