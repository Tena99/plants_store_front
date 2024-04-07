import styles from "./styles.module.css";
import { Card, Button } from "react-bootstrap";
import plant_img from "../../assets/images/banner_plant.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <Link to={`/products/${product._id}`}>
              <Card
                key={product._id}
                className={styles.card}
                style={{ width: "12rem" }}
              >
                <Card.Img variant="top" src={plant_img} />
                <Card.Body>
                  <Card.Title>{product.en.name}</Card.Title>
                  <Card.Text>
                    Rate: {product.rating}, Price: {product.price} €
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
