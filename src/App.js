import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


function App() {
  const [arrTodo, setArrTodo] = useState([]);

  // const [checked, setChecked] = useState()

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

  const handleChooseTaskList = (status) => {
    // let newArr;
    console.log(status)
    // switch (status) {
    //   case 'All':
    //     newArr = arrTodo.map(task => className={styles.todo});
    //     break;
    //   case 'Active':
    //     newArr = arrTodo.map(task => task.isActive ? task.display = "flex" : task.display = "none");
    //     break;
    //   case 'Completed':
    //     newArr = arrTodo.map(task => !task.isActive ? task.display = "flex" : task.display = "none");
    //     break;
    //   default:
    //     newArr = arrTodo;
    //     break;
    // }
    // setArrTodo(newArr);
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
        onChooseTaskList={handleChooseTaskList}
      />
    </div>
  );
}

export default App;
