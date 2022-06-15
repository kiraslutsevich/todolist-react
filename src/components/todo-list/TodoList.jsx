import styles from './TodoList.module.css'
import Todo from './todo/Todo';

const TodoList = (props) => {
  const { onTodoUpdate, onTodoDelete, todoList } = props;
  return (
    <div className={styles.todoList}>
      {todoList.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onTodoDelete={onTodoDelete}
          onTodoUpdate={onTodoUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
