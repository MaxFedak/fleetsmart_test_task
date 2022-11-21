import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../tableRows/TableRows';
import { Input } from '../input/Input';
import { TotalPrice } from '../totalSum/TotalSum';
import './table.css';

const sortStatus = {
   name: 'asc',
   quantity: 'asc',
   price: 'asc',
}

export const sortTable = (key, itemList) => {

   switch (key) {
      case 'name':
         sortStatus[key] === 'asc'
            ? itemList.sort((a, b) => ('' + a.name).localeCompare('' + b.name))
            : itemList.sort((a, b) => ('' + b.name).localeCompare('' + a.name));
         break;
      
      case 'quantity':
      case 'price':
         sortStatus[key] === 'asc'
            ? itemList.sort((a, b) => a[key] - b[key])
            : itemList.sort((a, b) => b[key] - a[key]);
         break;
      
      default:
         throw new Error('wrong key');
   }
   test(key);
}

const test = (target) => {
   sortStatus[target] = sortStatus[target] === 'asc'
      ? 'desc'
      : 'asc';
}

export const Table = ({columnNames}) => {
   const [itemList, setItemList] = useState([]);

   document.title = 'Product list'

   const addItemsToArray = (newItem) => {
      if (newItem instanceof Array) {
         setItemList(itemListArray => [...newItem])
      } else {
         setItemList(itemListArray => [...itemListArray, newItem])
      }
   }

   const headerClickHandler = e => {
      sortTable(e.target.textContent, itemList);
      addItemsToArray(itemList);
   }

   return (
      <>
         <div className='table'>
            {columnNames.map(item => (
               <div key={nanoid()} className='table__element table__header' onClick={headerClickHandler}>
                  {item}
               </div>
            ))}
            <div className='table__element'></div>
            <TableRows items={itemList} addItem={addItemsToArray} />
         </div>
         <Input addItem={addItemsToArray} list={itemList}/>
         <TotalPrice list={itemList} />
      </>
   );
}