import React from 'react';
import './item.css'
import DeleteItem from '../DeleteItem/DeleteItem';

const Item: React.FC<ItemProps> = ({ title, link }) => {
  return (
    <div className="card">
      <a className='a' href={link} target="_blank" rel="noopener noreferrer">
      <div className='card-layout'>
        <div className="card-title">{title}</div>
        <div> {link}</div>
      </div>
      </a>
      <DeleteItem title={title}/>
    </div>
  );
};

export default Item;

