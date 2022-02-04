import React from 'react';
import './cardlist.css';
import Card from '../card/Card';

const CardList = props => {
    return (
    <div className='cardlist'>
        { props.monsters.map(mon => (         
          <Card key={mon.id} monster = {mon}/>       
      ))}
    </div>
    );
};

export default CardList;