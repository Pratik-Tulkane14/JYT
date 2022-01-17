import React from 'react'

// Importing css file
import './SignInForm.css'

// importing images 
import facebook from './Images/facebook.svg'
import google from './Images/google.svg'

/* Importing Google Fonts  */
{ <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
</style> }
function SignInForm() {
    return (
        <div>
            <div className="container-sign-in-form">
                <h3>Welcome back !</h3>
                <h4>Sign in to continue to JYT</h4>
                <div className="signInSection">
                    <h5>Username</h5>
                    <input type="text" name="username" placeholder='Enter the username' />
                    <a href="" id='forget-password'>Forget Password ?</a>
                    <h5>Password</h5>
                    <input type="password" name="password" placeholder='Enter Password' />
                    <button>Log in</button>
                    <a href="" id='signInWith'>Sign in with</a>
                    <div className="signInWith-option">
                    <img src={facebook}alt="facebook" />
                    <img src={google} alt="google" />
                    </div>
                    <p>Don't have an account ? Register</p>
                    <a href="" id='register'></a>
                    
                </div>
            </div>
        </div>
    )
}

export default SignInForm
