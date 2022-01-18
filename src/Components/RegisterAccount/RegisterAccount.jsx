import React from 'react'

// importing an image
import facebook from './Images/facebook.svg'
import google from './Images/google.svg'

// importing css file 
import './RegisterAccount.css'

{ <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100&display=swap');
    </style> }
function RegisterAccount() {
    return (
        <div>
            <div className="main-container">
                <div className="sub-container">
                    <h4>Register Account</h4>
                    <h5>Get your free JYT account now</h5>
                    <h6>Email Id</h6>
                    <input type="email" name="userEmailId" placeholder='Enter Email Id'/>
                    <h6>Username</h6>
                    <input type="text" name="userInput" placeholder='Enter the username' />
                    <a href="">Forget Password ?</a>
                    <h6>Password</h6>
                    <input type="password" name="password" placeholder='Enter Password' />
                    <p>By registering you agree to the JYT Terms of Use</p>
                    <button>Log In</button>
                    <p id='signUpUsing'>Sign up using</p>
                    <div className="icon-images">
                        <img src={facebook} alt={facebook} />
                        <img src={google} alt={google} />
                    </div>
                    <p id='alreadyHaveAnAccount'>Already have an account ?
                    <a id='logIn' href="">Log In</a>
                     </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterAccount
