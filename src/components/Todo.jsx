import { useState, useRef, useEffect } from "react"

export default function Todo(props)
{
    const { todo, toggleComplete, editText, deleteTodo } = props
    let editRef = useRef(null)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() =>
    {
        if (isEditing)
            editRef.current.focus()
    }, [isEditing])

    const handleChange = (e) =>
    {
        toggleComplete(e, todo.id)
    }

    const openEdit = (e) =>
    {
        setIsEditing(true)
        editRef.current.focus()
    }

    const updateText = (e) =>
    {
        if (e.key === 'Enter')
        {
            editText(e, todo.id)
            setIsEditing(false)
        }
    }

    const handleDeleteTodo = (e) =>
    {
        deleteTodo(e, todo.id)
    }

    return (
        <li>
            <div>
                <p onClick={openEdit}>{todo.text}</p>
                {/* {
                    isEditing && */}
                <input
                    type="text"
                    placeholder="Update todo"
                    onKeyDown={updateText}
                    style={{ display: isEditing ? 'inline-block' : 'none' }}
                    ref={editRef} />
                {/* } */}
            </div>

            <label>
                Complete
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={todo.completed} />
            </label>
            <button onClick={handleDeleteTodo}>DELETE</button>
        </li>
    )
}
