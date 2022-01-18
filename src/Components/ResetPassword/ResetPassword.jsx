import React from 'react'

// importing css
import './ResetPassword.css'
function ResetPassword() {
    return (
        <div>
            <div className="main-container">
                 <div className="sub-container">
                    <h4>Reset Password</h4>
                    <h6>Reset Password with JYT.in</h6>
                    <p>Enter your Email and instruction will be send to you!</p>
                    <h6>Email</h6>
                    <input type="email" name="user-userName" placeholder='Enter your username' />
                    <button>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
