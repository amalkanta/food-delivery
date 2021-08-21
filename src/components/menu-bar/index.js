import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './menu-bar.css';

const Menubar = (props)=>{
    const menubarList = [
        {value:'Delivery Food',path:'foods'},
        {value:'Order History',path:'history'},
        {value:'Address Management',path:'address'}
    ];
    const items=[];
    const [sidebarFlag, setSidebarFlag] = useState(false);
    const [highlightFlag, setHighlightFlag] = useState(0);
    for(const [index,data] of menubarList.entries()){
        
        items.push(
            <Link to={ data.path } >
            <li       
            key={index}      
            onClick ={()=>sidebarIconHandler(index)}
            className={"sidebar-li " + (highlightFlag === index ? 'highlight': null)} >
                {data.value}
            </li>  
            </Link>          
        )
    }
    
    const sideMenuHandler = ()=>{
        setSidebarFlag(prevState=>{
            return !prevState;
        });
    }
    const sidebarIconHandler = (i)=>{
        setHighlightFlag(i)
    }

    return (
        <div>
            {
                sidebarFlag && <div className="sidebar">
                    <ul className="sidebar-ul">
                       <BrowserRouter>{items}</BrowserRouter>
                    </ul>
                </div> 
            }
            <div className={ "menu-button " + (sidebarFlag ? "menu-button-open" : "menu-button-close") } 
                onClick={sideMenuHandler}>
            </div>
        </div>        
    )
}

export default Menubar;