import { nanoid } from "nanoid";
import { TableRow } from '../tableRow/TableRow';


export const TableRows = ({items, addItem}) => {
   return (
   <>
      {items.map(row => (
         <>
            <TableRow row={row} list={items} changeList={addItem} key={nanoid()}/>
            <div key={nanoid()} className='table__element' data-name={row.name} >
            </div>
         </>
      ))}
   </>
   );
}