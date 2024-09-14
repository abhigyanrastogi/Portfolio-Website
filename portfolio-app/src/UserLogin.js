import React from 'react'

const UserLogin = ({ setUser }) => {
  return (
    <div>
      <header>
        <h2>Welcome User, lets log you in!</h2>
      </header>
      <button onClick={()=>setUser(false)}>Home</button>
    </div>
  )
}

export default UserLogin
