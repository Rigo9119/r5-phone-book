import './searchBar.css'


const SearchBar = ({ searchValue, onHandleSearch, onHandleChange }) => {

    return (
        <div className='searchBar'>
            <label className='searchBar__label'>Search Contacts</label>
            <div className='searchBar__field'>
                <input
                    className='searchBar__field__input'
                    type="search"
                    placeholder='contact to search'
                    value={searchValue}
                    onChange={(event) => onHandleChange(event)}
                />
                <button
                    className='searchBar__field__btn'
                    onClick={() => onHandleSearch(searchValue)}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar
