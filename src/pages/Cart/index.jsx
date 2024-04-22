import styles from "./styles.module.css";
import plant_img from "../../assets/images/banner_plant.png";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/createContext";
import axios from "axios";

export default function Cart() {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(5);
  const [vat, setVat] = useState(0);

  useEffect(() => {
    async function getCart() {
      try {
        let { data } = await axios.get(
          `https://plants-store-backend.onrender.com/users/${user.id}/cart`
        );
        setCart(data);

        if (data) {
          let sum = 0;

          data.forEach((item) => {
            sum = sum + item.product.price * item.amount;
          });

          setPrice(sum);
          setVat(parseFloat((sum * 0.2).toFixed(2)));
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    getCart();
  }, []);

  async function updateCartItemAmount(productId, amount) {
    try {
      await axios.patch(
        `https://plants-store-backend.onrender.com/users/${user.id}/cart`,
        { productId, amount }
      );

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === productId ? { ...item, amount } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart item amount:", error);
    }
  }

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.product.price * item.amount;
    });
    setPrice(sum);
    setVat(parseFloat((sum * 0.2).toFixed(2)));
  }, [cart]);

  async function deleteCartItem(productId) {
    try {
      await axios.delete(
        `https://plants-store-backend.onrender.com/users/${user.id}/cart/${productId}`
      );
      setCart((prevCart) =>
        prevCart.filter((item) => item.product._id !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={styles.cart_container}>
      <h3>Shopping Cart</h3>
      <hr></hr>

      <div className={styles.cart_wrapper}>
        <div className={styles.item_wrapper}>
          {cart.length ? (
            cart.map((cartItem) => {
              return (
                <article
                  key={cartItem.product._id}
                  className={styles.cart_item}
                >
                  <div className={styles.img_container}>
                    <img src={cartItem.product.imageUrl}></img>
                  </div>

                  <div className={styles.cart_sub_item}>
                    <h4>{cartItem.product.en.name}</h4>

                    {cartItem.product.inStock > 0 ? (
                      <p>In Stock</p>
                    ) : (
                      <p className={styles.unavailable}>Out of Stock</p>
                    )}

                    <div className={styles.cart_sub_btns}>
                      <Button
                        onClick={() => deleteCartItem(cartItem.product._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#B6B9CA"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                        <span className={styles.btn_text}>Remove</span>
                      </Button>
                      {/* <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#B6B9CA"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                        </svg>
                        <span className={styles.btn_text}>Save for later</span>
                      </Button> */}
                    </div>
                  </div>

                  <div className={styles.cart_sub_item}>
                    <strong>{cartItem.product.price} €</strong>

                    <div className={styles.counter}>
                      <button
                        onClick={() => {
                          updateCartItemAmount(
                            cartItem.product._id,
                            cartItem.amount - 1
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                          />
                        </svg>
                      </button>
                      <span>{cartItem.amount}</span>
                      <button
                        onClick={() => {
                          updateCartItemAmount(
                            cartItem.product._id,
                            cartItem.amount + 1
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div>Products not found.</div>
          )}
        </div>

        <hr></hr>

        <div className={styles.summary_container}>
          <div className={styles.summary_item}>
            <p>Subtotal</p>
            <p> {price} €</p>
          </div>
          <div className={styles.summary_item}>
            <p>Shipping</p>
            <p>{shipping} €</p>
          </div>
          <div className={styles.summary_item}>
            <p>VAT (20%)</p>
            <p>{vat} €</p>
          </div>

          <hr></hr>

          <div className={styles.summary_item}>
            <p>Total</p>
            <p>{price + shipping + vat} €</p>
          </div>
        </div>
      </div>
    </section>
  );
}
