import React from 'react'
import './Front.css'

const Front = ({setGuest, setUser}) => {
    return (
        <div className='Front'>
            <header>
                <svg width="100vw" height="40vh" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="32vh" fill="white" font-size="40vh">HI!</text>
                </svg>
                <svg width="100vw" height="15vh" xmlns="http://www.w3.org/2000/svg">
                    <text x="20" y="11vh" fill="white" font-size="6.7vw">I am Abhigyan Chandra Rastogi</text>
                </svg>
            </header>
            <div className='Visit'>
                <h1>Visit my website: </h1>
                <div className='Buttons'>
                    <button onClick={()=>{setGuest(true)}}>As a Guest</button>
                    <button onClick={()=>{setUser(true)}}>As a User</button>
                </div>
            </div>
        </div>
    )
}

export default Front
