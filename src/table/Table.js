import React, { useState } from 'react';
import { nanoid } from "nanoid";


export const Table = ({columnNames}) => {
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
         </table>
      </>
   );
}