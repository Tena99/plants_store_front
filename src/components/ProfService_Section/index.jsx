import styles from "./styles.module.css";
import gardening_tools from "../../assets/images/gardening_tools.svg";
import sappling from "../../assets/images/sappling_icon.svg";
import plant from "../../assets/images/plant_icon.svg";
import { Link } from "react-router-dom";

export default function ProfServiceSection() {
  return (
    <section className={styles.container}>
      <article className={styles.service_item}>
        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={gardening_tools} alt="gardening tools photo"></img>
          </div>

          <h5>Pruning plants</h5>
          <p>
            Our store offers top-quality plants, expertly cared for. Trust us to
            prune your plants for vibrant, thriving greenery.
          </p>
        </div>

        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={sappling} alt="gardening tools photo"></img>
          </div>

          <h5>Gardening Essentials</h5>
          <p>
            Discover top-quality tools for a thriving garden. From shovels to
            watering cans, we've got your gardening needs covered.
          </p>
        </div>

        <div className={styles.service_card}>
          <div className={styles.img_container}>
            <img src={plant} alt="gardening tools photo"></img>
          </div>

          <h5>Plant Trees</h5>
          <p>
            Choose us for tree planting. Enhance your space while contributing
            to environmental preservation and a healthier planet.
          </p>
        </div>
      </article>

      <article className={styles.service_item}>
        <h4>Professional Service</h4>

        <p>
          Experience professional service at our store. From expert advice to
          meticulous care, we're dedicated to ensuring your gardening journey is
          successful and enjoyable.
        </p>

        <p>
          Our knowledgeable staff will guide you every step of the way, ensuring
          your plants thrive. Your satisfaction is our priority.
        </p>

        <Link to={"/products"}>
          Read More{" "}
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
