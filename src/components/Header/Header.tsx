import React from "react";
import styles from './Header.module.css'

  
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
        </header>
    )
}

export default Header