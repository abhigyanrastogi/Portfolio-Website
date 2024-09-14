import React from 'react'
import './App.css'
import GuestLogin from './GuestLogin';
import UserLogin from './UserLogin';

const App = () => {
  const [guest, setGuest] = React.useState(false);
  const [user, setUser] = React.useState(false);

  const Main = () => {
    return(
      <>
      <main>
        <p>Would you like to login as...</p>
        <button onClick={showGuest}>Guest Login</button>
        <button onClick={showUser}>User Login</button>
      </main>
      </>
    );
  }

  const showGuest = () => {
    setGuest(true);
    setUser(false);
  }

  const showUser = () => {
    setGuest(false);
    setUser(true);
  }

  return (
    <div>
      <header>
        <h1>HI!</h1>
        <h2>I am Abhigyan Chandra Rastogi,</h2>
      </header>
      {!(guest || user) && <Main />}
      {guest && <GuestLogin />}
      {user && <UserLogin />}
      {(guest || user) && <button onClick={() => { setGuest(false);setUser(false); }}>Main</button>}
    </div>
  )
}

export default App
