import './TodoList.style.css';
import Todo from "./Todo";

const TodoList = (props) => {
  const { arrTodo, deleteTaskHandler } = props;
  return (
    <div className="todo-list">
      {arrTodo.map((task, i) => <Todo text={task.text} id={task.id} key={i} deleteTaskHandler={deleteTaskHandler} />)}
    </div>
  )
}

export default TodoList;