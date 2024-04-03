import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import plant_img from "../../assets/images/home_plant.png";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className={styles.home_container}>
      <article className={styles.home_item}>
        <h2>{t("home.MainTitle")}</h2>
        <p>{t("home.MainDescription")}</p>
        <Button variant="success">{t("home.MainBtn")}</Button>
      </article>

      <article className={styles.img_container}>
        <img src={plant_img} alt="plant_image"></img>
      </article>
    </section>
  );
}
