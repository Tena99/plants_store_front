import styles from "./styles.module.css";

import Section from "../../components/Section";
import Banner from "../../components/Banner";
import ProfServiceSection from "../../components/ProfService_Section";

import plant_img from "../../assets/images/home_plant.png";
import banner_plant from "../../assets/images/banner_plant.png";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Section
        title={t("home.MainTitle")}
        description={t("home.MainDescription")}
        btnText={t("home.MainBtn")}
        imgSrc={plant_img}
      />

      <Banner
        imgSrc={banner_plant}
        title={"We Give Awesome Landscape Service"}
        description={
          " It is a long established fact that a reader will be distracted by the thing."
        }
        items={[
          {
            id: "17286481875",
            number: "200+",
            description: "Satisfied clients per Month",
          },
          {
            id: "17286481876",
            number: "10+",
            description: "Years Practical Experience",
          },
          {
            id: "17286481877",
            number: "60+",
            description: "Awesome Team members",
          },
        ]}
      />

      <ProfServiceSection />
    </div>
  );
}
