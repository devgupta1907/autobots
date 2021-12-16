//  This file contains data for a single card.

import React from 'react';

import './card.styles.css';


export const Card = props => (
  <div className='card-container'>
    <img
      alt='autobot'
      src={`https://robohash.org/${props.autobot.id}?set=set1&bgset=bg1&size=180x180`}
    />
    <h2> {props.autobot.name} </h2>
    <p> {props.autobot.email} </p>
  </div>
);