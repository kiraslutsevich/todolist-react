import styles from './Todo.style.css'

const Todo = (props) => {
  const { task, deleteTaskHandler, onTaskUpdate } = props;

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={task.isActive}
        onChange={() => onTaskUpdate(task.id, { ...task, isActive: !task.isActive })}
      />
      <p className="todo-text">{task.text}</p>
      <button
        className="todo-delete"
        onClick={() => deleteTaskHandler(task.id)}
      >
        x
      </button>
    </div>
  );
};

export default Todo;