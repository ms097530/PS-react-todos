import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App()
{

  const [todos, setTodos] = useState([])

  const addTodo = (e) =>
  {
    if (e.target.value.trim() !== '')
    {

      // create todo object
      const newTodo = {
        text: e.target.value,
        id: Date.now(),
        completed: false
      }

      // add new todo to the array
      setTodos(prevTodos => [...prevTodos, newTodo])
    }

    // reset the input
    e.target.value = ''
  }

  const toggleCompleteTodo = (e, id) =>
  {
    setTodos(prevTodos =>
    {
      // find element in todos that is being toggled
      let matchingIndex = prevTodos.findIndex(todo => todo.id === id)

      // return new todos array where todo at matchingIndex has it's completed value toggled
      return prevTodos.map((todo, i) =>
        i === matchingIndex ?
          { ...todo, completed: !todo.completed }
          : todo)
    })
  }

  const editTodoText = (e, id) =>
  {
    if (e.target.value.trim() !== '')
    {

      setTodos(prevTodos =>
      {
        let matchingIndex = prevTodos.findIndex(todo => todo.id === id)

        return prevTodos.map((todo, i) =>
          i === matchingIndex ?
            { ...todo, text: e.target.value }
            : todo)
      })
    }
    e.target.value = ''
  }

  const deleteTodo = (e, id) =>
  {
    setTodos(prevTodos =>
    {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoList todos={todos} addTodo={addTodo} toggleTodoStatus={toggleCompleteTodo} editTodoText={editTodoText} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
