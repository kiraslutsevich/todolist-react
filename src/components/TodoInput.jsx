import './TodoInput.style.css';

const TodoInput = (props) => {
  const { value, setValue, addNewTaskHandler } = props;
  return (
    <div className='todo-input'>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button className="input-btn" onClick={addNewTaskHandler}>+</button>
    </div>
  )
}

export default TodoInput;