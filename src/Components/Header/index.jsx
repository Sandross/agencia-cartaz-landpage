import styles from './style.module.scss';
import logo from '../../Assets/newlogo.svg';

const Header = () => {
  return (
    <header className={styles['h-container']}>
      <div className={styles['h-container__line']}>
        <nav className={styles['h-container__line-nav']}>
          <a href="/">
            HOME
          </a>
          <a href="/">
            SERVIÇOS
          </a>
          <a href="/">
            SOBRE NÓS
          </a>
        </nav>
        <div className={styles['h-container__line-img']}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header