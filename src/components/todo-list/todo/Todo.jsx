import styles from './Todo.module.css'

const Todo = (props) => {
  const { task, onTodoDelete, onTodoUpdate } = props;
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onTodoUpdate(task.id, { ...task, isCompleted: !task.isCompleted })}
      />
      <p className={styles.text}>{task.text}</p>
      <button
        className={styles.delete}
        onClick={() => onTodoDelete(task.id)}
      >
        x
      </button>
    </div >
  );
};

export default Todo;
