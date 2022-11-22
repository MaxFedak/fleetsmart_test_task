import { nanoid } from "nanoid";
import React from 'react';
import { TableRow } from '../tableRow/TableRow';

export const TableRows = ({items, addItem}) => {
   return (
   <>
      {items.map(row => (
         <React.Fragment key={nanoid()}>
            <TableRow row={row} list={items} changeList={addItem} key={nanoid()}/>
            <div key={nanoid()} className='table__element' data-name={row.name}></div>
         </React.Fragment>
      ))}
   </>
   );
}