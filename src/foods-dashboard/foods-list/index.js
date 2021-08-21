import React from 'react';
import FoodTile from '../../components/food-tile';


const FoodsList =(props)=>{
    const foodsByCategory = props.foodItems.map(food=>{
        return (
            // <div key={ food.id }>
                <FoodTile key={ food.id } value={ food.value } />                
            // </div>
        )
    })

    return(
        <div>
            { foodsByCategory }
        </div>
    )
}

export default FoodsList;