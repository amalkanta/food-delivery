import React, { useState } from 'react';
import './food-tile.css';

const FoodTile = (props) =>{
    const [count,setCount]=useState(0);

    const onSetCountHandler = (type) => {
        
        setCount(prevState=>{
            if(type === '+'){
                prevState++
                return prevState;
            }
            else{
                prevState--;
                return (prevState < 0) ? 0 :prevState;
            }
                        
        })
    }

    return (
        <div className="outerDiv">
            <div>{ props.value }</div>
            <div>
                <button onClick={()=>onSetCountHandler('-')}>-</button>
                <span className="count">{count}</span>
                <button onClick={()=>onSetCountHandler('+')}>+</button>
                <button style={ {marginLeft : '24px'} }>Add</button>
            </div>
        </div>
    )
}

export default FoodTile;