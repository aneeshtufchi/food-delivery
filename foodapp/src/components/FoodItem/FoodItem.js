import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assests/assets'
import { StoreContext } from '../../context/StoreContext';

export default function FoodItem({id,name,price,description,image}) {
    
    const {cartItems,addtoCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='food-item'>   
        <div className="food-item-image-container">
            <img className='food-item-image'src={url+"/images/"+image} alt="" />
            {
                !cartItems[id]
                ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addtoCart(id)}src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">Rs.{price}</p>
        </div>
    </div>
  )
}
