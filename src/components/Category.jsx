import styles from './Category.module.css';

const Category = (props) => {
  const { onChooseTaskList } = props;

  return (
    <button
      onClick={(e) => onChooseTaskList(e.target.textContent)}
    >
      {props.text}
    </button>
  )
}

export default Category;