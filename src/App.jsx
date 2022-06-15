import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/todo-input/TodoInput';
import TodoList from './components/todo-list/TodoList';
import Footer from './components/Footer';
import ToggleAll from './components/ToggleAll';

const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const handleTodoCreate = (value) => {
    if (!value) {
      return;
    }
    const task = {
      text: value,
      isCompleted: false,
      id: Math.floor(Math.random() * 10000),
    }
    const newArr = [...todoList, task];
    setTodoList(newArr);
  };

  const handleTodoUpdate = (id, data) => {
    const newArr = todoList.map((item) => item.id === id ? data : item);
    setTodoList(newArr);
  };

  const handleTodoDelete = (id) => {
    const newArr = todoList.filter(task => task.id !== id);
    setTodoList(newArr);
  };

  const handleFilterChange = (id) => {
    setFilter(id);
  };

  let activeTasksCounter = 0;

  const filteredList = todoList.filter((task) => {
    if (!task.isCompleted) {
      activeTasksCounter++;
    }
    if (filter === 'all') {
      return true;
    }

    const requiredStatus = filter === 'completed';
    return task.isCompleted === requiredStatus;
  });



  return (
    <div className="app">
      <Header />
      <section className="main">
        {/* <ToggleAll /> */}

        <TodoInput
          onTodoCreate={handleTodoCreate}
        />

        <TodoList
          todoList={filteredList}
          onTodoDelete={handleTodoDelete}
          onTodoUpdate={handleTodoUpdate}
        />
      </section>
      <Footer
        activeTasksCounter={activeTasksCounter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
