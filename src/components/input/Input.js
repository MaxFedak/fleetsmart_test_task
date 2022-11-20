import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Input = ({ addItem, list}) => {
   const newProduct = {
      name: undefined,
      quantity: undefined,
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
               list[productExists].quantity += newProduct.quantity;
               addItem(list)
            } else {
               addItem(newProduct);
               console.log(event)
            }
         }
      const allInputs = [...document.querySelectorAll('input')];
      allInputs.map(item => item.value = '')
   }

      // addItem(data)
   return (
      <form className='input' onSubmit={onSubmitHandler}>
         <input 
            type="text" 
            name="name" 
            placeholder='Product' 
            className='input__field input__field--text'
            onChange={onFormChangeHandler}
         ></input>
         <input 
            type="number" 
            name="quantity" 
            placeholder='Quant.'
            className='input__field input__field--number'
            onChange={onFormChangeHandler}
         ></input>
         <input
            type="number" 
            name="price" 
            placeholder='Price' 
            className='input__field input__field--number'
            onChange={onFormChangeHandler}></input>
         <button className='input__button' type='submit'>
            <FontAwesomeIcon className='input__delete-icon' icon={faPlus} rotation={35} />
         </button>
      </form>
   )
}