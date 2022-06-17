import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/todo-input/TodoInput';
import TodoList from './components/todo-list/TodoList';
import Footer from './components/footer/Footer';
import ToggleAll from './components/ToggleAll';

const App = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [filter, setFilter] = React.useState(
    localStorage.getItem('filter') || 'all'
  )

  React.useEffect(() => {
    saveData('todos', todoList);
  }, [todoList]);

  React.useEffect(() => {
    saveData('filter', filter);
  }, [filter]);

  let [filteredList, activeTasksCounter] = React.useMemo(() => {
    let activeTasksCounter = 0;
    const list = todoList.filter((task) => {
      if (!task.isCompleted) {
        activeTasksCounter++;
      }
      if (filter === 'all') {
        return true;
      }
      const requiredStatus = filter === 'completed';
      return task.isCompleted === requiredStatus;
    })
    return [list, activeTasksCounter]
  }, [todoList, filter])

  const saveData = (key, data) => {
    if (!(typeof data === 'string')) {
      data = JSON.stringify(data);
    }
    localStorage.setItem(key, data);
  }

  const createRandomId = () => {
    return Math.floor(Math.random() * 10000);
  }


  const handleTodoCreate = (value) => {
    if (!value) {
      return;
    }
    const task = {
      text: value,
      isCompleted: false,
      id: createRandomId(),
    }
    const newArr = [...todoList, task];
    setTodoList(newArr);
  };

  const handleTodoUpdate = (id, data) => {
    const newArr = todoList.map((task) => task.id === id ? data : task);
    setTodoList(newArr);
  };

  const handleTodoDelete = (id) => {
    const newArr = todoList.filter(task => task.id !== id);
    setTodoList(newArr);
  };

  const handleSelectAll = () => {
    const newArr = todoList.map(task => {
      if (activeTasksCounter === 0) {
        return { ...task, isCompleted: false }
      } else {
        return { ...task, isCompleted: true }
      }
    });
    setTodoList(newArr);
  };

  const handleClearCompleted = () => {
    const newArr = todoList.filter(task => !task.isCompleted);
    setTodoList(newArr);
  }

  return (
    <div className="app">
      <Header />
      <section className="input">
        <ToggleAll
          onAllSelect={handleSelectAll}
        />

        <TodoInput
          onTodoCreate={handleTodoCreate}
        />
      </section>
      <TodoList
          filteredList={filteredList}
          onTodoDelete={handleTodoDelete}
          onTodoUpdate={handleTodoUpdate}
        />
      <Footer
        activeTasksCounter={activeTasksCounter}
        onFilterChange={setFilter}
        onCompletedClear={handleClearCompleted}
        filter={filter}
      />
    </div>
  );
};

export default App;
