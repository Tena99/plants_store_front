import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";
import Alert from "react-bootstrap/Alert";
import { en } from "../../i18n/languages/en";
import { de } from "../../i18n/languages/de";

import { useTranslation } from "react-i18next";

export default function DetailedPage() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);
  const [successMsg, toggleSuccessMsg] = useState(false);
  const [failMsg, toggleFailMsg] = useState(false);

  const { productId } = useParams();
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(`${API_URL}/products/${productId}`);

      en.products[data._id] = {
        name: data.en.name,
        description: data.en.description,
        category: data.en.category,
      };

      de.products[data._id] = {
        name: data.de.name,
        description: data.de.description,
        category: data.de.category,
      };

      setProduct(data);
    }
    getData();
  });

  async function addToCart(userId, productId) {
    try {
      await axios.post(`${API_URL}/users/${userId}/cart`, {
        productId: productId,
        amount: count,
      });

      toggleSuccessMsg(true);

      setTimeout(() => {
        toggleSuccessMsg(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  }

  return (
    <>
      {product ? (
        <div className={styles.container}>
          <div className={styles.img_container}>
            <img
              src={product.imageUrl}
              alt="plant_image"
              className={styles.img}
            ></img>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.product_item}>
              <h3> {t(`products.${product._id}.name`)}</h3>

              <div className={styles.product_item_numbers}>
                <span>{product.sold} Sold</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#01b764"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  {product.rating}
                </span>
              </div>

              <hr></hr>

              <p className={styles.description}>
                <strong> {t("detailsPage.Description")}</strong>
                {t(`products.${product._id}.description`)}
              </p>
            </div>

            <div className={styles.product_item}>
              <strong> {t("detailsPage.Quantity")}</strong>

              <div className={styles.counter_container}>
                <button
                  onClick={() => {
                    count > 1 ? setCount(count - 1) : undefined;
                  }}
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  onClick={() => {
                    count < 10 ? setCount(count + 1) : undefined;
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <hr></hr>

            <div className={styles.price_section}>
              <p>
                <span>{t("detailsPage.Total")} </span>
                {product.price * count} €
              </p>
              <Button
                variant="success"
                className={styles.button}
                onClick={() =>
                  user ? addToCart(user.id, productId) : toggleFailMsg(true)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-handbag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                </svg>
                {t("detailsPage.AddtoCart")}
              </Button>
            </div>
            {successMsg ? (
              <Alert variant={"success"}>
                {t("detailsPage.SuccessNote", {
                  productEnName: `${product.en.name}`,
                  productDeName: `${product.de.name}`,
                })}
              </Alert>
            ) : undefined}
            {failMsg && user === null ? (
              <Alert variant={"danger"}>{t("detailsPage.FailNote")}</Alert>
            ) : undefined}
          </div>
        </div>
      ) : (
        <div>{t("loading")}</div>
      )}
    </>
  );
}
