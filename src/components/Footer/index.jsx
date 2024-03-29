import styles from "./styles.module.css";
import footerImg from "../../assets/footer.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className={styles.footer_item}>
          <h3 className={styles.footer_title}>
            <strong>Plants</strong>
          </h3>

          <p>
            There are many variations of pass is ages of Lorem available, but
            they have suffered alteration.
          </p>
        </div>

        <ul className={`${styles.footer_item} ${styles.footer_company}`}>
          <li>
            <strong>Company</strong>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Career</Link>
          </li>
          <li>
            <Link to={"/"}>Blog & News</Link>
          </li>
        </ul>

        <ul className={`${styles.footer_item} ${styles.footer_support}`}>
          <li>
            <strong>Support</strong>
          </li>
          <li>
            <Link to={"/"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/"}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/"}>Term & Conditions</Link>
          </li>
        </ul>

        <div className={`${styles.footer_item} ${styles.footer_contacts}`}>
          <div className={styles.footer_sub_item}>
            <h3 className={styles.footer_title}>
              <strong>Contact</strong>
            </h3>
            <p>Random Street 3, New York</p>
          </div>

          <div className={styles.footer_sub_item}>
            <h4>
              <strong>Email Us</strong>
            </h4>
            <p>random_email @gmail.com</p>
          </div>

          <div></div>
        </div>
      </section>

      <div className={styles.footer_img_container}>
        <img src={footerImg} alt="footer_image"></img>
      </div>
    </footer>
  );
}
