import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
export default function Cart() {

  const{cartItems,food_list,removeFromCart,getTotal,url}=useContext(StoreContext)
  const navigate= useNavigate();

  let del=getTotal()>0?40:0;
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr /> 
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(<>
              <div className="cart-items-title cart-items-item" >
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price*cartItems[item._id]}</p>
                <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr />
            </>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{del}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotal()+del}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Procced to Checkout</button>
        </div>
        {/* <div className="cart-promocode">
          <div>
            <p>If you have a promocode,Enter it here</p>
            <div className="cart-promocode-input">
                <input type="text" placeholder='Enter Code' />
                <button>Apply</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
