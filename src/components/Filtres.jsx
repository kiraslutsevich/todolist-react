import styles from './Filtres.module.css';
import Category from './Category';

const Filtres = (props) => {
  const { arrBtns, onButtonsStatusChange } = props;

  return (
    <div className={styles.list}>
      {arrBtns.map(btn =>
      (<Category
        key={Math.floor(Math.random() * 10000)}
        text={btn.text}
        status={btn.status}
        id={btn.id}
        onButtonsStatusChange={onButtonsStatusChange}
      />
      )
      )}
    </div>
  )
}

export default Filtres;