import React from 'react'

function SearchBar({ogCardsCopy, setCards}) {

  const handleTextChange=(e) => {
    const filteredCards=ogCardsCopy.filter(robot => robot.name.toLowerCase().includes(e.target.value.toLowerCase()))
    filteredCards.length>0 ? setCards(filteredCards) : setCards(0)
  }
  
  return (
    <div className="searchDiv">
      <input type="search" placeholder="search robots..." onChange={handleTextChange}/>
    </div>
  )
}

export default SearchBar
