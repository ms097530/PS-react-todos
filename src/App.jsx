import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import TodoList from './components/TodoList';

function App()
{
  // using custom hook
  // const [todos, setTodos] = useLocalStorage('todos', [])

  // using state
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState(() =>
  {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos && savedTodos !== 'undefined' && savedTodos !== 'null')
    {
      console.log('setting todos from localStorage')
      return JSON.parse(savedTodos)
    }
    else
    {
      return []
    }
  })

  // initialize with localStorage if value exists
  // useEffect(() =>
  // {
  //   const savedTodos = localStorage.getItem('todos')
  //   if (savedTodos && savedTodos !== 'undefined' && savedTodos !== 'null')
  //   {
  //     console.log('setting todos from localStorage')
  //     setTodos(JSON.parse(savedTodos))
  //   }
  // }, [])

  // trying to update todos on change to todos - not working
  useEffect(() =>
  {
    console.log('updating localStorage')
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      setTodos(prevTodos =>
      {
        let newTodos = [...prevTodos, newTodo]
        // localStorage.setItem('todos', JSON.stringify(newTodos))
        return newTodos
      })

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

      // get new array where target todo has its complete status toggle
      let newTodos = prevTodos.map((todo, i) =>
        i === matchingIndex ?
          { ...todo, completed: !todo.completed }
          : todo)
      // save new array of todos to localStorage
      // localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }

  const editTodoText = (e, id) =>
  {
    if (e.target.value.trim() !== '')
    {

      setTodos(prevTodos =>
      {
        let matchingIndex = prevTodos.findIndex(todo => todo.id === id)

        let newTodos = prevTodos.map((todo, i) =>
          i === matchingIndex ?
            { ...todo, text: e.target.value }
            : todo)
        // localStorage.setItem('todos', JSON.stringify(newTodos))
        return newTodos
      })
    }
    e.target.value = ''
  }

  const deleteTodo = (e, id) =>
  {
    setTodos(prevTodos =>
    {
      let newTodos = prevTodos.filter(todo => todo.id !== id)
      // localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
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
