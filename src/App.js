import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [arrTodo, setArrTodo] = useState([]);
  const [value, setValue] = useState('')

  const addNewTaskHandler = () => {
    if (value === '') {
      return
    }
    const newArr = [...arrTodo, value]
    setArrTodo(newArr)
    setValue('')
  }

  return (
    <div className="app">
      <Header />
      <TodoInput value={value} setValue={setValue} addNewTaskHandler={addNewTaskHandler} />
      <TodoList arrTodo={arrTodo} />
    </div>
  );
}

export default App;
