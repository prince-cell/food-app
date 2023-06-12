import Image from "next/legacy/image";
import styles from "../styles/MihogoCard.module.css";

export const MihogoCard = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src='/images/pic1.png'
        alt=''
        width='500'
        height='500'
      />
      <h1 className={styles.product_title}>Mihogo Samaki</h1>
      <span className={styles.product_price}>Tshs8000.00</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </div>
  );
};

