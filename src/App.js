import './App.css';
import { Table } from './components/table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const columnNames = ['name','quantity','price'];

function App() {
  return (
      <>
         <div className='content'>
            <h1 className="content__header">
               <FontAwesomeIcon icon={faCartShopping} />
               {' Product cart'}
            </h1>
            <Table columnNames={columnNames} />
         </div>
      </>
  );
}

export default App;
