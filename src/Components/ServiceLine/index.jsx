import ServiceCard from "../ServiceCard";
import styles from "./style.module.scss";
import { services } from "./services";

const ServiceLine = () => {
  return (
    <div className={styles['s-container-line']}>
      {
        services.map((service) => (
          <div className={styles['s-container-line-card']}>
            <ServiceCard key={ service.id } title={ service.title } icon={ service.image } />
          </div>
            
            ))
      }
    </div>
 )
}

export default ServiceLine;