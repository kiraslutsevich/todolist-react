import styles from './Todo.module.css'

const Todo = (props) => {
  const { task, onTaskDelete, onTaskUpdate } = props;
  console.log(task.display)
  return (
    <div className={styles.todo} >
      <input
        type="checkbox"
        checked={task.isActive}
        onChange={() => onTaskUpdate(task.id, { ...task, isActive: !task.isActive })}
      />
      <p className={styles.text}>{task.text}</p>
      <button
        className={styles.delete}
        onClick={() => onTaskDelete(task.id)}
      >
        x
      </button>
    </div >
  );
};

export default Todo;