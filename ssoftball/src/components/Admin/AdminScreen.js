import React from 'react';
import './AdminScreen.scss';
import { useState } from 'react';


function AdminScreen(props) {

    const [showMail, setMail] = useState(false)

    function myFunction() {
        var copyText = document.getElementById("mailInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
        if (window.getSelection) { window.getSelection().removeAllRanges(); }
        else if (document.selection) { document.selection.empty(); }
    }

    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }
    let allSections = props.allSections;
    console.log('allSections',allSections)

    return (
        <div className="Contact" >
            <div>
                <h6>Edit Sections</h6>

                {Object.keys(allSections).map((key) => {
                            
                            let items = allSections[key]
                            console.log(key, items)
                            return (
                                <div>
                                    <header class="edit-section-head"></header>
                                    <div class="edit-section-body">

                                    </div>
                                </div>
                            )
                        })}

            </div>
        </div>
    );
}

export default AdminScreen;