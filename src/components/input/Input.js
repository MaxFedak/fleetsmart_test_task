import './input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Input = ({ addItem, list}) => {
   const newProduct = {
      name: undefined,
      quantity: 1,
      price: undefined,
   };

   const onFormChangeHandler = (event) =>{
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      newProduct[fieldName] = +fieldValue || fieldValue;
   }

   const onSubmitHandler = (event) =>{
      event.preventDefault();
         if (Object.values(newProduct).every(product => product)) {
            const productExists = list.findIndex(item => item.name === newProduct.name);

            if (productExists !== -1) {
               list[productExists].quantity += +newProduct.quantity;
               list[productExists].price = +newProduct.price;
               addItem(list)
            } else {
               addItem(newProduct);
               console.log(event)
            }

            const allInputs = [...document.querySelectorAll('input')];
            allInputs.map(item => item.value = '')
         } else {
            alert('Please fill all required fields *');
         }

   }

   return (
      <form className='table input' onSubmit={onSubmitHandler}>
         <input 
            className="table__element table__input"
            type="text" 
            name="name" 
            placeholder='Product*' 
            onChange={onFormChangeHandler}
         ></input>
         <input 
            className="table__element table__input"
            type="number" 
            name="quantity" 
            placeholder='Quant.'
            onChange={onFormChangeHandler}
         ></input>
         <input
            className="table__element table__input"
            type="number" 
            name="price" 
            placeholder='Price*' 
            step={0.01}
            onChange={onFormChangeHandler}></input>
         <button className="table__element table__add-button" type='submit'>
            <FontAwesomeIcon className='table__add-icon' icon={faPlus} />
         </button>
      </form>
   )
}

