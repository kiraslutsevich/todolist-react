import './todo.css'

const Todo = (props) => {
  const { task } = props
  return (
    <div className="todo">
      <p className="todo-p">{task}</p>
      <button className='todo-delete'>x</button>
    </div>
  )
}

export default Todo;