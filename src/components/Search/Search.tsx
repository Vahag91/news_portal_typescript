import React from 'react'
import { useState } from 'react'
import { SearchProps,Autocomplete } from './Search.interface';


const Search: React.FC<SearchProps> = ({ searchAutocomplite }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [highRatingResults, sethighRatingResults] = useState<object[]>([])
    const [showDropdown, setShowDropdown] = useState(false);





    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value);
        console.log(searchValue);


    }

    const handleChange = (): void => {

        const results = searchAutocomplite.sort((a, b) => b.rating - a.rating).slice(0, 3)
        sethighRatingResults(results)
        console.log(results)
    }




    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onClick={handleChange}
                onChange={handleInputChange}
                name=""
                id=""
                placeholder="Enter text..." />
            <button> Submit</button>

            {showDropdown ? (
                <ul>
                    {highRatingResults.map((item: object) => (
                        <li key={item.rating}>{item.text}</li>
                    ))}
                </ul>

            ) : null}

        </div>
    )
}

export default Search