import './TodoList.style.css';
import Todo from './Todo';

const TodoList = (props) => {
  const { onTaskUpdate, arrTodo, deleteTaskHandler } = props;
  return (
    <div className="todo-list">
      {arrTodo.map((task) => (
        <Todo
          key={task.id}
          task={task}
          deleteTaskHandler={deleteTaskHandler}
          onTaskUpdate={onTaskUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
