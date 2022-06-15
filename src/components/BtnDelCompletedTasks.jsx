import styles from './BtnDelCompletedTasks.module.css';

const BtnDelCompletedTasks = (props) => {
  const { onCompletedTasksDelete } = props;
  return (
    <button onClick={(e) => onCompletedTasksDelete()}>
      Clear completed
    </button>
  )
}

export default BtnDelCompletedTasks;