import React from 'react';
import './AdminScreen.scss';
import { useState } from 'react';
import axios from 'axios';

import ClinicList from './Sections/Clinics.js'
import TeamList from './Sections/Teams.js'
import Modal from './Modals/Modal.js'

const updateData = async () => {
    let post = {
        "value": "6"
    }
    // const result = await axios.put(
    //   `https://softball-science-data.vercel.app/locker/4`,
    //   {post}
    // ).then(res => console.log(res.data)
    // ).catch(err => console.log(err))
    // result()
    // setData(result.data);
  };

function AdminScreen(props) {

    const [showMail, setMail] = useState(false)
    const [selectedTab, setTab] = useState('clinics')
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
            console.log(res);
            // props.setData()
        }
        ).catch(err => console.log(err))
    }
    async function submitAllSectionsData(e){
        e.preventDefault()
        let changeForm = e.target;
        let changeId = e.target.dataset.id
        setShowModal()
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
        for (const pair of formData.entries()) {
            if(pair[0] != "listPos"){
                if(pair[0] == 'url'){
                    let value = pair[1].split('?')[0]
                    changedObj[pair[0]] = value
                    changedObj['file'] = value.split('/view')[0] + '/preview'
                }else{
                    changedObj[pair[0]] = pair[1]
                }
                
            }
        }
        if(changedObj.id == -1){
            changedObj.id = changeIndex
            newSections[selectedTab].push({...changedObj})
        }else{
            newSections[selectedTab][changeIndex] = {...changedObj}
        }
        
        props.setData(newSections)
        sendDataToEndpoint(newSections)


    }

    async function deleteItemFromList(id){
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
        setPreFill({url:'',file:'',name:'',id:-1})
        setTab(newTab)
    }
    let displayTabList=['clinics', 'teams']

    return (
        <div className="page" >
            <div>
                <h6>Edit Sections</h6>
                <div className="edit-tabs">
                {Object.keys(props.allSections).map((key) => {
                            
                            let items = props.allSections[key]
                            if(!displayTabList.includes(key)) return (<></>)
                            return (
                                <div className={`tab${key === selectedTab?' tab-active':''}`} onClick={handleAdminTabClick} data-tab={key}>
                                    {key}
                                </div>
                            )
                        })}
                </div>
                <div className="edit-body-wrapper">
                    <ClinicList deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.clinics} setShowModal={setShowModal}/>
                    <TeamList deleteItemFromList={deleteItemFromList} {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={props.allSections.teams} setShowModal={setShowModal}/>
                
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