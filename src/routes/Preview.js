import React from 'react';
import './Routes';
import './Preview.css'

const preview = () =>{
    return(
        <div id= "main">
            <div id = "preview_back">
                <h2>PREVIEW</h2>
                <div id= "reporter"></div>
            </div>
            <div id = "extract">
                <button type = "submit" className = "extract_btn" >Extract</button>
            </div>
        </div>
    )
}

export default preview;