import Todo from "./Todo"

export default function TodoList(props)
{
    const { todos, addTodo } = props

    const submitTodo = (e) =>
    {
        // console.log(e.key)
        if (e.key === 'Enter')
            addTodo(e)
    }

    return (
        <>
            <p>Create Todo</p>
            <input type="text" placeholder="Walk the dog..." name="" id="" onKeyDown={submitTodo} />
            <p>Todos Length: {todos.length}</p>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id} />)
            }
        </>
    )
}
