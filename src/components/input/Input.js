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
         

   }

   return (
      <form className='table input' onSubmit={onSubmitHandler}>
         <input 
            className="table__element input__new"
            type="text" 
            name="name" 
            placeholder='Product*' 
            onChange={onFormChangeHandler}
            required
         ></input>
         <input 
            className="table__element input__new"
            type="number" 
            name="quantity" 
            placeholder='Quant.'
            min={1}
            onChange={onFormChangeHandler}
         ></input>
         <input
            className="table__element input__new"
            type="number" 
            name="price" 
            placeholder='Price*' 
            step={0.01}
            min={1}
            onChange={onFormChangeHandler}
            required
            ></input>
         <button className="table__element table__add-button" type='submit'>
            <FontAwesomeIcon className='table__add-icon' icon={faPlus} />
         </button>
      </form>
   )
}

