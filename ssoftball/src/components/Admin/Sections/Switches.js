import React from 'react';
import './AdminSection.scss';
import { useState } from 'react';

let sectionName = "Switches"
function AdminSection(props) {
    let [inputObj, setInput] = useState({frontPageAds:undefined})
   let className = "edit-section-body edit-section-no-add"
   if(props.tabName.includes(sectionName)){
    className += ' section-active';
   }
   // cardDelete and handleNewCard removed (not used)
    function updateCheckbox(e){
        props.editSwitchBoolean(e.target.dataset.name, e.target.checked)
        // props.handleEditClick({description:'', buttons:[{name:'',link:''}],id:-1})
    }
    let needsUpdate = false;
    Object.keys(props.switches).forEach(key => {
        if(props.switches[key] !== inputObj[key]){
            needsUpdate = true;
        }
    })
    if(needsUpdate) setInput({...props.switches})
    return (
    <div className={className}  data-content={sectionName}>
        <div className="adminCardGroup">
        {Object.keys(props.switches).map((card, index) => {
            let switchName = card.replace(/([A-Z])/g, ' $1').trim()
            return (
                <div className="adminCard" key={index}>
                    
                    <div className={`formGroup`}>
                        <label>{switchName}</label>
                        <div className="radio-parent">
                            <div className="radio-group">
                                <input  type="checkbox"  name={card} data-name={card} defaultChecked={inputObj[card]?true:false} onChange={updateCheckbox} />
                                <label>On</label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
    );
}


export default AdminSection;