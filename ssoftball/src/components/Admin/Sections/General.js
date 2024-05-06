import React from 'react';
import './AdminSection.scss';
import { useState } from 'react';

let missionText = `Softball Science was created by two women with a long history in the world of softball and life. 
   We have used our combined expertise, that includes over 30 years of coaching experience along with
    20 years of data analytics to create Softball Science. We have created a metrically driven program
     specifically designed to enhance the raw power behind your softball swing. All we need from you, 
     is to bring the hard work and we will teach your body to supply the power! Our vision is to help 
     guide softball players to believe in themselves and support them in every aspect of the game, 
     both physically and mentally. 
     We can't wait to help you unlock the strength you never knew you had! `

let sectionName = "General"
function AdminSection(props) {
    let [inputObj, setInput] = useState({missionText:missionText, title:'text'})
    const handleSubmit = (e,data) => {
        e.preventDefault()
        // e.target.toArray().forEach(ele => {
        //     console.log(ele)
        // })
    }

    const handleChange = (e) => {
        let property = "missionText"
        let updatedObjec = {...inputObj}
        updatedObjec[property] = e.target.value
        setInput(updatedObjec)
    }

   let className = "modal-section general-modal admin-body-group"
   if(props.tabName == sectionName){
    className += ' active';
   }
    return (
    <div className={className} data-content={sectionName}>
        <h3>{sectionName}</h3>
        <form onSubmit={handleSubmit}>
        <div className="formGroup">
            <label htmlFor="missionStatement"> Mission Statement </label>
            <textarea defaultValue={inputObj.missionText} name="missionStatement" rows="10" onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save changes</button>
        </form>
    </div>
    );
}

export default AdminSection;