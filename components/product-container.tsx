import type { NextPage } from "next";
import ProductWrapper from "./product-wrapper";
import styles from "./product-container.module.css";
const ProductContainer: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content1}>
        <div className={styles.content2}>
          <ProductWrapper priceText="FREE" />
          <ProductWrapper priceText="$55" />
          <ProductWrapper priceText="$55" />
          <ProductWrapper priceText="$55" />
          <ProductWrapper priceText="$55" />
        </div>
      </div>
      <div className={styles.content3}>
        <div className={styles.sliderDots}>
          <div className={styles.dot} />
          <div className={styles.dot1} />
          <div className={styles.dot2} />
          <div className={styles.dot2} />
          <div className={styles.dot2} />
        </div>
        <div className={styles.sliderButtons}>
          <div className={styles.button}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
          <div className={styles.button1}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
