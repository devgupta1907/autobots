import React from 'react';

import { Card } from '../card/card.components.jsx';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.autobots.map(autobot => (
      <Card key={autobot.id} autobot={autobot} />
    ))}
  </div>
)