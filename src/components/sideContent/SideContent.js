import React from 'react';
import { Input } from '../input/Input';
import { TotalPrice } from '../totalSum/TotalSum';
import './sideContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const SideContent = ({itemList, addItemsToArray}) => {
   return (
      <div className='side-content'>
         <h1>
            <FontAwesomeIcon icon={faCartShopping} />
            Product card
         </h1>
         <Input addItem={addItemsToArray} list={itemList}/>
         <TotalPrice list={itemList} />
      </div>
   )
}