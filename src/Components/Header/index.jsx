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
          <a href="/services">
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
          <a href={'https://www.facebook.com/samsaid.midia/?locale=pt_BR'}>
          <Image src={facebook} alt="facebook" className={styles['line-icons__icon']} />
          </a>
          <a href={'https://www.instagram.com/agencia.cartaz/'}>
          <Image src={instagram} alt="instagram" className={styles['line-icons__icon']} />
          </a>
          <a href={'https://goo.gl/maps/U9T5KsWvT16Ji7Ky8'} >
          <Image src={location} alt="location" className={styles['line-icons__icon']} />
          </a>
          <a href={'https://api.whatsapp.com/send?phone=5531987985591'}>
          <Image src={whatsApp} alt="whatsApp" className={styles['line-icons__icon']} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header