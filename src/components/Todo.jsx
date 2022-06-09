import styles from './Todo.module.css'

const Todo = (props) => {
  const { task, deleteTaskHandler, onTaskUpdate } = props;

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={task.isActive}
        onChange={() => onTaskUpdate(task.id, { ...task, isActive: !task.isActive })}
      />
      <p className={styles.todoText}>{task.text}</p>
      <button
        className={styles.todoDelete}
        onClick={() => deleteTaskHandler(task.id)}
      >
        x
      </button>
    </div>
  );
};

export default Todo;