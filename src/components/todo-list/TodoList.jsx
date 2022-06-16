import styles from './TodoList.module.css'
import Todo from './todo/Todo';

const TodoList = (props) => {
  const { onTodoUpdate, onTodoDelete, filteredList } = props;
  return (
    <div className={styles.todoList}>
      {filteredList.map((task) => (
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
