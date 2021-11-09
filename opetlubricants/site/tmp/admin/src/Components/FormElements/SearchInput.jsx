import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({onSearch, ...props}) => {
    const [searchVal, setSearchVal] = useState("");

    return (
        <div className="form-box">
            <input value={searchVal}
                   className="form-input input-search" type="search"
                   onKeyPress={event => {if (event.which===13) {onSearch(searchVal)}}}
                   onChange={(event)=>{setSearchVal(event.target.value)}}  {...props}/>
            <FontAwesomeIcon onClick={() => {onSearch(searchVal)}} className="box-icon" icon={faSearch} />
        </div>
    )
};

export default SearchInput;