import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
      <tbody>
         {items.map(listItem => (
            <tr key={nanoid()} className='table__row'>
               {Object.values(listItem).map((rowElement) => (
                  <td key={nanoid()} className='table__element'>
                     {rowElement}
                  </td>
               ))}
               <td data-name={listItem.name} className='table__element table__delete-but'>
                     <FontAwesomeIcon className='table__delete-icon' icon={faTrash}  onClick={deleteRowHandler} />
               </td>
            </tr>
         ))}
      </tbody>
   );
}