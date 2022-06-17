import styles from './ToggleAll.module.css';

const ToggleAll = (props) => {
  const { onAllSelect } = props;
  return (
    <button
      className={styles.button}
      onClick={() => onAllSelect()}
    >
      ❯
    </button>
  )
}

export default ToggleAll;