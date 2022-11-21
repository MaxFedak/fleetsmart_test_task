import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TableRow = ({row}) => {
   
   return (
      <>
         {Object.values(row).map(el => (
            <div key={nanoid()} className='table__element'>
               {el}
            </div>
         ))} 
      </>
   )
}