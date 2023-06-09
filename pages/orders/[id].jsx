import styles from "../../styles/Order.module.css"
import Image from "next/legacy/image"

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if(index - status < 1) return styles.done
    if(index - status === 1) return styles.inProgress
    if(index - status > 1) return styles.undo
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftrow}>

          <table className={styles.table}>
            <tbody>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>1234567657</span>
              </td>
              <td>
                <span className={styles.name}>
                  John Doe
                </span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={styles.total}>Tshs 16000</span>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/images/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
             <Image src="/images/checked.png" width={30} height={30} alt=""/> 
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/images/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
             <Image className={styles.checkedIcon}  src="/images/checked.png" width={30} height={30} alt=""/> 
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/images/bike.png" alt="" width={30} height={30} />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
             <Image className={styles.checkedIcon} src="/images/checked.png" width={30} height={30} alt=""/> 
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src="/images/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
             <Image  className={styles.checkedIcon}  src="/images/checked.png" width={30} height={30} alt=""/> 
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  )
}

export default Order 
