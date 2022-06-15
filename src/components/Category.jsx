import styles from './Category.module.css';

const Category = (props) => {
  const { text, status, id, onFilterChange } = props;

  return (
    <button
      // className={status === 'on' ? styles.active : styles.passive}
      onClick={() => onFilterChange(id)}
    >
      {text}
    </button >
  )
}



export default Category;