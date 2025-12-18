import React from 'react';
import './AdminSection.scss';
// no local state or helper needed

let sectionName = "Teams"
function AdminSection(props) {
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
        props.handleEditClick({url:'',name:'',id:-1,file:''})
    }
    return (
    <div className={className}  data-content={sectionName}>
        {/* <h3>{sectionName}</h3> */}
        <div className="adminCardGroup">
            <button onClick={handleNewCard} className="adminFormButton submitFormButton">Add New PDF</button>
        {props.cards.map((card, index) => {
            // name, url , file
            // console.log(card)
            return (
                <div className="adminCard" key={index}>
                    <div className="formGroup preveiewGroup">
                        {/* preview image removed */}
                        <iframe title={card.name || 'pdf-preview'} style={{background:'#000000', maxWidth: '300px', maxHeight:"150px"}} frameBorder="0" navpanes="0" scrolling="no" toolbar="0" allowtransparency="true" src={card.file} ></iframe>
                    </div>
                    <div className="formGroup evenGroup">
                        <label>Name</label>
                        <p>{card.name}</p>
                    </div>
                    <div className="formGroup evenGroup">
                        <label>Url</label>
                        <p>{card.url}</p>
                    </div>
                    <div className="formGroup admin-btn-group">
                        <button className="adminFormButton" onClick={()=>setupEdit(card)}>Edit</button>

                    </div>
                    <div data-id={card.id} className="admin-btn-group" title="Remove">
                        {/* <img data-id={index} src={Trash}/> */}
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