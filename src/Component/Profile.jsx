import React from 'react'
import { useLocation ,Link} from 'react-router-dom'
const Profile = () => {
  const {state}=useLocation()
  console.log(state)
  return (
    <div>
        <div>
            <h1>
              Profile Page
            </h1>
        </div>
        <div>
          first name:
          <span>{state.fname}</span>
        </div>
        <div>
          last name:
          <span>{state.lname}</span>
        </div>
        <div>
          email:
          <span>{state.email}</span>
        </div>
        <div>
          age:
          <span>{state.age}</span>
        </div>
        <div>
          gender:
          <span>{state.gender}</span>
        </div>
        <div>
        <button class="buttonn" ><Link to="/">Log out</Link></button>
        </div>
    </div>
  )
}

export default Profile