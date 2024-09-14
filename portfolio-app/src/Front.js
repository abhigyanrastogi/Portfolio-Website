import React from 'react'
import './Front.css'

const Front = ({setGuest, setUser}) => {
    return (
        <div className='Front'>
            <header>
                <svg width="100vw" height="40vh" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="32vh" fill="white" fontSize="40vh">HI!</text>
                </svg>
                <svg width="100vw" height="20vh" xmlns="http://www.w3.org/2000/svg">
                    <text textAnchor="middle" x="50%" y="75%" fill="white" fontSize="7vw">I am Abhigyan Chandra Rastogi</text>
                </svg>
            </header>
            <div className='Visit'>
                <h1>Visit my website: </h1>
                <div className='Buttons'>
                    <button className='visitButton' onClick={()=>{setGuest(true)}}>As a Guest</button>
                    <button className='visitButton' onClick={()=>{setUser(true)}}>As a User</button>
                </div>
            </div>
        </div>
    )
}

export default Front
