import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TableRow } from '../tableRow/TableRow';
import { Input } from '../input/Input';

export const TableRows = ({items, addItem}) => {

   const deleteRowHandler = (event) => {
      const prodName = event.target.parentElement.parentElement.dataset.name;

      const indexToDelete = items.findIndex(item => '' + item.name === '' + prodName)
      if (indexToDelete >= 0) {
         items.splice(indexToDelete, 1);
         addItem(items)
      }
   }

   return (
   <>
      {items.map(row => (
         <>
            <TableRow row={row} list={items} changeList={addItem} key={nanoid()}/>
            <div key={nanoid()} className='table__element' data-name={row.name} >
               <FontAwesomeIcon key={nanoid()} className='table__delete-icon' icon={faTrash}  onClick={deleteRowHandler} />
            </div>
         </>
      ))}
   </>
   );
}