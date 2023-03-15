import Todo from "./Todo"

export default function TodoList(props)
{
    const { todos, addTodo, toggleTodoStatus, editTodoText, deleteTodo } = props

    const submitTodo = (e) =>
    {
        // console.log(e.key)
        if (e.key === 'Enter')
            addTodo(e)
    }

    const completedTodos = todos.filter(todo => todo.completed)
    const incompleteTodos = todos.filter(todo => !todo.completed)

    return (
        <>
            <h2>Create Todo</h2>
            <input type="text" placeholder="Walk the dog..." name="" id="" onKeyDown={submitTodo} />
            <h3>Todos</h3>
            <ul className="todolist">
                {incompleteTodos.length > 0 ? '' : <p>No todos!</p>}
                {
                    incompleteTodos.map(incompleteTodo =>
                        <Todo
                            todo={incompleteTodo}
                            key={incompleteTodo.id}
                            toggleComplete={toggleTodoStatus}
                            editText={editTodoText}
                            deleteTodo={deleteTodo} />)
                }
            </ul>
            <h3>Completed Todos</h3>
            <ul className="todolist">
                {completedTodos.length > 0 ? '' : <p>No todos!</p>}
                {
                    completedTodos.map(completedTodo =>
                        <Todo
                            todo={completedTodo}
                            key={completedTodo.id}
                            toggleComplete={toggleTodoStatus}
                            editText={editTodoText}
                            deleteTodo={deleteTodo} />)
                }
            </ul>
        </>
    )
}
