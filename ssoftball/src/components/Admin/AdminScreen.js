import React from 'react';
import './AdminScreen.scss';
import { useState } from 'react';
import axios from 'axios';

import ClinicList from './Sections/Clinics.js'


const updateData = async () => {
    let post = {
        "value": "6"
    }
    const result = await axios.put(
      `https://softball-science-data.vercel.app/locker/4`,
      {post}
    ).then(res => console.log(res.data)
    ).catch(err => console.log(err))
    result()
    // setData(result.data);
  };

function AdminScreen(props) {

    const [showMail, setMail] = useState(false)
    const [selectedTab, setTab] = useState('clinics')

    // function myFunction() {
    //     var copyText = document.getElementById("mailInput");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999);
    //     document.execCommand("copy");

    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copied: " + copyText.value;
    //     if (window.getSelection) { window.getSelection().removeAllRanges(); }
    //     else if (document.selection) { document.selection.empty(); }
    // }

    // function outFunc() {
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copy to clipboard";
    // }
    function handleEditClick(){
        console.log('click')
    }
    function handleAdminTabClick(e){
        let newTab = e.target.dataset.tab
        setTab(newTab)
    }

    let allSections = props.allSections;
    console.log('allSections',allSections)

    return (
        <div className="page" >
            <div>
                <h6>Edit Sections</h6>
                <div className="edit-tabs">
                {Object.keys(allSections).map((key) => {
                            
                            let items = allSections[key]
                            console.log(key, items)
                            return (
                                <div className={`tab${key === selectedTab?' tab-active':''}`} onClick={handleAdminTabClick} data-tab={key}>
                                    {key}
                                </div>
                            )
                        })}
                </div>
                <div className="edit-body-wrapper">
                    <ClinicList {...props} tabName={selectedTab} handleEditClick={handleEditClick} cards={allSections.clinics}/>
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
        </div>
    );
}

export default AdminScreen;