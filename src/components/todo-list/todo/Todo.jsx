import { isContentEditable } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import styles from './Todo.module.css'

const Todo = (props) => {
  const { task, onTodoDelete, onTodoUpdate, editTask } = props;
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onTodoUpdate(task.id, { ...task, isCompleted: !task.isCompleted })}
      />
      <p
        className={styles.text}
        onDoubleClick={() => editTask(task.id)}
      >

        {task.text}
      </p>
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
