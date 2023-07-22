import FirstSection from "../../Components/FirstSection"
import SecondSection from "../../Components/SecondSection";
import ThirdSection from "../../Components/ThirdSection";
import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles['h-container']}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default Home