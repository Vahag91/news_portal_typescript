import React from 'react'
import styles from './DropdownMenu.module.css'



const DropdownMenu: React.FC = () => {

    return (
        <div>

            <label htmlFor="names" id="profile-label">
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile photo" style={{ width: "40px" }} />
                </a>
            </label>
            <select name="names" id="names">
                <option value="Tap">Tap</option>
                <option value="Settings">Settings</option>
                <option value="Profile">Profile</option>
            </select>

        </div>
    )
}

export default DropdownMenu


