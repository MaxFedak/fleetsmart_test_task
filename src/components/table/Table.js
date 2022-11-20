import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../tableRows/TableRows';
import { Input } from '../input/Input';
import { TotalPrice } from '../totalSum/TotalSum';
import './table.css';


export const Table = ({columnNames}) => {
   const [itemList, setItemList] = useState([]);

   const addItemsToArray = (newItem) => {
      if (newItem instanceof Array) {
         setItemList(itemListArray => [...newItem])
      } else {
         setItemList(itemListArray => [...itemListArray, newItem])
      }
   }

   return (
      <div className='content'>
         <table className='table'>
            <thead className='table__header'>
               <tr >
                  {columnNames.map(column => (
                     <th key={nanoid()} className='table__element'>{column}</th>
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