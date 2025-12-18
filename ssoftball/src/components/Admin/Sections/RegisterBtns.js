import React from 'react';
import './AdminSection.scss';
// no local state or helper needed

let sectionName = "ClassRegistration"
function AdminSection(props) {
    // inputObj not currently used
   let className = "edit-section-body"
   if(props.tabName.includes(sectionName)){
    className += ' section-active';
   }
    function cardDelete(e, element){
     let id = Number(e.target.dataset.id)
     props.deleteItemFromList(id)
    // edit our array here
   }
   function setupEdit(card){
        // console.log('button click', props, card)
        props.handleEditClick(card)
    }
    function handleNewCard(){
        props.handleEditClick({description:'', buttons:[{name:'',link:''}],id:-1})
    }
    return (
    <div className={className}  data-content={sectionName}>
        {/* <h3>{sectionName}</h3> */}
        <div className="adminCardGroup">
        <button onClick={handleNewCard} className="adminFormButton submitFormButton">Add New Button</button>
        {props.cards.map((card, index) => {
            // name, url , file
            // let fileImg = setImgThumb(card.file)
            // console.log(card)
            return (
                <div className="adminCard" key={index}>
                    <div className="formGroup preveiewGroup">
                        {/* <iframe style={{background:'#000000', maxWidth: '300px', maxHeight:"150px"}} frameBorder="0" navpanes="0" scrolling="no" toolbar="0" allowtransparency="true" src={card.file} ></iframe> */}
                    </div>
                    <div className="formGroup evenGroup evenGroup-small">
                        <label>Title</label>
                        <p>{card.description}</p>
                    </div>
                    <div className="formGroup evenGroup evenGroup-big">
                        <label>Button Label</label>
                        <span className="clinic-link">{card.buttons[0].name}</span>
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
                    </div>
                </div>
            )
        })}
        
        </div>
    </div>
    );
}


export default AdminSection;