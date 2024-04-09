import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import plant_img from "../../assets/images/banner_plant.png";
import styles from "./styles.module.css";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        "https://plants-store-backend.onrender.com/products"
      );
      setProducts(data.result);
    }
    getData();
  }, []);

  return (
    <section className={styles.products_container}>
      {products ? (
        products.map((product) => {
          return (
            <Link
              to={`/products/${product._id}`}
              className={styles.card_container}
            >
              <Card key={product._id} className={styles.card}>
                <div className={styles.img_container}>
                  <Card.Img variant="top" src={product.imageUrl} />
                </div>
                <Card.Body>
                  <Card.Title className={styles.card_title}>
                    {product.en.name}
                  </Card.Title>
                  <Card.Text className={styles.card_text}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="#01b764"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      {product.rating}
                    </span>
                    | <span>{product.price} €</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
