import styles from './Footer.module.css';
import Filtres from './filtres/Filtres';
import CounterActiveTasks from './counter-active-tasks/CounterActiveTasks';
import BtnDelCompletedTasks from './btn-del-comleted-tasks/BtnDelCompletedTasks';

const Footer = (props) => {
  const { activeTasksCounter, onFilterChange, onCompletedClear, filter } = props;
  return (
    <footer className={styles.footer}>
      <CounterActiveTasks
        count={activeTasksCounter}
      />
      <Filtres
        onFilterChange={onFilterChange}
        activeTasksCounter={activeTasksCounter}
        filter={filter}
      />
      <BtnDelCompletedTasks 
        onCompletedClear={onCompletedClear}
      />
    </footer>
  )
}

export default Footer;