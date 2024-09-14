import React from 'react'

const GuestLogin = ({ setGuest }) => {
  return (
    <div className='GuestLogin'>
      <header>
        <h2>Welcome Dear Guest</h2>
      </header>
      <button onClick={()=>setGuest(false)}>Home</button>
    </div>
  )
}

export default GuestLogin
