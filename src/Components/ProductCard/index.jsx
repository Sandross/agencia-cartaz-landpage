
import styles from './style.module.scss';
import { products } from './products';
import Image from 'next/image';
const ProductCard = () => {
  return (
    <div className={styles.pContainer}>
      {
        products.map((product) => {
          return (
            <div key={product.id} className={styles.pCard}>
              {
                product.imgAlign === 'left' &&
              ( <div className={styles.imgLeft}>
                <Image src={product.image} alt={product.title} />
                </div>
                )
              }
              <div className={styles.pContent}>
                <div className={styles.pValues}>
                <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
                <button> FALE CONOSCO </button>
              </div>
                {
                  product.imgAlign === 'right' &&
                  (<div className={styles.imgRight}>
                    <Image src={product.image} alt={product.title} />
                  </div>
                  )
                }
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default ProductCard