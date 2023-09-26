import './App.css';
import Todos from './components/Todos';
import AddTodos from './components/addTodo';
function App() {
  return (
    <div className='App'>
      <AddTodos />
      <Todos />
    </div>
  );
}

export default App;
