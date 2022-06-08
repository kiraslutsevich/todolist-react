import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [arrTodo, setArrTodo] = useState([]);
  const [value, setValue] = useState('')

  const addNewTaskHandler = () => {
    const newArr = [...arrTodo, value]
    setArrTodo(newArr)
    setValue('')
  }

  return (
    <div className="app">
      <TodoInput value={value} setValue={setValue} addNewTaskHandler={addNewTaskHandler} />
      <TodoList arrTodo={arrTodo} />
    </div>
  );
}

export default App;
