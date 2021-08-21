import React,{useState} from 'react';
import './foods-dashboard.css';
import FoodsCategory from './foods-category'
import FoodsList from './foods-list';

const FoodsDashboard = ()=>{
    const categories=[
        {id:1,value:'Hot Deals'},
        {id:2,value:'Continental'},
        {id:3,value:'Snacks'},
        {id:4,value:'Fastfood'},
        {id:5,value:'Bevarages'},
        {id:6,value:'Indian'},
        {id:7,value:'Chinese'},
        {id:8,value:'Italian'},
        {id:9,value:'French'},
        {id:10,value:'Mexian'}
    ]
    const listOfFoods = [
        {id:1,parentId:1,value:'Pizza1'},
        {id:2,parentId:1,value:'Pizza2'},
        {id:3,parentId:1,value:'Pizza3'},
        {id:4,parentId:1,value:'Pizza4'},
        {id:5,parentId:2,value:'Pizza5'},
        {id:6,parentId:2,value:'Pizza6'},
        {id:7,parentId:2,value:'Pizza7'},
        {id:8,parentId:3,value:'Pizza8'},
        {id:9,parentId:3,value:'Pizza9'},
        {id:10,parentId:3,value:'Pizza10'},
        {id:11,parentId:3,value:'Pizza11'},
        {id:12,parentId:4,value:'Pizza12'},
        {id:13,parentId:4,value:'Pizza13'},
        {id:14,parentId:5,value:'Pizza14'},
        {id:15,parentId:6,value:'Pizza15'},
        {id:16,parentId:7,value:'Pizza16'},
        {id:17,parentId:8,value:'Pizza17'},
        {id:18,parentId:9,value:'Pizza18'},
        {id:19,parentId:10,value:'Pizza19'},
        {id:20,parentId:5,value:'Pizza20'},
        {id:21,parentId:6,value:'Pizza21'},
        {id:22,parentId:7,value:'Pizza22'},
        {id:23,parentId:8,value:'Pizza23'},
        {id:24,parentId:9,value:'Pizza24'},
        {id:25,parentId:10,value:'Pizza25'},
        {id:26,parentId:1,value:'Pizza26'},
    ];
    let foodsByCategory =[];    
    const filterFoodByCategory = (selectedValue)=>{
        foodsByCategory = listOfFoods.filter(data=>data.parentId === selectedValue.id);
    }

    const [selectCategory, setSelectCategory]= useState(categories[0]);
    // const selectCategoryHandler = (category)=>{
    //     setSelectedCategory(category);
    //     props.onSelectCategory(category);
    // }    
    const selectCategoryHandler =(category)=>{    
        setSelectCategory(category);
        filterFoodByCategory(selectCategory);    
    }
     filterFoodByCategory(selectCategory);

    return(
        <div className="container">
            <div className="left-panel">
                <FoodsCategory 
                categoryList={categories} 
                selectedCategory={selectCategory} 
                onSelectCategory={(category)=>selectCategoryHandler(category)} />
            </div>
            <div className="right-panel">
                <FoodsList foodItems={foodsByCategory}/>
            </div>
        </div>
    )
}

export default FoodsDashboard;