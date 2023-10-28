import React  from "react";
import styles from './Header.module.css'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Search from "../Search";

import { SearchProps } from "../Search/Search.interface";

const Header: React.FC<SearchProps> = ({searchAutocomplite}) => {

 

  

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
            <Search searchAutocomplite={searchAutocomplite}/>
            <DropdownMenu />
        </header>
    )
}

export default Header