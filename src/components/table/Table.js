import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../tableRows/TableRows';
import { Input } from '../input/Input';


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
      <>
         <table>
            <thead>
               <tr>
                  {columnNames.map(column => (
                     <th key={nanoid()}>{column}</th>
                  ))}
                  <th></th>
               </tr>
            </thead>
            <TableRows items={itemList} addItem={addItemsToArray}/>
         </table>
         <Input addItem={addItemsToArray} list={itemList}/>
      </>
   );
}