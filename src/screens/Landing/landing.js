// import React from 'react';
// import Button from '../../components/Button/button';
// import Search from '../../components/Search/search';
// import TopBar from '../../components/TopBar/topBar';
// import styles from './landing.scss';
// import Mobile from '../../assets/images/mobil.png';
// import Card from '../../components/Card/card';
// import Man1 from '../../assets/images/man1.jpg';
// import Man2 from '../../assets/images/man1.jpg';
// import Man3 from '../../assets/images/man3.jpg';
// import VideoImage from '../../assets/images/video-bg.png';
// import OnerilenPaket from '../../assets/icons/onerilenPaketIcon.svg';
// import {
//   Arrow,
//   FinansalRaporlarIcon,
//   GelirGiderIcon,
//   GuvenlikIcon,
//   OnerilenPaketIcon,
//   OtomatikHatirlatmaIcon,
//   RandevuYonetimIcon,
//   TedaviPlanIcon,
// } from '../../icons';

// function RenderIcon({ type }) {
//   if (type === 'randevu') {
//     return (
//       <RandevuYonetimIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else if (type === 'tedavi') {
//     return (
//       <TedaviPlanIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else if (type === 'hatirlatma') {
//     return (
//       <OtomatikHatirlatmaIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else if (type === 'finansal') {
//     return (
//       <FinansalRaporlarIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else if (type === 'gelir') {
//     return (
//       <GelirGiderIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else if (type === 'guvenlik') {
//     return (
//       <GuvenlikIcon
//         className={
//           'landingPageContainer__featuresCardContainer__featuresCard__icons'
//         }
//       />
//     );
//   } else return <div>hata</div>;
// }

// export default function Landing() {
//   return (
//     <div class='zeusContainer'>
//       <div className='landingPageContainer'>
//         <div className='landingPageContainer__landingPageMain'>
//           <Search />

//           <div className='landingPageContainer__introduction'>
//             <div className='landingPageContainer__introduction__introductionText'>
//               <div className='landingPageContainer__introduction__introductionTitle'>
//                 Diş hekimi, hasta takip ve randevu uygulaması.
//               </div>
//               <div className='landingPageContainer__introduction__introductionDescription'>
//                 Bilgisayar, tablet ve telefonlarda çalışan
//                 <a> DentFX</a> ile işinize odaklanın!
//               </div>
//               <Button
//                 ButtonStyle={'noPadding'}
//                 className={styles.IntroductionButton}
//                 title={'Hemen Başla!'}
//                 type={'tertiary'}
//                 to={'/login'}
//                 mission={'link'}
//               />
//             </div>
//             <div className='landingPageContainer__introduction__introductionImage'>
//               <img src={Mobile} />
//             </div>
//           </div>

//           {/******* Features DentFx ********/}

//           <div className='landingPageContainer__features'>
//             <div className='landingPageContainer__features__featuresTitle'>
//               Dent FX özellikleri
//             </div>
//             <div className='landingPageContainer__features__featuresDescription'>
//               Vitae turpis massa sed elementum tempus egestas sed laculis nunc
//               sed augue lacus viverra vitae congue.
//             </div>
//           </div>

//           {/******* Features Card ********/}

//           <div className='landingPageContainer__featuresCardContainer'>
//             <div className='landingPageContainer__featuresCardContainer__featuresCard'>
//               <div class='row'>
//                 {FeaturesCardsData.map((item, i) => {
//                   return (
//                     <div class='col-md-4'>
//                       <Card key={i} type={'features'} title={item.title}>
//                         <RenderIcon type={item.type} />
//                       </Card>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           {/*******  Demtist Comments ********/}
//           <div className='landingPageContainer__dentistCommentsContainer'>
//             <div className='landingPageContainer__dentistCommentsContainer__dentistCommentText'>
//               <div className='landingPageContainer__dentistCommentsContainer__dentistCommentMediumTitle'>
//                 Senectus et netus et
//               </div>
//               <div className='landingPageContainer__dentistCommentsContainer__dentistCommentBoldTitle'>
//                 et malesuada fames.
//               </div>
//               <div className='landingPageContainer__dentistCommentsContainer__dentistCommentDescription'>
//                 Pharetra sit amet aliquam id diam maecenas ultricies ictum at
//                 tempor.
//               </div>
//             </div>
//           </div>

//           {/*******  Dentist Comments Card ********/}
//           <div className='landingPageContainer__dentistCommentsCard'>
//             {DentistCommentsData.map((item, i) => {
//               return (
//                 <Card
//                   key={i}
//                   type={item.type}
//                   name={item.name}
//                   content={item.content}
//                   starCount={item.starCount}
//                   avatar={item.avatar}
//                 />
//               );
//             })}
//           </div>

//           <div className='landingPageContainer__commentArrowButtonsContainer'>
//             <div className='landingPageContainer__commentArrowButtonsContainer__commentArrowButtons'>
//               <div className={'arrowCircle'}>
//                 <Arrow className={'arrow'} />
//               </div>
//               <div className={'arrowCircle'}>
//                 <Arrow className={'reverseArrow'} />
//               </div>
//             </div>
//           </div>

//           {/*******  Dentfx Video ********/}

//           <div className='landingPageContainer__videoContainer'>
//             <div className={styles.backgroundAbsolute}>
//               <div className={styles.fullAbsolute}></div>
//             </div>
//             <div className='landingPageContainer__videoContainer__videoContainerText'>
//               <div className='landingPageContainer__videoContainer__videoContainerMediumTitle'>
//                 Senectus et
//               </div>
//               <div className='landingPageContainer__videoContainer__videoContainerBlackTitle'>
//                 malesuada fames.
//               </div>
//               <div className='landingPageContainer__videoContainer__videoContainerDescription'>
//                 Dolor magna eget est lorem ipsum dolor. Urna cursus eget nunc
//                 scelerisque viverra mauris in aliquam. Leo vel orci porta non.
//               </div>
//             </div>
//             <div className='landingPageContainer__videoContainer__videoCard'>
//               <div
//                 className={
//                   'landingPageContainer__videoContainer__videoCard__rotatedCard'
//                 }
//               />
//               <div className={styles.videoImage}>
//                 <img src={VideoImage} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*******  Dentfx Packages ********/}

//         <div className='landingPageContainer__packagesContainer'>
//           <div className='landingPageContainer__packagesContainer__packagesSection'>
//             <div
//               className={
//                 'landingPageContainer__packagesContainer__packagesText'
//               }
//             >
//               <div className='landingPageContainer__packagesContainer__packagesText__packagesMediumTitle'>
//                 frequently asked
//               </div>
//               <div className='landingPageContainer__packagesContainer__packagesText__packagesBlackTitle'>
//                 questions
//               </div>
//             </div>
//             <div className={'landingPageContainer__packagesSmallCards'}>
//               {packagesSmallCardData.map((item, i) => {
//                 return (
//                   <Card
//                     key={i}
//                     type={item.type}
//                     title={item.title}
//                     description={item.description}
//                   >
//                     <OnerilenPaketIcon
//                       svgColor='#57658a'
//                       className={
//                         'landingPageContainer__packagesContainer__packagesSmallCards__packagesIcon'
//                       }
//                     />
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//           <div className={styles.packagesCard}>
//             <Card
//               type={'bigPackages'}
//               packageName={'POLİKLİNİK PAKETİ'}
//               packagePrice={2000}
//               packageDescription={
//                 'Klinik pakete göre daha ekonomik, daha uzun süreli kullanım.'
//               }
//               packagesFeatures={[
//                 'Sınırsız Kullanıcı',
//                 'Sınırsız Doktor',
//                 'Sınırsız Hasta',
//               ]}
//               buttonTitle={'Paket Seç'}
//             >
//               <img src={OnerilenPaket} />
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const FeaturesCardsData = [
//   { title: 'Randevu Planı', type: 'randevu' },
//   { title: 'Tedavi Planı', type: 'tedavi' },
//   { title: 'Otomatik Hatırlatma', type: 'hatirlatma' },
//   { title: 'Finansal Raporlar', type: 'finansal' },
//   { title: 'Gelir Gider Takibi', type: 'gelir' },
//   { title: 'Güvenlik', type: 'guvenlik' },
// ];

// const DentistCommentsData = [
//   {
//     type: 'dentistSay',
//     name: 'Regina Webster',
//     content:
//       'Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..',
//     starCount: 5,
//     avatar: Man1,
//   },
//   {
//     type: 'dentistSay',
//     name: 'Sadie Butler',
//     content:
//       'Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..',
//     starCount: 4,
//     avatar: Man2,
//   },
//   {
//     type: 'dentistSay',
//     name: 'Manuel Cortez',
//     content:
//       'Senectus et netus et malesuada fames ac turpis  nisl tincidunt eget nullam non nisi condimentum  lacinia quis. Sit amet justo donec enim..',
//     starCount: 5,
//     avatar: Man3,
//   },
// ];

// const packagesSmallCardData = [
//   {
//     type: 'packages',
//     title: 'Ücretsiz Paket',
//     description: 'Eget aliquet nibh praesent tristique magna.',
//   },
//   {
//     type: 'packages',
//     title: 'Poliklinik Paketi',
//     description: 'Volutpat commodo sed egestas egestas fringilla.',
//   },
//   {
//     type: 'packages',
//     title: 'Klinik Paketi',
//     description: 'Ultrices sagittis orci a scelerisque.',
//   },
// ];

import React from 'react';
import LandingHeader from '../../components/LandingPage/LandingHeader/LandingHeader';
import LandingBody from '../../components/LandingPage/LandingBody/LandingBody';
import LandingFooter from '../../components/LandingPage/LandingFooter/LandingFooter';

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </div>
  );
};

export default Landing;
