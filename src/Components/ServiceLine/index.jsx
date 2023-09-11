import ServiceCard from "../ServiceCard";
import styles from "./style.module.scss";
import { services } from "./services";

const ServiceLine = () => {
  return (
    <div className={styles['s-container-line']}>
      {
        services.map((service) => (
          <a className={styles['s-container-line-card']} href={'/services'}>
              <ServiceCard key={ service.id } title={ service.title } icon={ service.image } />
          </a>
            ))
      }
    </div>
 )
}

export default ServiceLine;