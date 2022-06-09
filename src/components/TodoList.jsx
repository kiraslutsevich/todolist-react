import './todo-list.css';
import Todo from "./Todo";

const TodoList = (props) => {
  const { arrTodo } = props
  return (
    <div className="todo-list">
      {arrTodo.map((task, i) => <Todo task={task} key={i} />)}
    </div>
  )
}

export default TodoList;