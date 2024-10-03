import React from 'react'

const Search = ({ search, setSearch,handleSearch }) => {
    return (
        <>
            <div className="searchengine">
                <input className='citysearch'
                    placeholder="type the city name"
                    type="search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='searchbtn' onClick={handleSearch}>Weather Search</button>

            </div>
        </>
    )
}

export default Search
