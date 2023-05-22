import React from 'react';
import './item.css'
import DeleteItem from '../DeleteItem/DeleteItem';
import fioriture from '../../assets/img/fioriture.png'

const Item: React.FC<ItemProps> = ({ title, link }) => {
  return (
    <div className="card">
      <img className='little-shiba-right' src={fioriture} alt='cat'/>
      <img className='little-shiba-left' src={fioriture} alt='cat'/>
      <img className='little-shiba-right-bottom' src={fioriture} alt='cat'/>
      <img className='little-shiba-left-bottom' src={fioriture} alt='cat'/>
      <a className='a' href={link} target="_blank" rel="noopener noreferrer">
      <div className='card-layout'>
        <div className="card-title">{title}</div>
        <div className='card-link'>{link}</div>
      </div>
      </a>
      <DeleteItem title={title}/>
    </div>
  );
};

export default Item;

