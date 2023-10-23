import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducers/productsSlice'; // Replace with the correct path to your counterSlice file

import './App.css';
import Header from './Components/Header';
import OrderDetailsCard from './Components/OrderDetailsCard';
import DataGridComp from './Components/DataGridComp';

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <OrderDetailsCard />
      <DataGridComp />
    </div>
  );
}

export default App;
