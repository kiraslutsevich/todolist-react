import { useState } from 'react';

import styles from './TodoInput.module.css'

const TodoInput = (props) => {
  const { onTodoCreate } = props;
  const [value, setValue] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault();
    onTodoCreate(value.trim())
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value)
        }}
      />
      <button
        className={styles.btn}
        type="submit"
      >
        +
      </button>
    </form>
  )
}

export default TodoInput;