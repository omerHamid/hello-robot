import React from 'react'


function Card({cards}) {
  return (
    <div className="cardSpace">
       { cards!==0 ? cards.map((card, index) => 
        <div key={index}  className="card">
          <img draggable ="false" alt="" src={`https://robohash.org/${card.id*10}.png?size=180x180`}/> <div className="text">
            <h3>{card.name}</h3>
            <h5>{card.email}</h5> 
          </div>
        </div> )
        :<h1 className="noRobots">no such robots<br/>:(</h1>}
   </div>
  )
}

export default Card
