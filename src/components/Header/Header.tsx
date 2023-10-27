import React from "react";
import styles from './Header.module.css'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
  
const Header: React.FC = () => {


    return (
        <header className={styles.menu}>
            <div> <a href="#"><span>Logo</span></a></div>
            <nav className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
            </nav>
            <DropdownMenu/>
        </header>
    )
}

export default Header