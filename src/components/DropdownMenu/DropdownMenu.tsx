import React, { useState } from 'react'
import styles from './DropdownMenu.module.css'



const DropdownMenu: React.FC = () => {

    const [userMenuTap, setUserMenuTap] = useState<boolean>(false)

    const userMenuChange = (): void => {
        setUserMenuTap(!userMenuTap)
    }
    return (
        <ul>
            <li className={styles.mainLi}>
                <a href="#"><img   onClick={userMenuChange} src="https://avatars.githubusercontent.com/u/98681?v=4" alt="profile" className={styles.image} /></a>
              
              { userMenuTap ? <ul className={styles.dropdown}>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Illustration</a></li>
                    <li><a href="#">Iconography</a></li>
                </ul> :null

              }  
            </li>
        </ul>

    )
}

export default DropdownMenu


