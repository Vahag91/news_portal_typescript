import React from "react";
import styles from './header.module.css'

export default function Header(){

    return(
      <div className={styles.menu}>
        <div> <a href="#"><span>Logo</span></a></div>
        <div className={styles.list}> 
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About us</li>
            </ul>
        </div>
      </div>  
    )
}