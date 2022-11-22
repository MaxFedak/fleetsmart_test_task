import React, { useState } from 'react';
import { TableRows } from '../tableRows/TableRows';
import { SideContent } from '../sideContent/SideContent';
import { Sort } from '../sort/Sort';
import { Menu } from '../menu/Menu';
import './table.css';

export const Table = () => {
   const [itemList, setItemList] = useState([]);

   document.title = 'Product list';

   const addItemsToArray = (newItem) => {
      if (newItem instanceof Array) {
         setItemList(itemListArray => [...newItem])
      } else {
         setItemList(itemListArray => [...itemListArray, newItem])
      }
   }

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