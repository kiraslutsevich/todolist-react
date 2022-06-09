import { useState } from 'react';

import './TodoInput.style.css';

const TodoInput = (props) => {
  const { addNewTaskHandler } = props;
  const [value, setValue] = useState('');
  return (
    <div className="todo-input">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="input-btn" onClick={() => {
        addNewTaskHandler(value)
        setValue('')
      }}
      >
        +
      </button>
    </div>
  )
}

export default TodoInput;