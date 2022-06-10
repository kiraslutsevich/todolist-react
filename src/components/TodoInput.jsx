import { useState } from 'react';

import styles from './TodoInput.module.css'

const TodoInput = (props) => {
  const { onAddNewTask } = props;
  const [value, setValue] = useState('');
  return (
    <div
      className={styles.input}
    >
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button
        className={styles.btn}
        onClick={() => {
          onAddNewTask(value)
          setValue('')
        }}
      >
        +
      </button>
    </div>
  )
}

export default TodoInput;