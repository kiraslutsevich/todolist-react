import styles from './Footer.module.css';
import Filtres from './Filtres';

const Footer = (props) => {
  const { activeTasksCounter, onFilterChange } = props;
  return (
    <footer className={styles.footer}>
      <Filtres
        onFilterChange={onFilterChange}
        activeTasksCounter={activeTasksCounter}
      />
    </footer>
  )
}

export default Footer;