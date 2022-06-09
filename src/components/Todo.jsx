import './Todo.style.css'

const Todo = (props) => {
  const { text, id, deleteTaskHandler } = props;
  return (
    <div className="todo">
      <p className="todo-p">{text}</p>
      <button className="todo-delete" id={id} onClick={() => deleteTaskHandler(id)}>x</button>
    </div >
  )
}

export default Todo;