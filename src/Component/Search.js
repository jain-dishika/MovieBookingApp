import React, { useContext, useState } from 'react'
import "./Search.css"
import { AppContext } from './Context'
const Search = () => {
  const [searchVal, setSearchVal] = useState("")
  return (
    <>
    <div className='heading-main'>
      <h1>Movie Booking Application</h1>
    </div>
    </>
  )
}

export default Search
