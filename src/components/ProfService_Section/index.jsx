import styles from "./styles.module.css";
import gardening_tools from "../../assets/images/gardening_tools.svg";
import sappling from "../../assets/images/sappling_icon.svg";
import plant from "../../assets/images/plant_icon.svg";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function ProfServiceSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <article className={styles.service_item}>
        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={gardening_tools} alt="gardening tools photo"></img>
          </div>

          <h5>{t("home.ProfFirstTitle")}</h5>
          <p>{t("home.ProfFirstDesc")}</p>
        </div>

        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={sappling} alt="gardening tools photo"></img>
          </div>

          <h5>{t("home.ProfSecondTitle")}</h5>
          <p>{t("home.ProfSecondDesc")}</p>
        </div>

        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={plant} alt="gardening tools photo"></img>
          </div>

          <h5>{t("home.ProfThirdTitle")}</h5>
          <p>{t("home.ProfThirdDesc")}</p>
        </div>
      </article>

      <article className={styles.service_item}>
        <h4>{t("home.ProfMainTitle")}</h4>

        <p>{t("home.ProfMainDesc")}</p>

        <p>{t("home.ProfMainDesc2")}</p>

        <Link to={"/products"}>
          {t("home.ProfBtn")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Link>
      </article>
    </section>
  );
}
