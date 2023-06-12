import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg1.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>EAT HEALTHY ENJOY OUR SWAHILI MEALS.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            1654 R. Don Road
            <br />
            NewYork, 85022
            <br />
            (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL SUNDAY
            <br /> 9:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
