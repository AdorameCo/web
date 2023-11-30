import type { NextPage } from "next";
import Head from "next/head";
import ProductsContainer from "../components/products-container";
import ProductContainer from "../components/product-container";
import styles from "./product.module.css";
const Product: NextPage = () => {
  return (
    <>
      <Head>
        <title>adorame</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.content}>
          <ProductsContainer />
          <ProductContainer />
        </div>
        <img className={styles.downIcon} alt="" src="/down.svg" />
      </div>
    </>
  );
};

export default Product;
