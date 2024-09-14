import React from 'react'
import './UserLogin.css'

const UserLogin = ({ setUser }) => {
  return (
    <div className='UserLogin'>
      <header>
        <h1>Welcome User</h1>
        <h2>Lets log you in!</h2>
      </header>
      <div className='Login'>
        <form action='submit' method='POST'>
          <label id='username'>Username</label>
          <input className="TextInput" type='text'/>
          <label id='password'>Password</label>
          <input className="TextInput" type='password'/>
          <input className='Button' 
          type='submit' 
          onClick={()=>{console.log('Welcome user')}}
          value='Login'/>
          <input className='Button' 
          type='submit' 
          onClick={()=>{console.log('Forgot Password')}}
          value='Forgot Password'/>
        </form>
      </div>
      <button className='Button' onClick={()=>setUser(false)}>Home</button>
    </div>
  )
}

export default UserLogin
