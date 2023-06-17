import FirstSection from "../FirstSection"
import styles from './style.module.scss';

const HomePage = () => {
  return (
    <div className={styles['h-container']}>
      <FirstSection />
    </div>
  )
}

export default HomePage