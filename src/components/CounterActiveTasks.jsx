import styles from './CounterActiveTasks.module.css';

const CounterActiveTasks = (props) => {
  return (
    <div className={styles.count}>
      {props.count} items left
    </div>
  )
}

export default CounterActiveTasks;