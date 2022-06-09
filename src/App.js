import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [arrTodo, setArrTodo] = useState([]);
  const [value, setValue] = useState('');

  const addNewTaskHandler = () => {
    if (value === '') {
      return
    }
    const task = {
      text: value,
      isChecked: false,
      id: Math.floor(Math.random() * 10000),
    }
    const newArr = [...arrTodo, task];
    setArrTodo(newArr);
    setValue('');
  }

  const deleteTaskHandler = (id) => {
    const newArr = arrTodo.filter(task => task.id != id);
    setArrTodo(newArr);
  }

  return (
    <div className="app">
      <Header />
      <TodoInput value={value} setValue={setValue} addNewTaskHandler={addNewTaskHandler} />
      <TodoList arrTodo={arrTodo} deleteTaskHandler={deleteTaskHandler} />
    </div>
  );
}

export default App;
