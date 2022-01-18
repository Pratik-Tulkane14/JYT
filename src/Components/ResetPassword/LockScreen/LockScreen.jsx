import React from 'react'
import './LockScreen.css'
// Importing css file

/* Importing Google Fonts  */
{ <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
    </style> }
function LockScreen() {
    return (
        <div>
            <div className="main-container">
                <div className="sub-container">
                    <h5>Alex Smith</h5>
                    <h6>Password</h6>
                    <input type="password" name="userpassword" placeholder='Enter Password' />
                    <button>Unlock</button>
                </div>
            </div>
        </div>
    )
}

export default LockScreen
