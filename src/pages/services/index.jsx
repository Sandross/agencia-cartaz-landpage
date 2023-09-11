import Header from "../../Components/Header";
import ProductCard from "../../Components/ProductCard";
import styles from './style.module.scss';

const Services = () => {
  return (
    <div className={styles.sContainer}>
      <Header />
      <div className={styles.sBody}>
      <ProductCard />
      </div>
    </div>
  );
}

export default Services;