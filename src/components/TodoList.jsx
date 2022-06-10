import styles from './TodoList.module.css'
import Todo from './Todo';

const TodoList = (props) => {
  const { onTaskUpdate, arrTodo, onTaskDelete } = props;
  return (
    <div className={styles.todoList}>
      {arrTodo.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onTaskDelete={onTaskDelete}
          onTaskUpdate={onTaskUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
