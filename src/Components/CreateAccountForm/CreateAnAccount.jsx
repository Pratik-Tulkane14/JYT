import React from 'react'

// importing Css file
import './CreateAnAccount.css'
// importing an image
import facebook from './Images/facebook.svg'
import google from './Images/google.svg'

// importing Google Fonts
{ <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
    </style> }
function CreateAnAccount() {
    return (
        <div>
            <div className="main-container">
                <div className="sub-container">
                    <h5>Sign In / Create an account</h5>
                    <h6>Sign in using a secure link</h6>
                    <input type="email" name="userEmailId" placeholder='Enter your email address'/>
                    <button>Submit</button>
                    <p>Or Connected with</p>
                    <div className="container-icons">
                        <img src={facebook} alt={facebook} />
                        <img src={google} alt={google} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAnAccount
