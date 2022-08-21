import React, { useState } from 'react';

const Cards = (props) => {
  return (
    <div className="card" onClick={() => props.incrementScore(props.name)}>
      <img className="cardImage" src={props.image} alt={props.name} />
      <div className="cardName">{props.name}</div>
    </div>
  );
};

export default Cards;
