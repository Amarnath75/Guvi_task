import { useState } from 'react'
import Login from './Component/Login'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import SignIn from './Component/SignIn'
import Landing from './Component/Landing'
import Profile from './Component/Profile'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Landing/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='SignIn' element={<SignIn/>} />
          <Route path='Profile' element={<Profile/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
