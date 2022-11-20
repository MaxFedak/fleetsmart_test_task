import { nanoid } from "nanoid";

export const TableRows = ({items, addItem}) => {
   console.log(items)

   const deleteRowHandler = (event) =>{
      const prodName = event.target.parentElement.parentElement.firstChild.textContent;
      const indexToDelete = items.findIndex(item => item.name === prodName)
      if (indexToDelete >= 0) {
         items.splice(indexToDelete, 1);
         addItem(items)
      }
   }

   return (
      <tbody>
         {items.map(listItem => (
            <tr key={nanoid()}>
               {Object.values(listItem).map((rowElement) => (
                  <td key={nanoid()}>
                     {rowElement}
                  </td>
               ))}
               <td><button onClick={deleteRowHandler}>Test</button></td>
            </tr>
         ))}
      </tbody>
   );
}