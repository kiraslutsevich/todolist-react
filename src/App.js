import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [arrTodo, setArrTodo] = useState([]);

  // const [checked, setChecked] = useState()

  const addNewTaskHandler = (value) => {
    if (value === '') {
      return
    }
    const task = {
      text: value,
      isActive: false,
      id: Math.floor(Math.random() * 10000),
    }
    const newArr = [...arrTodo, task];
    setArrTodo(newArr);
  }

  const handleTaskUpdate = (id, data) => {
    const newArr = arrTodo.map((item) => item.id === id ? data : item);
    setArrTodo(newArr);
  }

  const deleteTaskHandler = (id) => {
    const newArr = arrTodo.filter(task => task.id !== id);
    setArrTodo(newArr);
  }

  return (
    <div className="app">
      <Header />

      <TodoInput
        addNewTaskHandler={addNewTaskHandler}
      />

      <TodoList
        arrTodo={arrTodo}
        deleteTaskHandler={deleteTaskHandler}
        onTaskUpdate={handleTaskUpdate}
      />
    </div>
  );
}

export default App;
