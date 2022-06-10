import styles from './Footer.module.css';
import Filtres from './Filtres';

const Footer = (props) => {
  const { onChooseTaskList } = props;
  return (
    <footer className={styles.footer}>
      <Filtres onChooseTaskList={onChooseTaskList} />
    </footer>
  )
}

export default Footer;