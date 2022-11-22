import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { TableRows } from '../tableRows/TableRows';
import { Input } from '../input/Input';
import { TotalPrice } from '../totalSum/TotalSum';
import './table.css';
import { SideContent } from '../sideContent/SideContent';
import { Sort } from '../sort/Sort';
import { Menu } from '../menu/Menu';

export const Table = () => {
   const [itemList, setItemList] = useState([]);

   document.title = 'Product list'

   const addItemsToArray = (newItem) => {
      if (newItem instanceof Array) {
         setItemList(itemListArray => [...newItem])
      } else {
         setItemList(itemListArray => [...itemListArray, newItem])
      }
   }

   // const headerClickHandler = e => {
   //    sortTable(e.target.textContent, itemList);
   //    addItemsToArray(itemList);
   // }

   return (

      <>
         <Menu />
         <Sort itemList={itemList} addItem={addItemsToArray} />
         <div className='content'>
            <div className='table'>
               <TableRows items={itemList} addItem={addItemsToArray} />
            </div>
            <SideContent itemList={itemList} addItemsToArray={addItemsToArray} />
         </div>
      </>
   );
}