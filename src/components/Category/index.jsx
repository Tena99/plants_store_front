import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import i18next from "i18next";
import { en } from "../../i18n/languages/en.js";
import { de } from "../../i18n/languages/de.js";

export default function Category({ categoryName, setProducts }) {
  async function getCategory() {
    const { data } = await axios.post(
      "https://plants-store-backend.onrender.com/products/category",
      { category: categoryName, lang: i18next.language }
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

  return (
    <Button
      variant="outline-success"
      className={styles.category_btn}
      onClick={getCategory}
    >
      {categoryName}
    </Button>
  );
}
