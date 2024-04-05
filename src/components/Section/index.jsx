import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

export default function Section({ title, description, btnText, imgSrc }) {
  return (
    <section className={styles.home_container}>
      <article className={styles.home_item}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button variant="success">{btnText}</Button>
      </article>

      <article className={styles.img_container}>
        <img src={imgSrc} alt="image"></img>
      </article>
    </section>
  );
}
