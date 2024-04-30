import styles from "./styles.module.css";

import Section from "../../components/Section";
import Banner from "../../components/Banner";
import ProfServiceSection from "../../components/ProfService_Section";

import plant_img from "../../assets/images/home_plant.png";
import banner_plant from "../../assets/images/banner_plant.png";

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
        title={t("home.BannerTitle")}
        description={t("home.BannerDescription")}
        items={[
          {
            id: "17286481875",
            number: "200+",
            description: "home.BannerFirstNm",
          },
          {
            id: "17286481876",
            number: "10+",
            description: "home.BannerSecondNm",
          },
          {
            id: "17286481877",
            number: "60+",
            description: "home.BannerThirdNm",
          },
        ]}
      />

      <ProfServiceSection />
    </div>
  );
}
