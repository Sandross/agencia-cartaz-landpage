import styles from './style.module.scss';

const ServiceCard = ({ title, icon }) => {
  return (
    <div className={styles['s-container']}>
      <div className={styles['s-container__icon']}>{icon}</div>
      <h3 className={styles['s-container__title']}>{title}</h3>
    </div>
  );
}

export default ServiceCard;