import React, {useState, useEffect} from 'react'

function SearchBar({ogCardsCopy, setCards}) {
  const [scrollVar, setIsScroll]=useState(false)

  const handleTextChange=(e) => {
    const filteredCards=ogCardsCopy.filter(robot => robot.name.toLowerCase().includes(e.target.value.toLowerCase()))
    filteredCards.length>0 ? setCards(filteredCards) : setCards(0)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollVar=window.scrollY;
      scrollVar>=159 ? setIsScroll(true) : setIsScroll(false);
    })
  }, [])
  
  return (
    <div className={!scrollVar ? "searchDiv" : "searchDivScroll"}>
      <input type="search" placeholder="search robots..." onChange={handleTextChange}/>
    </div>
  )
}

export default SearchBar
