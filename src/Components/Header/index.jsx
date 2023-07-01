import styles from './style.module.scss';
import logo from '../../Assets/logo.svg';
import Image from 'next/image';
import facebook from '../../Assets/face.png';
import whatsApp from '../../Assets/wpp.png';
import location from '../../Assets/location.png';
import instagram from '../../Assets/instagram.png';

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
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles['h-container__line-icons']}>
          <Image src={facebook} alt="facebook" />
          <Image src={instagram} alt="instagram" />
          <Image src={location} alt="location" />
          <Image src={whatsApp} alt="whatsApp" />
        </div>
      </div>
    </header>
  )
}

export default Header