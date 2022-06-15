import { useState } from 'react';

import styles from './TodoInput.module.css'

const TodoInput = (props) => {
  const { onTodoCreate } = props;
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
          onTodoCreate(value)
          setValue('')
        }}
      >
        +
      </button>
    </div>
  )
}

export default TodoInput;