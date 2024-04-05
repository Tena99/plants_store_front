import styles from "./styles.module.css";

export default function Banner({ imgSrc, title, description, items }) {
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
              <div className={styles.banner_item}>
                <strong>{item.number}</strong>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
