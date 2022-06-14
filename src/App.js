import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';



function App() {
  const [arrTodo, setArrTodo] = useState([]);

  // const [currentArrTodo, setCurrentArrTodo] = useState([]);

  const [arrBtns, setArrBtns] = useState([
    {
      text: "All",
      status: "on",
      id: "filterAll"
    },
    {
      text: "Active",
      status: "off",
      id: "filterActive"
    },
    {
      text: "Complited",
      status: "off",
      id: "filterCompiled"
    }
  ])


  const handleAddNewTask = (value) => {
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

  const handleTaskDelete = (id) => {
    const newArr = arrTodo.filter(task => task.id !== id);
    setArrTodo(newArr);
  }

  const handleButtonsStatusChange = (id) => {
    const newArrBtns = arrBtns.map((btn) => {
      if (btn.id === id) {
        if (btn.status === 'on') {
          return btn;
        } else {
          btn = btn;
          btn.status = 'on';
          return btn;
        }
      } else {
        if (btn.status === 'on') {
          btn = btn;
          btn.status = 'off';
          return btn;
        } else {
          return btn;
        }
      }
    });
    setArrBtns(newArrBtns);
  }

  return (
    <div className="app">
      <Header />

      <TodoInput
        onAddNewTask={handleAddNewTask}
      />

      <TodoList
        arrTodo={arrTodo}
        onTaskDelete={handleTaskDelete}
        onTaskUpdate={handleTaskUpdate}
      />

      <Footer
        arrBtns={arrBtns}
        onButtonsStatusChange={handleButtonsStatusChange}
      />
    </div>
  );
}

export default App;
