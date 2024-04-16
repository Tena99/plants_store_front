import styles from "./styles.module.css";
import plant_img from "../../assets/images/banner_plant.png";
import Button from "react-bootstrap/Button";

export default function Cart() {
  return (
    <section className={styles.cart_container}>
      <h3>Shopping Cart</h3>
      <hr></hr>

      <div className={styles.cart_wrapper}>
        <div className={styles.item_wrapper}>
          <article className={styles.cart_item}>
            <div className={styles.img_container}>
              <img src={plant_img}></img>
            </div>

            <div className={styles.cart_sub_item}>
              <h4>Monstera</h4>
              <p>In Stock</p>

              <div className={styles.cart_sub_btns}>
                <Button>
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
                <Button>
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
                </Button>
              </div>
            </div>

            <div className={styles.cart_sub_item}>
              <strong>249.00 €</strong>

              <div className={styles.counter}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                    />
                  </svg>
                </button>
                <span>2</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <article className={styles.cart_item}>
            <div className={styles.img_container}>
              <img src={plant_img}></img>
            </div>

            <div className={styles.cart_sub_item}>
              <h4>Monstera</h4>
              <p>In Stock</p>

              <div className={styles.cart_sub_btns}>
                <Button>
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
                <Button>
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
                </Button>
              </div>
            </div>

            <div className={styles.cart_sub_item}>
              <strong>249.00 €</strong>

              <div className={styles.counter}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                    />
                  </svg>
                </button>
                <span>2</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <article className={styles.cart_item}>
            <div className={styles.img_container}>
              <img src={plant_img}></img>
            </div>

            <div className={styles.cart_sub_item}>
              <h4>Monstera</h4>
              <p>In Stock</p>

              <div className={styles.cart_sub_btns}>
                <Button>
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
                <Button>
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
                </Button>
              </div>
            </div>

            <div className={styles.cart_sub_item}>
              <strong>249.00 €</strong>

              <div className={styles.counter}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                    />
                  </svg>
                </button>
                <span>2</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        <hr></hr>

        <div className={styles.summary_container}>
          <div className={styles.summary_item}>
            <p>Subtotal</p>
            <p>1695.00 €</p>
          </div>
          <div className={styles.summary_item}>
            <p>Shipping</p>
            <p>16 €</p>
          </div>
          <div className={styles.summary_item}>
            <p>VAT (20%)</p>
            <p>339 €</p>
          </div>

          <hr></hr>

          <div className={styles.summary_item}>
            <p>Total</p>
            <p>2052 €</p>
          </div>
        </div>
      </div>
    </section>
  );
}
