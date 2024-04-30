import React from 'react';
import './AdminSection.scss';
import { useState } from 'react';

import Trash from '../../../images/trash.png';

function setImgThumb(file){
    let fileName = file.split('d/')[1].split('/preview')[0];
    let newName = `https://drive.google.com/thumbnail?id=${fileName}&sz=w1000`
    return newName
}

let sectionName = "Switches"
function AdminSection(props) {
    let [inputObj, setInput] = useState({frontPageAds:undefined})
   let className = "edit-section-body"
   if(props.tabName.includes(sectionName)){
    className += ' section-active';
   }
   function cardDelete(e, element){
    let id = e.target.dataset.id
    // props.deleteItemFromList(id)
    // edit our array here
   }
   function handleNewCard(card){
        // console.log('button click', props, card)
        // props.handleEditClick(card)
    }
    function updateCheckbox(e){
        props.editSwitchBoolean(e.target.dataset.name, e.target.checked)
        // props.handleEditClick({description:'', buttons:[{name:'',link:''}],id:-1})
    }
    console.log('siwtches:',inputObj,props.switches)
    let needsUpdate = false;
    Object.keys(props.switches).forEach(key => {
        if(props.switches[key] !== inputObj[key]){
            needsUpdate = true;
        }
    })
    if(needsUpdate) setInput({...props.switches})
    return (
    <div className={className}  data-content={sectionName}>
        {/* <h3>{sectionName}</h3> */}
        <div className="adminCardGroup">
        {Object.keys(props.switches).map((card, index) => {
            let switchName = card.replace(/([A-Z])/g, ' $1').trim()
            console.log('name:', inputObj[`${card}`], card)
            return (
                <div className="adminCard" key={index}>
                    
                    <div className={`formGroup`}>
                        <label>{switchName}</label>
                        <div className="radio-parent">
                            <div className="radio-group">
                                <input  type="checkbox"  name={card} data-name={card} defaultChecked={inputObj[card]?true:false} onChange={updateCheckbox} />
                                <label>On</label>
                            </div>
                            {/* <div className="radio-group"> */}
                            {/* <input value="false" type="radio"  name={card} data-name={card} checked={inputObj[`${card}`]} /> */}
                                {/* <label>Off</label> */}
                            {/* </div> */}
                        </div>
                    </div>
                    {/* <div className="formGroup evenGroup">
                        <label>Title</label>
                        <p>{card.description}</p>
                    </div>
                    <div className="formGroup evenGroup">
                        <label>Button Label</label>
                        <p className="button-main">{card.buttons[0].name}</p>
                    </div>
                    <div className="formGroup evenGroup">
                        <label>Button Link</label>
                        <p>{card.buttons[0].link}</p>
                    </div>
                    <div className="formGroup admin-btn-group">
                        <button className="adminFormButton" onClick={()=>setupEdit(card)}>Edit</button>

                    </div>
                    <div data-id={card.id} className="admin-btn-group" title="Remove">
                        <button data-id={card.id} className="del-btn adminFormButton" onClick={cardDelete}>Remove</button>
                    </div> */}
                </div>
            )
        })}
        <button onClick={handleNewCard} className="adminFormButton">Add New Button section</button>
        </div>
    </div>
    );
}


export default AdminSection;