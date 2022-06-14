import styles from './Footer.module.css';
import Filtres from './Filtres';

const Footer = (props) => {
  const { arrBtns, onButtonsStatusChange } = props;
  return (
    <footer className={styles.footer}>
      <Filtres
        arrBtns={arrBtns}
        onButtonsStatusChange={onButtonsStatusChange}
      />
    </footer>
  )
}

export default Footer;