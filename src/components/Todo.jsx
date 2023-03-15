export default function Todo(props)
{
    const { todo } = props
    return (
        <div>
            <p>{todo.text}</p>
        </div>
    )
}
