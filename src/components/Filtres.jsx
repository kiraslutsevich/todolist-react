import styles from './Filtres.module.css';
import Category from './Category';
import CounterActiveTasks from './CounterActiveTasks';
import BtnDelCompletedTasks from './BtnDelCompletedTasks';

const Filtres = (props) => {
  const { activeTasksCounter, onFilterChange } = props;

  return (
    <div className={styles.list}>
      <CounterActiveTasks
        count={activeTasksCounter}
      />
      <Category text="All" id="all" onFilterChange={onFilterChange} />
      <Category text="Active" id="active" onFilterChange={onFilterChange} />
      <Category text="Completed" id="completed" onFilterChange={onFilterChange} />
    </div>
  )
}

export default Filtres;