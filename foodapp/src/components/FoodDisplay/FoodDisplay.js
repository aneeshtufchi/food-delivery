import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay({category}) {
    const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display' id='foodDisplay'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="all" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }
                    
            })}
        </div>
    </div>
  )
}
