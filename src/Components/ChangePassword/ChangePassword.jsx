import React from 'react'
// Importing css file
import './ChangePassword.css'


/* Importing Google Fonts  */
{ <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
</style> }

function ChangePassword() {
    return (
        <div>
            <div className="main-container">
                <div className="sub-container">
                    <h4>Change Password</h4>
                    <input type="password" name="userOldPassword" placeholder='Enter your old password'/>
                    <input type="password" name="userNewPassword" placeholder='Enter the new password'/>
                    <h6>Confirm new Password</h6>
                    <input type="password" name="userReenteredPassword" placeholder='Confirm new password'/>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
