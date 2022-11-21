import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TableRow = ({row, list, changeList}) => {

   const quantityChangeHandler = (event) => {
      const curVal = event.target.value;
      event.target.defaultValue = curVal;
      const line = document.querySelector(`[data-name=${event.target.dataset.name}]`);
      const index = list.findIndex(obj => obj.name === line.textContent);
      list[index].quantity = curVal;
      changeList(list);
   }


   return (
      <>
         {Object.entries(row).map(([key, el]) => {
            if (key === 'quantity') {
               return (
                  <input data-name={row.name} key={nanoid()} type='number' className='table__element table__input' defaultValue={el} onChange={quantityChangeHandler} step={1} min={1}></input>
               )
            
            }

            if (key === 'name') {
               return (
                  <div data-name={row.name} key={nanoid()} className='table__element table__element--name' >
                     {el}
                  </div>
               );
            }
            return (            
            <div data-name={row.name} key={nanoid()} className='table__element' >
               {el}
            </div>)
         }

         )} 
      </>
   )
}