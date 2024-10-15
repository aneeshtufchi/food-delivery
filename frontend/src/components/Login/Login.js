import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assests/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

export default function Login({setShowLogin}) {
    const[currState,setCurrState]=useState("Sign Up")

    const {url,setToken}=useContext(StoreContext);

    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        setData(data=>({...data,[name]:value}))
    }

   
    const onLogin=async(event)=>{
        event.preventDefault();
        let newUrl=url;

        if(currState==="Login"){
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"
        }
    
        const response=await axios.post(newUrl,data);
    
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false);
        }else{
            alert(response.data.message)
        }
    }
    
    

  return (
    <div className='login'>
        <form onSubmit={onLogin}className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)}alt="" />
            </div>
            <div className="login-inputs">
                {currState==="Login"?<></>:<input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder='Enter your Name' required />}
                <input type='email' onChange={onChangeHandler} name="email" value={data.email} placeholder='Enter your email' required/>
                <input type="password" onChange={onChangeHandler} name="password" value={data.password}placeholder='Enter your password' required />
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing , I agree to the terms of use & privacy policy</p>
            </div>
            {   currState==="Sign Up"
                ?<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span></p>
                :<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            }

        
        </form>
    </div>
  )
}
