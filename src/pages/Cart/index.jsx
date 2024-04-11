import styles from "./styles.module.css";
import plant_img from "../../assets/images/banner_plant.png";
import Button from "react-bootstrap/Button";

export default function Cart() {
  return (
    <section className={styles.container}>
      <div className={styles.headline}>
        <h3>Shopping Cart</h3>
        <p>3 Items</p>
      </div>

      <hr></hr>

      <div className={styles.cart_title}>
        <h4>Product Details</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>

      <div className={styles.items_container}>
        <article className={styles.cart_item}>
          <div className={styles.img_container}>
            <img src={plant_img} alt="plant_photo"></img>
          </div>

          <h5>Monstera</h5>
        </article>

        <article className={`${styles.cart_item} ${styles.counter}`}>
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </article>

        <article className={styles.cart_item}>
          <p>414.00 €</p>
        </article>

        <article className={styles.cart_item}>
          <p>818.00 €</p>
        </article>

        <article className={styles.cart_item}>
          <Button className="btn btn-outline-secondary">X</Button>
        </article>
      </div>
    </section>
  );
}
