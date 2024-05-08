import React from 'react';
import './AdminScreen.scss';
import { useState } from 'react';
import axios from 'axios';

import AdsList from './Sections/Ads.js'
import ClinicList from './Sections/Clinics.js'
import TeamList from './Sections/Teams.js'
import Modal from './Modals/Modal.js'
import RegisterBtns from './Sections/RegisterBtns.js'
import Switch from './Sections/Switches.js'



function AdminScreen(props) {

    const [showMail, setMail] = useState(false)
    const [selectedTab, setTab] = useState('Ads')
    const [modalOn, setModalOn]= useState(false)
    const [preFill, setPreFill] = useState({url:'',file:'',name:'',id:-1})
   
    function setShowModal(){

        setModalOn(!modalOn)
    }
    async function sendDataToEndpoint(newSections){
        let postString ={ "value":JSON.stringify(newSections) }
        
        await axios.put(
        `https://softball-science-data.vercel.app/locker/4`,
        postString
        ).then(res => {
            document.getElementById('SaveScreen').classList.remove('show');
            // props.setData()
        }
        ).catch(err => {
            document.getElementById('SaveScreen').classList.remove('show');
            alert('Something went wrong! did not save your data!')
        })
    }
    async function submitAllSectionsData(e){
        document.getElementById('SaveScreen').classList.add('show')
        e.preventDefault()
        let changeForm = e.target;
        let changeId = e.target.dataset.id
       
        // Set find the data in our lists and change them
        let changedObj = {}
        let formData = new FormData(changeForm)
        
        let newSections = {...props.allSections}
        let newList = newSections[selectedTab]
        let changeIndex = newList.length;
        if(changeId != -1){
            changeIndex = newList.findIndex(obj => obj.id == changeId);
            changedObj = newSections[selectedTab][changeIndex]
        }
        if(selectedTab != 'ClassRegistration'){
            for (const pair of formData.entries()) {
                if(pair[0] != "listPos"){
                    if(pair[0] == 'url'){
                        if(selectedTab != 'Ads'){
                            let value = pair[1].split('?')[0]
                            changedObj[pair[0]] = value
                            changedObj['file'] = value.split('/view')[0] + '/preview'
                        }else{
                            let value = `https://drive.google.com/thumbnail?id=${pair[1].split('/view')[0].split('/d/')[1]}&sz=w1000`
                            
                            changedObj[pair[0]] = value
                        }
                    }else{
                        changedObj[pair[0]] = pair[1]
                    }
                    
                }
            }
        }else{
            changedObj = {buttons:[{}]}
            for (const pair of formData.entries()) {
                if(pair[0] == 'name' || pair[0] == 'link'){
                    changedObj['buttons'][0][pair[0]] = pair[1]
                }else{
                    changedObj[pair[0]] = pair[1]
                }
            }
        }
        
        if(!changedObj.id || changedObj.id == -1){ 
            changedObj['id'] = changeIndex + 1
            let copiedArr = [...newSections[selectedTab]]
            newSections[selectedTab] = [{...changedObj}, ...copiedArr]
        }else{
            newSections[selectedTab][changeIndex] = {...changedObj}
        }
        setShowModal()
        props.setData(newSections)
        sendDataToEndpoint(newSections)
    }
    function editSwitchBoolean(switchName, value){
        document.getElementById('SaveScreen').classList.add('show')
        // console.log(switchName, value)
        let newSections = {...props.allSections}
        newSections.Switches[switchName] = value
        props.setData(newSections)
        sendDataToEndpoint(newSections)
    }

    async function deleteItemFromList(id){
        document.getElementById('SaveScreen').classList.add('show')
        let newSections = {...props.allSections}
        let index = newSections[selectedTab].findIndex(item => item.id == id)
        newSections[selectedTab].splice(index, 1);
        props.setData(newSections)
        sendDataToEndpoint(newSections)
    }


    function handleEditClick(data){
        setPreFill(data)
        setModalOn(!modalOn)
    }
    function handleAdminTabClick(e){
        let newTab = e.target.dataset.tab
        if(newTab == "ClassRegistration"){
            setPreFill({description:'', buttons:[{name:'',link:''}],id:-1})
        }else{
            setPreFill({url:'',file:'',name:'',id:-1})
        }
        setTab(newTab)
    }
    let displayTabList=['Ads','Clinics', 'ClassRegistration', 'Teams', 'Switches']

    return (
        <div className="page" >
            <div>
                <h6>Edit Sections</h6>
                <div className="edit-tabs">
                {displayTabList.map((key) => {
                            let tabName = key.replace(/([A-Z])/g, ' $1').trim()
                            if(tabName == 'Clinics') tabName = "Class PDfs & Images"
                            if(tabName == 'Class Registration') tabName = "Class Register Buttons"
                            if(tabName == 'Ads') tabName = "Front Page Ads"
                            if(!displayTabList.includes(key)) return (<></>)
                            return (
                                <div className={`tab${key === selectedTab?' tab-active':''}`} onClick={handleAdminTabClick} data-tab={key}>
                                    {tabName}
                                </div>
                            )
                        })}
                </div>
                <div className="edit-body-wrapper">
                    <AdsList deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.Ads} setShowModal={setShowModal}/>
                    <ClinicList deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.Clinics} setShowModal={setShowModal}/>
                    <TeamList deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.Teams} setShowModal={setShowModal}/>
                    <RegisterBtns deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.ClassRegistration} setShowModal={setShowModal}/>
                    <Switch  {...props} tabName={selectedTab} switches={props.allSections.Switches} editSwitchBoolean={editSwitchBoolean} />
                </div>
                {/* {Object.keys(allSections).map((key) => {
                            
                            let items = allSections[key]
                            console.log(key, items)
                            return (
                                <div className={`edit-section-body${key === selectedTab?' section-active':''}`}>
                                </div>
                            )
                        })} */}

            </div>
            <Modal submitAllSectionsData={submitAllSectionsData} showModal={modalOn} allSections={props.allSections} preFill={preFill} handleEditClick={handleEditClick}  dataName={selectedTab} setShowModal={setShowModal}/>
        </div>
    );
}

export default AdminScreen;