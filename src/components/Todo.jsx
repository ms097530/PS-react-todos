export default function Todo(props)
{
    const { todo } = props
    return (
        <li>
            <div>
                <p>{todo.text}</p>
            </div>

            <label>
                Complete
                <input type="checkbox" checked={todo.completed} />
            </label>
        </li>
    )
}
