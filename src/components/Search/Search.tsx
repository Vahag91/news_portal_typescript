import React, { useState, useEffect, useRef } from 'react'
import styles from './Search.module.css'
import { Item, SearchProps } from './Search.interface'


const Search: React.FC<SearchProps> = ({ items }) => {

  const [searchText, setSearchText] = useState<string>('')
  const [filtredItems, setFiltredItems] = useState<Item[]>([])
  const [dropdown, setDropdown] = useState<boolean>(false)
  const inputRef = useRef(null);


  const handleSearch = (text: string): void => {
    const filtred = items.filter((item) => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    }).sort((a, b) => b.rating - a.rating)

    setFiltredItems(filtred)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value
    setSearchText(text)
    handleSearch(text)
  }

  const handleSelectItem = (item: Item): void => {
    setSearchText(item.text)
    setFiltredItems([])
  }

  const handleInput = (): void => {
    const results = items.sort((a, b) => b.rating - a.rating).slice(0, 3)
    setFiltredItems(results)
  

  }


  useEffect(() => {
   
    const handleClick = () => {

      if(inputRef.current) {
        setDropdown(!dropdown)
      
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener('click', handleClick);
    };
  })



  return (
    <div className={styles.searchBox}>
      <input
        type='text'
        placeholder='Search...'
        className={styles.input}
        onChange={handleInputChange}
        onClick={handleInput}
        value={searchText}
        ref={inputRef}
      />

      <ul className={styles.list}>
        {dropdown ?
          filtredItems.map((item) => {
            return (
              <li key={item.text} onClick={() => handleSelectItem(item)}>
                {item.text} / {item.rating}
              </li>
            )
          }) : null
        }
      </ul>
    </div>
  )
}

export default Search