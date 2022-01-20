import React from 'react'


import './LandingPage.css'
{ <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
    </style> }
function LandingPage() {
    return (
        <div>
            <div className="navbar">
                    <li><a href="">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">How it works</a></li>
                    <button>Setting</button>
                    <button>Publish</button>
            </div>
            <div className="container">
                <h1>Publishing Platform for <span> Writers !</span></h1>
                <p>create beautiful, independent online publication by writhing faster and better than you ever have before</p>
                <button>GET STARTED - it's free</button>
            </div>
        </div>
    )
}

export default LandingPage
