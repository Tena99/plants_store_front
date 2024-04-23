import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Badge from "react-bootstrap/Badge";

export default function Special() {
  const [special, setSpecial] = useState();

  useEffect(() => {
    async function getSpecial() {
      let { data } = await axios.get(
        "https://plants-store-backend.onrender.com/products/special"
      );
      setSpecial(data.result);
    }

    getSpecial();
  }, []);

  return (
    <article className={styles.special}>
      <h3>Special Offers</h3>

      <hr></hr>

      <div className={styles.special_container}>
        {special
          ? special.map((product) => {
              return (
                <Link
                  key={product._id}
                  to={`/products/${product._id}`}
                  className={styles.special_wrapper}
                >
                  <Card key={product._id} className={styles.special_card}>
                    <Badge bg="warning" className={styles.badge}>
                      Best price
                    </Badge>

                    <div className={styles.img_container}>
                      <Card.Img variant="top" src={product.imageUrl} />
                    </div>
                    <Card.Body>
                      <Card.Title className={styles.special_card_title}>
                        {product.en.name}
                      </Card.Title>
                      <Card.Text className={styles.special_card_text}>
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
                        |
                        <span>
                          <span className={styles.old_price}>
                            {product.price * 1.5} €
                          </span>
                          {product.price} €
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })
          : undefined}
      </div>
    </article>
  );
}
