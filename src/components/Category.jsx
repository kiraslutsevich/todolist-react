import styles from './Category.module.css';

const Category = (props) => {
  const { text, status, id, onButtonsStatusChange } = props;

  return (
    <button
      className={status === 'on' ? styles.active : styles.passive}
      onClick={() => onButtonsStatusChange(id)}
    >
      {text}
    </button >
  )
}



export default Category;