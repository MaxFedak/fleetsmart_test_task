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
            }
         }
      const allInputs = [...document.querySelectorAll('input')];
      allInputs.map(item => item.value = '')
   }

      // addItem(data)
   return (
      <form onSubmit={onSubmitHandler}>
         <input type="text" name="name" placeholder='Product' onChange={onFormChangeHandler}></input>
         <input type="number" name="quantity" onChange={onFormChangeHandler}></input>
         <input type="number" name="price" placeholder='Price' onChange={onFormChangeHandler}></input>
         <button type='submit'>Add to cart</button>
      </form>
   )
}