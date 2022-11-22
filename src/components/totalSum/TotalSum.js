import './totalSum.css'

export const TotalPrice = ({list}) => {
   const totPrice = list.reduce((sum, el) => sum + (el.price * el.quantity), 0);

   return (
      <div className='sum'>
         <h2 className='sum__text'>Total price:</h2>
         <h1 className='sum__value'>
            {`${totPrice.toLocaleString("en-GB", {style:"currency", currency:"GBP"})}`}
         </h1>
      </div>
   );
}