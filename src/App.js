import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';



function App() {
  const [arrTodo, setArrTodo] = useState([]);

  const [currentArrTodo, setCurrentArrTodo] = useState([...arrTodo]);

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

  const [status, setStatus] = useState('All')

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
    const newCurrentArrTodo = [...currentArrTodo, task]
    setCurrentArrTodo(newCurrentArrTodo)
  }

  const handleTaskUpdate = (id, data) => {
    const newArr = arrTodo.map((item) => item.id === id ? data : item);
    setArrTodo(newArr);
    const newCurrentArr = currentArrTodo.map((item) => item.id === id ? data : item);
    setCurrentArrTodo(newCurrentArr);

  }

  const handleTaskDelete = (id) => {
    const newArr = arrTodo.filter(task => task.id !== id);
    setArrTodo(newArr);
    const newCurrentArr = currentArrTodo.filter(task => task.id !== id);
    setCurrentArrTodo(newCurrentArr);
  }

  const handleButtonsStatusChange = (id) => {
    setCurrentArrTodo(handleStatusChange(id));

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

  const handleStatusChange = (id) => {
    if (id === 'filterAll') {
      setStatus('All');
      return arrTodo;

    } else if (id === 'filterActive') {
      const newCurrentArrTodo = arrTodo.filter(todo => !todo.isActive && todo);
      setStatus('Completed');
      return newCurrentArrTodo;
    } else {
      const newCurrentArrTodo = arrTodo.filter(todo => todo.isActive && todo);
      setStatus('Active');
      return newCurrentArrTodo;
    }
  }

  // const handleCurrentArrChange = () => {
  //   if (status === 'All') {
  //     return setCurrentArrTodo(arrTodo)
  //   } else if (status === 'Active') {
  //     const newCurrentArrTodo = arrTodo.filter(todo => todo.isActive && todo);
  //     return setCurrentArrTodo(newCurrentArrTodo);
  //   } else {
  //     const newCurrentArrTodo = arrTodo.filter(todo => !todo.isActive && todo);
  //     return setCurrentArrTodo(newCurrentArrTodo);
  //   }
  // }

  return (
    <div className="app">
      <Header />

      <TodoInput
        onAddNewTask={handleAddNewTask}
      />

      <TodoList
        currentArrTodo={currentArrTodo}
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


//фильтровать по статусу а не по айди в отдельной функции и вызывать ее когда любой рендер