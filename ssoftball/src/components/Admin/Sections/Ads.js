import React from 'react';
import './AdminSection.scss';
// no local state required

// Trash image unused



let sectionName = "Ads"
function AdminSection(props) {
    // inputObj not currently used
    console.log(props)
   let className = "edit-section-body"
   if(props.tabName.includes(sectionName)){
    className += ' section-active';
   }
    function cardDelete(e, element){
     let id = Number(e.target.dataset.id)
     props.deleteItemFromList(id)
    // edit our array here
   }
   // setupEdit removed (not used)
    function handleNewCard(){
        props.handleEditClick({url:'',id:-1})
    }
    return (
    <div className={className}  data-content={sectionName}>
        {/* <h3>{sectionName}</h3> */}
        <div className="adminCardGroup adsCardGroup">
            <button onClick={handleNewCard} className="adminFormButton submitFormButton">Add New Image</button>
        {props.cards.map((card, index) => {
            // name, url , file
            // console.log(card)
            return (
                <div className="adminCard" key={index}>
                    <div className="formGroup adImageDiv admin-image">
                        <img src={card.url} alt={card.name || ''} />
                    </div>
                    {/* <div className="formGroup evenGroup">
                        <label>Url</label>
                        <p>{card.url}</p>
                    </div> */}
                    {/* <div className="formGroup admin-btn-group">
                        <button className="adminFormButton" onClick={()=>setupEdit(card)}>Edit</button>
                    </div> */}
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