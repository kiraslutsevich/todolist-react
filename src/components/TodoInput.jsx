const TodoInput = (props) => {
  const { value, setValue, addNewTaskHandler } = props
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={addNewTaskHandler}></button>
    </div>
  )
}

export default TodoInput;