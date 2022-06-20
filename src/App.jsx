import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/todo-input/TodoInput';
import TodoList from './components/todo-list/TodoList';
import Footer from './components/footer/Footer';
import ToggleAll from './components/ToggleAll';
import LocalStorageHelper from './LocalStorageHelper';
import CreateRandomId from './CreateRandomId';


const LIST_LOCALSTORAGE_KEY = new LocalStorageHelper('todos');
const FILTER_LOCALSTORAGE_KEY = new LocalStorageHelper('filter');

const App = () => {
  const [todoList, setTodoList] = React.useState(LIST_LOCALSTORAGE_KEY.get() || []);
  const [filter, setFilter] = React.useState(FILTER_LOCALSTORAGE_KEY.get() || 'all');

  React.useEffect(() => {
    LIST_LOCALSTORAGE_KEY.set(todoList)
  }, [todoList]);

  React.useEffect(() => {
    FILTER_LOCALSTORAGE_KEY.set(filter);
  }, [filter]);

  const [filteredList, activeTasksCounter] = React.useMemo(() => {
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

  const handleTodoCreate = (value) => {
    if (!value) {
      return;
    }
    const task = {
      text: value,
      isCompleted: false,
      id: CreateRandomId(),
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
        <ToggleAll onAllSelect={handleSelectAll} />

        <TodoInput onTodoCreate={handleTodoCreate} />
      </section>

      <TodoList
        filteredList={filteredList}
        onTodoDelete={handleTodoDelete}
        onTodoUpdate={handleTodoUpdate}
      />

      {todoList.length > 0 &&
        <Footer
          activeTasksCounter={activeTasksCounter}
          onFilterChange={setFilter}
          onCompletedClear={handleClearCompleted}
          filter={filter}
        />
      }
    </div>
  );
};

export default App;
