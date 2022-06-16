import styles from './TodoList.module.css'
import Todo from './todo/Todo';

const TodoList = (props) => {
  const { onTodoUpdate, onTodoDelete, filteredList, editTask } = props;
  return (
    <div className={styles.todoList}>
      {filteredList.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onTodoDelete={onTodoDelete}
          onTodoUpdate={onTodoUpdate}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
