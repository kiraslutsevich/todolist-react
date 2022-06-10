import styles from './Filtres.module.css';
import Category from './Category';

const Filtres = (props) => {
  const { onChooseTaskList } = props;
  return (
    <div className={styles.list}>
      <Category
        text="All"
        key={Math.floor(Math.random() * 10000)}
        onChooseTaskList={onChooseTaskList}
      />
      <Category
        text="Active"
        key={Math.floor(Math.random() * 10000)}
        onChooseTaskList={onChooseTaskList}
      />
      <Category
        text="Completed"
        key={Math.floor(Math.random() * 10000)}
        onChooseTaskList={onChooseTaskList}
      />
    </div>
  )
}

export default Filtres;