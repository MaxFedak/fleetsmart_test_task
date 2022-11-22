import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons'
import './sort.css'


const sortStatus = {
   name: 'asc',
   quantity: 'asc',
   price: 'asc',
}

export const sortTable = (key, itemList) => {

   switch (key) {
      case 'name':
         sortStatus[key] === 'asc'
            ? itemList.sort((a, b) => ('' + a.name).localeCompare('' + b.name))
            : itemList.sort((a, b) => ('' + b.name).localeCompare('' + a.name));
         break;
      
      case 'quantity':
      case 'price':
         sortStatus[key] === 'asc'
            ? itemList.sort((a, b) => a[key] - b[key])
            : itemList.sort((a, b) => b[key] - a[key]);
         break;
      
      default:
         throw new Error('wrong key');
   }
   changeSortStatus(key);
}

const changeSortStatus = (target) => {
   sortStatus[target] = sortStatus[target] === 'asc'
      ? 'desc'
      : 'asc';
}

export const Sort = ({itemList, addItem}) => {
   const sortClickHandler = (event) =>{
      sortTable(event.target.dataset.key, itemList)
      addItem(itemList);
   }
   
   return (
      <div className='sort'>
         <button data-key="name" className='sort__name' onClick={sortClickHandler} >
            <FontAwesomeIcon icon={faSort} className="sort__icon" />
            {' name'}
         </button>
         <button data-key="quantity" className='sort__qty' onClick={sortClickHandler}>
            <FontAwesomeIcon icon={faSort} className="sort__icon" />
            {' quantity'}
         </button>
         <button data-key="price" className='sort__price' onClick={sortClickHandler}>
            <FontAwesomeIcon icon={faSort} className="sort__icon" />
            {' price'}
         </button>
      </div>
   )
}