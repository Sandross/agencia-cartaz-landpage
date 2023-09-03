import ServiceCard from '../ServiceCard'
import ServiceLine from '../ServiceLine'
import styles from './style.module.scss'
const ThirdSection = () => {
  return (
    <div className={styles['t-container']}>
      <div className={styles['t-title']}>
        <h1>NOSSOS SERVIÇOS</h1>
      </div>
      <div className={styles['t-container__service']}>
        <ServiceLine />
      </div>
    </div>
  )
}

export default ThirdSection