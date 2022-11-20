import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../tableRows/TableRows';
import { Input } from '../input/Input';
import { TotalPrice } from '../totalSum/TotalSum';
import './table.css';

const statArr = {
   name: 'asc',
   quantity: 'asc',
   price: 'asc',
}

export const sortTable = (key, itemList) => {
   
   switch (key) {
      case 'name':
         statArr[key] === 'asc'
            ? itemList.sort((a, b) => a[key].localeCompare(b[key]))
            : itemList.sort((a, b) => b[key].localeCompare(a[key]));
         break;
      
      case 'quantity':
      case 'price':
         statArr[key] === 'asc'
            ? itemList.sort((a, b) => a[key] - b[key])
            : itemList.sort((a, b) => b[key] - a[key]);
         break;
      
      default:
         throw new Error('wrong key');
   }
   test(key);
}

const test = (target) => {
   statArr[target] = statArr[target] === 'asc'
      ? 'desc'
      : 'asc';
}

export const Table = ({columnNames}) => {
   const [itemList, setItemList] = useState([]);

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
      <div className='content'>
         <table className='table'>
            <thead className='table__header'>
               <tr >
                  {columnNames.map(column => (
                     <th key={nanoid()} className='table__element table__element--header' onClick={headerClickHandler}>{column}</th>
                  ))}
                  <th></th>
               </tr>
            </thead>
            <TableRows items={itemList} addItem={addItemsToArray}/>
         </table>
         <Input addItem={addItemsToArray} list={itemList}/>
         <TotalPrice list={itemList} />
      </div>
   );
}