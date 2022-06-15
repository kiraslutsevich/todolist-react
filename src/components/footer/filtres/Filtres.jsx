import styles from './Filtres.module.css';
import Category from './category/Category';

const Filtres = (props) => {
  const { onFilterChange } = props;

  return (
    <div className={styles.list}>
      <Category
        text="All"
        id="all"
        onFilterChange={onFilterChange}
      />

      <Category
        text="Active"
        id="active"
        onFilterChange={onFilterChange}
      />

      <Category
        text="Completed"
        id="completed"
        onFilterChange={onFilterChange}
      />
    </div>
  )
}

export default Filtres;