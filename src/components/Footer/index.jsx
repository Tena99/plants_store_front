import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import footerImg from "../../assets/images/footer.png";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <hr className={styles.borderline}></hr>

      <section>
        <div className={styles.footer_item}>
          <h3 className={styles.footer_title}>
            <img src={logo} alt="logo in leaf shape"></img>
            <strong>Plantopia</strong>
          </h3>

          <p>{t("nav.Slogan")}</p>
        </div>

        <ul className={`${styles.footer_item} ${styles.footer_company}`}>
          <li>
            <strong>{t("nav.Company")}</strong>
          </li>
          <li>
            <Link to={"/"}>{t("nav.About")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("nav.Career")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("nav.Blog")}</Link>
          </li>
        </ul>

        <ul className={`${styles.footer_item} ${styles.footer_support}`}>
          <li>
            <strong>{t("nav.Support")}</strong>
          </li>
          <li>
            <Link to={"/"}>{t("nav.FAQ")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("nav.Privacy")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("nav.Terms")}</Link>
          </li>
        </ul>

        <div className={`${styles.footer_item} ${styles.footer_contacts}`}>
          <div className={styles.footer_sub_item}>
            <h3 className={styles.footer_title}>
              <strong>{t("nav.Contact")}</strong>
            </h3>
            <p>{t("nav.Adress")}</p>
          </div>

          <div className={styles.footer_sub_item}>
            <h4>
              <strong>{t("nav.Email")}</strong>
            </h4>
            <p>random_email @gmail.com</p>
          </div>

          <div></div>
        </div>
      </section>

      {/* <div className={styles.footer_img_container}>
        <img src={footerImg} alt="footer_image"></img>
      </div> */}
    </footer>
  );
}
