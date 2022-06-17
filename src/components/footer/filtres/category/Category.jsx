import styles from './Category.module.css';

const Category = (props) => {
  const { text, filter, id, onFilterChange } = props;

  return (
    <button
      className={filter === id ? styles.active : styles.passive}
      onClick={() => onFilterChange(id)}
    >
      {text}
    </button>
  )
}



export default Category;