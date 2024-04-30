import styles from "./styles.module.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Banner({ imgSrc, title, description, items }) {
  const { t } = useTranslation();

  return (
    <section className={styles.banner_container}>
      <div className={styles.banner_wrapper}>
        <img src={imgSrc} alt="image"></img>

        <article className={styles.banner_item}>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>

        <div className={styles.banner_text_container}>
          {items.map((item) => {
            return (
              <div key={item.id} className={styles.banner_item}>
                <strong>{item.number}</strong>
                <p>{t(item.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
