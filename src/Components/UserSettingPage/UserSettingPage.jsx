import React from 'react';

// Importing Css file
import './UserSettingPage.css'
import user from './Image/user.svg'
function UserSettingPage() {
  return <div>
            <div className="main-container">
                <img src={user} alt="" />
                <h5>Salim Khan</h5>
                <h6>First Name</h6>
                <input type="text" />
                <h6>Last Name</h6>
                <input type="text" />
                <h6>Mobile No</h6>
                <input type="text" />
                <h6>Email Id</h6>
                <input type="email"/><br />
                <button>Save changes</button>
            </div>
  </div>;
}

export default UserSettingPage;
