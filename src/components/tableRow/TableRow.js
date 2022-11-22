import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './tableRow.css';

export const TableRow = ({row, list, changeList}) => {

   const quantityChangeHandler = (event) => {
      const curVal = event.target.value;
      event.target.defaultValue = curVal;
      const selector = event.target.dataset.name;
      const index = list.findIndex(obj => 'q' + obj.name === selector);

      list[index].quantity = curVal;
      changeList(list);
   }

   const deleteRowHandler = (event) => {
      const prodName = event.target.parentElement.parentElement.firstChild.dataset.name;

      const indexToDelete = list.findIndex(item => '' + item.name === '' + prodName);

      if (indexToDelete >= 0) {
         list.splice(indexToDelete, 1);
         changeList(list);
      }
   }

   return (
      <div className='item-card'>
         <div className='item-card__img'></div>
         <div className='item-card__text-box'>
            {Object.entries(row).map(([key, el]) => {
               if (key === 'quantity') {
                  return (
                     <input 
                        data-name={'q' + row.name} 
                        key={nanoid()} 
                        type='number' 
                        className='item-card__qty' 
                        defaultValue={el} 
                        onChange={quantityChangeHandler} 
                        step={1} 
                        min={1}
                     ></input>
                  )
               
               }

               if (key === 'name') {
                  return (
                     <div data-name={row.name} key={nanoid()} className='item-card__name'>
                        {el}
                     </div>
                  );
               }

               return (            
               <div 
                  data-name={row.name} 
                  key={nanoid()} 
                  className='item-card__price' >
                  {el.toLocaleString("en-GB", {style:"currency", currency:"GBP"})}
               </div>)
            }


            )} 
            <FontAwesomeIcon 
               className='item-card__delete-icon' 
               icon={faTrash}  
               onClick={deleteRowHandler}
            />
         </div>
      </div>
   );
}