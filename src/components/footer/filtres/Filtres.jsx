import styles from './Filtres.module.css';
import Category from './category/Category';

const Filtres = (props) => {
  const { onFilterChange, filter } = props;

  return (
    <div className={styles.list}>
      <Category
        text="All"
        id="all"
        onFilterChange={onFilterChange}
        filter={filter}
      />

      <Category
        text="Active"
        id="active"
        onFilterChange={onFilterChange}
        filter={filter}
      />

      <Category
        text="Completed"
        id="completed"
        onFilterChange={onFilterChange}
        filter={filter}
      />
    </div>
  )
}

export default Filtres;