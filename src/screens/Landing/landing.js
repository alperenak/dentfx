import React from "react";
import Button from "../../components/Button/button";
import TopBar from "../../components/TopBar/topBar";
import styles from "./landing.module.scss";
import Mobile from "../../assets/images/mobil.png";
import Card from "../../components/Card/card";
import Man1 from "../../assets/images/man1.jpg";
import Man2 from "../../assets/images/man2.webp";
import Man3 from "../../assets/images/man3.jpg";
import VideoImage from "../../assets/images/video-bg.png";
import OnerilenPaket from "../../assets/icons/onerilenPaketIcon.svg";
import {
  Arrow,
  FinansalRaporlarIcon,
  GelirGiderIcon,
  GuvenlikIcon,
  OnerilenPaketIcon,
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

        {/*******  Dentist Comments Card ********/}
        <div className={styles.dentistCommentsCard}>
          {DentistCommentsData.map((item) => {
            return (
              <Card
                type={item.type}
                name={item.name}
                content={item.content}
                starCount={item.starCount}
                avatar={item.avatar}
              />
            );
          })}
        </div>

        <div className={styles.commentArrowButtonsContainer}>
          <div className={styles.commentArrowButtons}>
            <div className={styles.arrowCircle}>
              <Arrow className={styles.arrow} />
            </div>
            <div className={styles.arrowCircle}>
              <Arrow className={styles.reverseArrow} />
            </div>
          </div>
        </div>

        {/*******  Dentfx Video ********/}

        <div className={styles.videoContainer}>
          <div className={styles.backgroundAbsolute}>
            <div className={styles.fullAbsolute}></div>
          </div>
          <div className={styles.videoContainerText}>
            <div className={styles.videoContainerMediumTitle}>Senectus et</div>
            <div className={styles.videoContainerBlackTitle}>
              malesuada fames.
            </div>
            <div className={styles.videoContainerDescription}>
              Dolor magna eget est lorem ipsum dolor. Urna cursus eget nunc
              scelerisque viverra mauris in aliquam. Leo vel orci porta non.
            </div>
          </div>
          <div className={styles.videoCard}>
            <div className={styles.rotatedCard} />
            <div className={styles.videoImage}>
              <img src={VideoImage} />
            </div>
          </div>
        </div>
      </div>

      {/*******  Dentfx Packages ********/}

      <div className={styles.packagesContainer}>
        <div className={styles.packagesSection}>
          <div className={styles.packagesText}>
            <div className={styles.packagesMediumTitle}>frequently asked</div>
            <div className={styles.packagesBlackTitle}>questions</div>
          </div>
          <div className={styles.packagesSmallCards}>
            {packagesSmallCardData.map((item) => {
              return (
                <Card
                  type={item.type}
                  title={item.title}
                  description={item.description}
                >
                  <OnerilenPaketIcon
                    svgColor="#57658a"
                    className={styles.packagesIcon}
                  />
                </Card>
              );
            })}
          </div>
        </div>
        <div className={styles.packagesCard}>
          <Card
            type={"bigPackages"}
            packageName={"POLİKLİNİK PAKETİ"}
            packagePrice={2000}
            packageDescription={
              "Klinik pakete göre daha ekonomik, daha uzun süreli kullanım."
            }
            packagesFeatures={[
              "Sınırsız Kullanıcı",
              "Sınırsız Doktor",
              "Sınırsız Hasta",
            ]}
            buttonTitle={"Paket Seç"}
          >
            <img src={OnerilenPaket} />
          </Card>
        </div>
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

const DentistCommentsData = [
  {
    type: "dentistSay",
    name: "Regina Webster",
    content:
      "Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..",
    starCount: 5,
    avatar: Man1,
  },
  {
    type: "dentistSay",
    name: "Sadie Butler",
    content:
      "Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..",
    starCount: 4,
    avatar: Man2,
  },
  {
    type: "dentistSay",
    name: "Manuel Cortez",
    content:
      "Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..",
    starCount: 5,
    avatar: Man3,
  },
];

const packagesSmallCardData = [
  {
    type: "packages",
    title: "Ücretsiz Paket",
    description: "Eget aliquet nibh praesent tristique magna.",
  },
  {
    type: "packages",
    title: "Poliklinik Paketi",
    description: "Volutpat commodo sed egestas egestas fringilla.",
  },
  {
    type: "packages",
    title: "Klinik Paketi",
    description: "Ultrices sagittis orci a scelerisque.",
  },
];
