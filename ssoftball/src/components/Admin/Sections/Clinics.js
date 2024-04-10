import React from 'react';
import './AdminSection.scss';
import { useState } from 'react';

import Trash from '../../../images/trash.png';


let sectionName = "clinics"
function AdminSection(props) {
    console.log('clicks run', sectionName, props.tabName)
    let [inputObj, setInput] = useState({name:'', order:'', url:''})
   let className = "edit-section-body"
   if(props.tabName.includes(sectionName)){
    className += ' section-active';
   }
   function cardDelete(e, element){
    let id = e.target.dataset.id
    console.log(id)
    // edit our array here
   }
   function setupEdit(card){
        // console.log('button click', props, card)
        props.handleEditClick(card)
    }
    function handleNewCard(){
        props.handleEditClick({url:'',name:'',id:-1,file:''})
    }
    return (
    <div className={className}  data-content={sectionName}>
        <h3>{sectionName}</h3>
        <div className="adminCardGroup">
        {props.cards.map((card, index) => {
            // name, url , file
            // console.log(card)
            return (
                <div className="adminCard" key={index}>
                    <div className="formGroup preveiewGroup">
                        <img className="preveiwImage" src={card.file} />
                    </div>
                    <div className="formGroup">
                        <label>Name</label>
                        <p>{card.name}</p>
                    </div>
                    <div className="formGroup">
                        <label>Url</label>
                        <p>{card.url}</p>
                    </div>
                    <div className="formGroup">
                        <button onClick={()=>setupEdit(card)}>Edit</button>

                    </div>
                    <div data-id={index} className="" title="Remove">
                        {/* <img data-id={index} src={Trash}/> */}
                        <button data-id={index} className="del-btn" onClick={cardDelete}>Remove</button>
                    </div>
                </div>
            )
        })}
        <button onClick={handleNewCard} className="adminFormButton">Add New Card</button>
        </div>
    </div>
    );
}


export default AdminSection;