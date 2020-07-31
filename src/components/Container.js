import React, {useState, useEffect} from 'react'
import Card from './Card';
import SearchBar from './SearchBar';
import axios from 'axios';

function Container() {
  const [cards, setCards]=useState([]);
  const [ogCardsCopy, setCopy]= useState([]);
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      const data=res.data;
      setCards(data);
      setCopy(data);
    })
    .catch(err => console.log(err));
  },[])

 
  
  return (
    <div className="container">
      <header className="header"><h1>Hello Robots</h1></header>
      <SearchBar ogCardsCopy={ogCardsCopy} setCards={setCards}  />
      <Card cards={cards}/>
    </div>
  )
}

export default Container
