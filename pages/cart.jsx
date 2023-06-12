import styles from "../styles/Cart.module.css"
import Image from "next/legacy/image"

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image src="/images/pic2.png" layout="fill" objectFit="contain" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>COLARZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}> Tshs 8000</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>Tshs 16000</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Tshs 16000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>Tshs 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Tshs 16000
          </div>
          <button type="" className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
