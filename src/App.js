import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch()

  const increment = ()=>{
    dispatch (actions.increment())
  }
  const decrement = ()=>{
    dispatch (actions.decrement())
  }
  const addBy = ()=>{
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App">
      <h1>counter</h1>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={addBy}>Add by 10</button>

      
    </div>
  );
}

export default App;
