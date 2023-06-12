import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/legacy/image";
const Product = () => {
  const [Number, setNumber] = useState(0);
  const food = {
    id: 1,
    img: "/images/pic2.png",
    name: "FOOD",
    price: [4000, 8000, 12000],
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={food.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{food.name}</h1>
        <span className={styles.price}>Tshs{food.price[Number]}</span>
        <p className={styles.desc}>{food.desc}</p>
        <h3 className={styles.choose}>Choose the amount</h3>
        <div className={styles.amounts}>
          <div className={styles.amount} onClick={() => setNumber(0)}>
            <Image src="/images/pic2.png" alt="" layout="fill" />
            <span className={styles.text}>Small</span>
          </div>
          <div className={styles.amount} onClick={() => setNumber(1)}>
            <Image src="/images/pic2.png" alt="" layout="fill" />
            <span className={styles.text}>Medium</span>
          </div>
          <div className={styles.amount} onClick={() => setNumber(2)}>
            <Image src="/images/pic2.png" alt="" layout="fill" />
            <span className={styles.text}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.options}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox} />
            <label htmlFor="double">Double ingredients</label>
          </div>
          <div className={styles.options}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox} />
            <label htmlFor="sauce">Extra Sauce</label>
          </div>
          <div className={styles.options}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox} />
            <label htmlFor="sauce">Extra Sauce</label>
          </div>
          <div className={styles.options}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox} />
            <label htmlFor="sauce">Extra Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} type="">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

