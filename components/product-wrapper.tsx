import type { NextPage } from "next";
import styles from "./product-wrapper.module.css";

type ProductWrapperType = {
  priceText?: string;
};

const ProductWrapper: NextPage<ProductWrapperType> = ({ priceText }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.placeholderImage}
        alt=""
        src="/placeholder--image@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <b className={styles.heading}>Product name</b>
          <div className={styles.text}>Variant</div>
        </div>
        <b className={styles.price}>{priceText}</b>
      </div>
    </div>
  );
};

export default ProductWrapper;
