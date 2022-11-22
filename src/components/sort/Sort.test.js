import { sortTable, sortStatus } from './Sort';

describe('sortStatus functionality', () => {
    const itemList = [{
        "name": "apple",
        "quantity": 1,
        "price": 4
    }, {
        "name": "milk",
        "quantity": 1,
        "price": 2
    }, {
        "name": "meat",
        "quantity": 1,
        "price": 10
    }
    ]
   it('sortTable by name changes from asc to desc', () => {
       const sortOptions =  {
           name: 'desc',
           quantity: 'asc',
           price: 'asc',
       }
       const sortBy = 'name';
       sortTable(sortBy, itemList)
     expect(sortStatus).toEqual(sortOptions)
   }) 
   it('sortTable by name change from desc to asc', () =>{
      sortTable('name', itemList)
   expect(sortStatus).toEqual({
      name: 'asc',
      quantity: 'asc',
      price: 'asc',
   })
   })
   it('sortTable by quantity change from asc to desc', () => {
      sortTable('quantity', itemList)
      expect(sortStatus).toEqual({
         name: 'asc',
         quantity: 'desc',
         price: 'asc',
      })
   })
   it('sortTable by price change from asc to desc', () => {
      sortTable('price', itemList)
      expect(sortStatus).toEqual({
         name: 'asc',
         quantity: 'desc',
         price: 'desc',
      })
   })
   it('sortTable by quantity change from desc to asc', () => {
      sortTable('quantity', itemList)
      expect(sortStatus).toEqual({
         name: 'asc',
         quantity: 'asc',
         price: 'desc',
      })
   })
 })