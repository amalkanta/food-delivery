import React from 'react';
import './foods-category.css';

const FoodsCategory = (props)=>{
    // const [selectedCategory, setSelectedCategory]= useState(props.selectedCategory);
    const categories = [];
    const selectCategoryHandler = (category)=>{
        // setSelectedCategory(category);
        props.onSelectCategory(category);
    }

    for(const category of props.categoryList){
        categories.push(
        <li 
        key={ category.id } 
        onClick={()=>selectCategoryHandler(category)}
        className={"category-li " + ( props.selectedCategory.id === category.id ? "highlight":null)}>
            { category.value }
        </li>
        )
    }
    return(
        <React.Fragment>
            <h3 className="heading">Select Category</h3>
            <ul className="category-ul">
                {categories}
            </ul>
        </React.Fragment>
        
    )
}

export default FoodsCategory;