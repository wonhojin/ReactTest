import React from 'react';
import './Logo.css'
import { withRouter } from "react-router-dom";


const Logo = ({history}) =>{
    return(
        <div className="header_Logo">
            <button className="Logo_btn"  onClick = {()=>{history.push("/")}}>LoGo</button>
        </div>
    )
};

export default withRouter(Logo);
