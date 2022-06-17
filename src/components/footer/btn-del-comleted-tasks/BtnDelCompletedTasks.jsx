import styles from './BtnDelCompletedTasks.module.css';

const BtnDelCompletedTasks = (props) => {
  const { onCompletedClear } = props;
  return (
    <button 
    className={styles.btn}
    onClick={() => onCompletedClear()}>
      Clear completed
    </button>
  )
}

export default BtnDelCompletedTasks;