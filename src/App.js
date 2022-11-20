import './App.css';
import { Table } from './components/table/Table';

function App() {
  return (
      <Table columnNames={['name','quantity','price']} />
  );
}

export default App;
