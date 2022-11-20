export const TotalPrice = ({list}) => {
   const totPrice = list.reduce((sum, el) => sum + (el.price * el.quantity), 0);
   return (
      <p>
         {`Total price: ${totPrice}`}
      </p>
   )
}