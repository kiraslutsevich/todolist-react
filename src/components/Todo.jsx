const Todo = (props) => {
  const { task } = props
  return (
    <div className="todo">{task}</div>
  )
}

export default Todo;