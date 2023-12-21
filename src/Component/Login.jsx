import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [property,setProperty]=useState(undefined)
   const navigate=useNavigate();
   const handleLogin=(e)=>{
    getData()
    console.log(property)
    if(property===undefined){
        e.preventDefault();
    }
    else{
        navigate('/Profile',{state:property})
   }
    
   }
   const getData= async()=>{
    const data= await fetch("http://localhost:3000/profile").then(d=>d.json()).then(da=>{return da})
    const checkData=data.find(d=>d.email===email && d.password===password)
    console.log(checkData)
    setProperty(checkData)
   }
    return(
        <div className="container">
        <div>
            <div>
                <h1>WELCOME TO LOGIN PAGE</h1>
            </div>
        <form onSubmit={handleLogin}>
            <div>
        <label htmlFor="email">E-mail:</label>
        <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" >Login</button>
        </form>
        </div>
        </div>
    )
}
export default Login
