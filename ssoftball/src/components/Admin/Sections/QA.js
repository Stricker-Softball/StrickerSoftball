import React from 'react';
import './AdminSection.scss';
import { useState } from 'react';


let sectionName = "Q&A"
function AdminSection(props) {
   let className = "admin-body-group"
   if(props.tabName == sectionName){
    className += ' active';
   }
    return (
    <div className={className}  data-content={sectionName}>
        <h3>{sectionName}</h3>
    </div>
    );
}

export default AdminSection;