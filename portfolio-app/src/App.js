import React from 'react'
import './App.css'
import Front from './Front';
import GuestLogin from './GuestLogin'
import UserLogin from './UserLogin'

const App = () => {
  const [ guest, setGuest ] = React.useState(false);
  const [ user, setUser ] = React.useState(false);

  return (
    <div className='App'>
      {!(guest || user) && <Front setGuest={setGuest} setUser={setUser}/>}
      {guest && <GuestLogin setGuest={setGuest}/>}
      {user && <UserLogin setUser={setUser}/>}
    </div>
  )
}

export default App
