import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Special from "../../components/Special";
import Category from "../../components/Category";
import { en } from "../../i18n/languages/en.js";
import { de } from "../../i18n/languages/de.js";
import Accordion from "react-bootstrap/Accordion";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Products() {
  const [products, setProducts] = useState();
  const [currentSort, setCurrentSort] = useState("Sort & Filter");
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      let { data } = await axios.post(
        "https://plants-store-backend.onrender.com/products/category",
        { category: "All" }
      );

      data.result.map((item) => {
        en.products[item._id] = {
          name: item.en.name,
          description: item.en.description,
          category: item.en.category,
        };

        de.products[item._id] = {
          name: item.de.name,
          description: item.de.description,
          category: item.de.category,
        };
      });
      setProducts(data.result);
    }
    getData();
  }, []);

  function Sort(value, ascending) {
    if (ascending) {
      let sortedArr = products.toSorted((productA, productB) => {
        return productA[value] - productB[value];
      });

      setProducts(sortedArr);
    } else {
      let sortedArr = products.toSorted((productA, productB) => {
        return productB[value] - productA[value];
      });

      setProducts(sortedArr);
    }
  }

  function sortByDate(dateKey) {
    let sortedArr = products.toSorted((productA, productB) => {
      const dateA = new Date(productA[dateKey]);
      const dateB = new Date(productB[dateKey]);

      return dateA - dateB;
    });

    setProducts(sortedArr);
  }

  return (
    <section className={styles.product}>
      <Special />

      <Accordion defaultActiveKey="0" className={styles.accordion}>
        <Accordion.Item eventKey="0" className={styles.accordion_item}>
          <Accordion.Header className={styles.accordion_header}>
            {currentSort}
          </Accordion.Header>
          <Accordion.Body className={styles.accordion_body}>
            <h5>{t("products.sorting.Sort")}</h5>

            <div className={styles.filters_container}>
              <Button
                variant="outline-success"
                className={styles.filter_btn}
                onClick={() => {
                  Sort("sold", false), setCurrentSort("Most Popular");
                }}
              >
                {t("products.sorting.Popular")}
              </Button>

              <Button
                variant="outline-success"
                className={styles.filter_btn}
                onClick={() => {
                  Sort("rating", false), setCurrentSort("Most Rated");
                }}
              >
                {t("products.sorting.Rated")}
              </Button>

              <Button
                variant="outline-success"
                className={styles.filter_btn}
                onClick={() => {
                  sortByDate("dateAdded"), setCurrentSort("Most Recent");
                }}
              >
                {t("products.sorting.Recent")}
              </Button>

              <Button
                variant="outline-success"
                className={styles.filter_btn}
                onClick={() => {
                  Sort("price", false), setCurrentSort("Highest Price");
                }}
              >
                {t("products.sorting.HighestPrice")}
              </Button>

              <Button
                variant="outline-success"
                className={styles.filter_btn}
                onClick={() => {
                  Sort("price", true), setCurrentSort("Lowest Price");
                }}
              >
                {t("products.sorting.LowestPrice")}
              </Button>
            </div>

            <h5>Categories</h5>

            <div className={styles.category_container}>
              <Category
                categoryName={t("products.categories.All")}
                setProducts={setProducts}
              />
              <Category
                categoryName={t("products.categories.Leafy")}
                setProducts={setProducts}
              />
              <Category
                categoryName={t("products.categories.Exotic")}
                setProducts={setProducts}
              />
              <Category
                categoryName={t("products.categories.Aquatic")}
                setProducts={setProducts}
              />
              <Category
                categoryName={t("products.categories.Aromatic")}
                setProducts={setProducts}
              />
              <Category
                categoryName={t("products.categories.Succulents")}
                setProducts={setProducts}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className={styles.products_container}>
        {products ? (
          products.map((product) => {
            return (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className={styles.card_container}
              >
                <Card key={product._id} className={styles.card}>
                  <div className={styles.img_container}>
                    <Card.Img variant="top" src={product.imageUrl} />
                  </div>
                  <Card.Body>
                    <Card.Title className={styles.card_title}>
                      {t(`products.${product._id}.name`)}
                    </Card.Title>
                    <Card.Text className={styles.card_text}>
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
                      | <span>{product.price} €</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })
        ) : (
          <div>{t("loading")}</div>
        )}
      </div>
    </section>
  );
}
