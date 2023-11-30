import type { NextPage } from "next";
import styles from "./products-container.module.css";
const ProductsContainer: NextPage = () => {
  return (
    <div className={styles.title}>
      <div className={styles.sectionTitle}>
        <div className={styles.content}>
          <b className={styles.heading}>Products</b>
          <div
            className={styles.text}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        </div>
      </div>
      <div className={styles.button}>
        <b className={styles.viewAll}>View all</b>
      </div>
    </div>
  );
};

export default ProductsContainer;
