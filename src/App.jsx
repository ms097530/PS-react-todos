import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App()
{

  const [todos, setTodos] = useState([])

  const addTodo = (e) =>
  {
    if (e.target.value.trim() === '')
      return

    // create todo object
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      completed: false
    }

    // add new todo to the array
    setTodos(prevTodos => [...prevTodos, newTodo])

    // reset the input
    e.target.value = ''

  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
