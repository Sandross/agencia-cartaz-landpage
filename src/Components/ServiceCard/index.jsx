import Image from 'next/image';
import styles from './style.module.scss';

const ServiceCard = ({ title, icon }) => {
  return (
    <div className={styles['s-container']}>
      <div className={styles['s-container__card']}>
      <Image src={icon} width={100} height={100} alt="services" />
      <div className={styles['s-container__title-card']}>
        <h3 className={styles['s-container__title']}>{title}</h3>
        </div>
        </div>
    </div>
  );
}

export default ServiceCard;