import styles from './TodoList.module.css'
import Todo from './Todo';

const TodoList = (props) => {
  const { onTaskUpdate, currentArrTodo, onTaskDelete } = props;
  return (
    <div className={styles.todoList}>
      {currentArrTodo.map((task) => (
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
