import styles from './Filtres.module.css';
import Category from './category/Category';

const filterButtons = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Completed',
    value: 'completed',
  }
]

const Filtres = (props) => {
  const { onFilterChange, filter } = props;

  return (
    <div className={styles.list}>
      {filterButtons.map((item) => (
        <Category
          text={item.title}
          id={item.value}
          onFilterChange={onFilterChange}
          filter={filter}
          key={item.value}
        />
      ))}
    </div>
  );
};

export default Filtres;
