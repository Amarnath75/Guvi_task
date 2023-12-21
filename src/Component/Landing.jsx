import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
const Landing = () => {
  return (
    <div>
        <ul>
  
        <li id="button1"><Link to="/Login">Login<Link/></Link></li>
            <li id="button2"><Link to="/SignIn">SignIn<Link/></Link></li>
        </ul>
    </div>
  )
}

export default Landing