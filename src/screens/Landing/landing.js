import React from "react";
import Button from "../../components/Button/button";
import TopBar from "../../components/TopBar/topBar";
import styles from "./landing.module.scss";
import Mobile from "../../assets/images/mobil.png";
import Card from "../../components/Card/card";
import {
  FinansalRaporlarIcon,
  GelirGiderIcon,
  GuvenlikIcon,
  OtomatikHatirlatmaIcon,
  RandevuYonetimIcon,
  TedaviPlanIcon,
} from "../../icons";

function RenderIcon({ type }) {
  console.log(type);
  if (type === "randevu") {
    return <RandevuYonetimIcon className={styles.icons} />;
  } else if (type === "tedavi") {
    return <TedaviPlanIcon className={styles.icons} />;
  } else if (type === "hatirlatma") {
    return <OtomatikHatirlatmaIcon className={styles.icons} />;
  } else if (type === "finansal") {
    return <FinansalRaporlarIcon className={styles.icons} />;
  } else if (type === "gelir") {
    return <GelirGiderIcon className={styles.icons} />;
  } else if (type === "guvenlik") {
    return <GuvenlikIcon className={styles.icons} />;
  } else return <div>hata</div>;
}

export default function Landing() {
  return (
    <div className={styles.LandingPageContainer}>
      <TopBar />
      <div className={styles.LandingPageMain}>
        {/******* Introduction ********/}

        <div className={styles.Introduction}>
          <div className={styles.IntroductionText}>
            <div className={styles.IntroductionTitle}>
              Diş hekimi, hasta takip ve randevu uygulaması.
            </div>
            <div className={styles.IntroductionDescription}>
              Bilgisayar, tablet ve telefonlarda çalışan
              <a> DentFX</a> ile işinize odaklanın!
            </div>
            <Button
              ButtonStyle={"noPadding"}
              className={styles.IntroductionButton}
              title={"Hemen Başla!"}
              type={"tertiary"}
            />
          </div>
          <div className={styles.IntroductionImage}>
            <img src={Mobile} />
          </div>
        </div>

        {/******* Features DentFx ********/}

        <div className={styles.Features}>
          <div className={styles.FeaturesTitle}>Dent FX özellikleri</div>
          <div className={styles.FeaturesDescription}>
            Vitae turpis massa sed elementum tempus egestas sed laculis nunc sed
            augue lacus viverra vitae congue.
          </div>
        </div>

        {/******* Features Card ********/}

        <div className={styles.FeaturesCardContainer}>
          <div className={styles.FeaturesCard}>
            {FeaturesCardsData.map((item) => {
              return (
                <Card type={"features"} title={item.title}>
                  <RenderIcon type={item.type} />
                </Card>
              );
            })}
          </div>
        </div>
        {/*******  Demtist Comments ********/}
        <div className={styles.DentistCommentsContainer}>
          <div className={styles.DentistCommentText}>
            <div className={styles.DentistCommentMediumTitle}>
              Senectus et netus et
            </div>
            <div className={styles.DentistCommentBoldTitle}>
              et malesuada fames.
            </div>
            <div className={styles.DentistCommentDescription}>
              Pharetra sit amet aliquam id diam maecenas ultricies ictum at
              tempor.
            </div>
          </div>
        </div>

        {/*******  Demtist Comments Card ********/}
      </div>
    </div>
  );
}

const FeaturesCardsData = [
  { title: "Randevu Planı", type: "randevu" },
  { title: "Tedavi Planı", type: "tedavi" },
  { title: "Otomatik Hatırlatma", type: "hatirlatma" },
  { title: "Finansal Raporlar", type: "finansal" },
  { title: "Gelir Gider Takibi", type: "gelir" },
  { title: "Güvenlik", type: "guvenlik" },
];
