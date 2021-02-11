import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import { LocationCity, Search, LocationOn } from '@material-ui/icons';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import Slider from 'react-slick';
import './LandingBody.scss';
import doctor from '../../../assets/images/you-doctor.jpg';
import chair from '../../../assets/images/dentist-chair.jpg';
import nurse from '../../../assets/images/dentist-nurse-patient.jpg';
import dentalcabinet from '../../../assets/images/dental-cabinet.jpg';
import medicalcabinet from '../../../assets/images/medical-cabinet.jpg';
import equipments from '../../../assets/images/dentist-equipment.jpg';

import implantIcon from '../../../assets/icons/implant.svg';
import ortodonti from '../../../assets/icons/ortodonti.svg';
import gulusTasarimi from '../../../assets/icons/gulusTasarimi.svg';

import ref1 from '../../../assets/images/ref1.jpeg';
import ref2 from '../../../assets/images/ref2.jpeg';
import ref3 from '../../../assets/images/ref3.jpeg';
import ref4 from '../../../assets/images/ref4.jpeg';

import klinik from '../../../icons/Klinik.svg';
import randevu from '../../../icons/Randevu.svg';
import searchMap from '../../../icons/SearchMap.svg';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
    backgroundColor: 'transparent',
    borderRadius: '25%',
  },
  roott: {
    overflow: 'initial',
    maxWidth: 304,
    height: 350,
    backgroundColor: '#f9f9f9',
  },
  roottt: {
    overflow: 'initial',
    maxWidth: 300,
  },
  title: {
    color: '#a12b70',
    marginBottom: 0,
    fontSize: '14px',
  },
  rateValue: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  content: {
    position: 'relative',
    padding: 0,
    margin: '-3% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  favorite: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

const LandingBody = () => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });

  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const submitSearch = () => {
    history.push(`searchPage?keyword=${keyword}&city=${location}`);
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <link
        rel='stylesheet'
        type='text/css'
        charset='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <div className='body'>
        <div className='body__banner'>
          <p className='body__banner__title'>
            Türkiye’nin her yerinden diş klinikleri bulun
          </p>
          <p className='body__banner__description'>
            Tek aramayla tüm kliniklere ulaşın!
          </p>
          <div className='body__banner__search'>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item>
                <LocationCity style={{ color: '#a12b70' }} />
              </Grid>
              <Grid item>
                <TextField
                  id='input-with-icon-grid'
                  placeholder='Arama adı, konum, uzmanlık alanı'
                  inputProps={{ style: { fontSize: 12, width: 200 } }}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
              </Grid>
              <hr
                style={{
                  height: '30px',
                  width: '0',
                  border: '1px solid #7a7a7a',
                  margin: '0  50px 0',
                }}
              ></hr>
              <Grid item>
                <LocationCity style={{ color: '#a12b70' }} />
              </Grid>
              <Grid item>
                <TextField
                  id='input-with-icon-grid'
                  placeholder='Sehire gore arama'
                  inputProps={{ style: { fontSize: 12, width: 200 } }}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </Grid>
              <hr
                style={{
                  height: '30px',
                  width: '0',
                  border: '1px solid #7a7a7a',
                  margin: '0  50px 0',
                }}
              ></hr>
              <Grid item>
                <Button
                  variant='contained'
                  startIcon={<Search />}
                  style={{
                    backgroundColor: '#a12b70',
                    color: 'white',
                    width: '200px',
                    fontSize: '12px',
                  }}
                  onClick={submitSearch}
                >
                  Arama yap
                </Button>
              </Grid>
            </Grid>
          </div>
          <p className='body__banner__searchDescription'>
            Uzmanlığa göre hızlı aramayı deneyin:
          </p>
          <div className='body__banner__icons'>
            <img className='body__banner__icons__icon' src={implantIcon} />
            <img className='body__banner__icons__icon' src={ortodonti} />
            <img className='body__banner__icons__icon' src={gulusTasarimi} />
          </div>
        </div>

        <div className='body__popular'>
          <p className='body__popular__title'>Popüler Klinikler</p>
          <div>
            <Slider {...settings}>
              <div>
                <img style={{ width: '450px', height: '300px' }} src={doctor} />
              </div>
              <div>
                <img style={{ width: '450px', height: '300px' }} src={chair} />
              </div>
              <div>
                <img style={{ width: '450px', height: '300px' }} src={nurse} />
              </div>
              <div>
                <img style={{ width: '450px', height: '300px' }} src={doctor} />
              </div>
              <div>
                <img style={{ width: '450px', height: '300px' }} src={chair} />
              </div>
            </Slider>
            <div className='body__popular__button'>
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#a12b70',
                  color: 'white',
                  width: '200px',
                  height: '30px',
                  fontSize: '12px',
                }}
                href='/searchPage'
              >
                Tumunu gor
              </Button>
            </div>
          </div>
        </div>

        <div className='body__stats'>
          <div className='body__stats__words'>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <div className='body__stats__words__items'>
                  <h1>3</h1>
                  <h6>SehirI</h6>
                </div>
              </Grid>
              <Grid item>
                <div className='body__stats__words__items'>
                  <h1>121</h1>
                  <h6>Klinik</h6>
                </div>
              </Grid>
              <Grid item>
                <div className='body__stats__words__items'>
                  <h1>423</h1>
                  <h6>Doktor</h6>
                </div>
              </Grid>
              <Grid item>
                <div className='body__stats__words__items'>
                  <h1>10.521</h1>
                  <h6>Hasta</h6>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className='body__clinics'>
          <p className='body__clinics__title'>Bölümlere Göre Klinikler</p>
          <div className='body__clinics__cards'>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia classes={mediaStyles} image={dentalcabinet} />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>
                      Angora Ağız ve Diş Sağlığı Merkezi
                    </h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span style={{ fontSize: '12px' }}>Rome</span>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                      className={gutterStyles.parent}
                    >
                      <Typography
                        variant={'body2'}
                        className={styles.rateValue}
                      >
                        4.0
                      </Typography>
                    </Box>
                    <Typography color={'textSecondary'} variant={'body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quis consequat netus nec dui netus orci senectus egestas.
                      Sit maecenas sit viverra adipiscing ac faucibus eu et
                      urna. Ullamcorper enim cursus amet, feugiat praesent
                      varius. Ultrices non tempor libero, vulputate dui
                      elementum. Pulvinar venenatis, et pellentesque sed sed
                      viverra eu metus. Arcu justo, facilisis vel diam pulvinar.
                      Praesent duis varius vitae,
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia classes={mediaStyles} image={medicalcabinet} />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>
                      Angora Ağız ve Diş Sağlığı Merkezi
                    </h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span style={{ fontSize: '12px' }}>Rome</span>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                      className={gutterStyles.parent}
                    >
                      <Typography
                        variant={'body2'}
                        className={styles.rateValue}
                      >
                        4.0
                      </Typography>
                    </Box>
                    <Typography color={'textSecondary'} variant={'body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quis consequat netus nec dui netus orci senectus egestas.
                      Sit maecenas sit viverra adipiscing ac faucibus eu et
                      urna. Ullamcorper enim cursus amet, feugiat praesent
                      varius. Ultrices non tempor libero, vulputate dui
                      elementum. Pulvinar venenatis, et pellentesque sed sed
                      viverra eu metus. Arcu justo, facilisis vel diam pulvinar.
                      Praesent duis varius vitae,
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia classes={mediaStyles} image={equipments} />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>
                      Angora Ağız ve Diş Sağlığı Merkezi
                    </h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span style={{ fontSize: '12px' }}>Rome</span>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                      className={gutterStyles.parent}
                    >
                      <Typography
                        variant={'body2'}
                        className={styles.rateValue}
                      >
                        4.0
                      </Typography>
                    </Box>
                    <Typography color={'textSecondary'} variant={'body2'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quis consequat netus nec dui netus orci senectus egestas.
                      Sit maecenas sit viverra adipiscing ac faucibus eu et
                      urna. Ullamcorper enim cursus amet, feugiat praesent
                      varius. Ultrices non tempor libero, vulputate dui
                      elementum. Pulvinar venenatis, et pellentesque sed sed
                      viverra eu metus. Arcu justo, facilisis vel diam pulvinar.
                      Praesent duis varius vitae,
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className='body__clinics__button'>
            <Button
              variant='contained'
              style={{
                backgroundColor: '#a12b70',
                color: 'white',
                width: '200px',
                height: '30px',
                fontSize: '12px',
              }}
            >
              Tumunu gor
            </Button>
          </div>
        </div>

        <div className='body__message'>
          <div className='body__message__words'>
            <h2>
              Sağlık hizmeti sağlayıcılarının Dentfx'te listelendiğinden emin
              oluyoruz.
            </h2>
            <h2>Sıkı kalite güvence kriterlerimize uymak.</h2>
          </div>
        </div>

        <div className='body__nasil'>
          <p className='body__nasil__title'>Nasıl Çalışır?</p>
          <p className='body__nasil__description'>
            Nerden başlayacağınızdan emin değilseniz aşağıdaki adımları izleyin.
          </p>
          <div className='body__nasil__cards'>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <Card className={styles.roott} variant='outlined'>
                  <CardContent style={{ textAlign: 'center' }}>
                    <img
                      src={searchMap}
                      style={{ textAlign: 'center', marginBottom: '10px' }}
                    />
                    <Typography
                      variant='h5'
                      component='h2'
                      style={{
                        textAlign: 'center',
                        color: '#a12b70',
                        marginBottom: '10px',
                      }}
                    >
                      İhtiyacınız olan Kliniği bulun
                    </Typography>
                    <Typography
                      variant='body2'
                      component='p'
                      style={{ color: '#7c7c7c', marginBottom: '10px' }}
                    >
                      Tam olarak istediğinizi elde etmek için şehiri veya
                      departmanı seçerek aramanızı filtrelerle kişiselleştirin.
                      Hatta bunları sağlanan hizmetlere göre
                      filtreleyebilirsiniz.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={styles.roott} variant='outlined'>
                  <CardContent style={{ textAlign: 'center' }}>
                    <img
                      src={randevu}
                      style={{ textAlign: 'center', marginBottom: '10px' }}
                    />
                    <Typography
                      variant='h5'
                      component='h2'
                      style={{
                        textAlign: 'center',
                        color: '#a12b70',
                        marginBottom: '10px',
                      }}
                    >
                      Randevu isteği gönderin
                    </Typography>
                    <Typography
                      variant='body2'
                      component='p'
                      style={{ color: '#7c7c7c' }}
                    >
                      Kliniklere bakın. Kliniğin sayfasında kliniğin
                      ayrıntılarını, sağlanan hizmetleri, incelemeleri, sağlık
                      personelini ve daha fazlasını görün. Klinik ihtiyacınız
                      olanı sunuyorsa randevu formunu doldurun.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={styles.roott} variant='outlined'>
                  <CardContent
                    style={{ textAlign: 'center', marginBottom: '10px' }}
                  >
                    <img
                      src={klinik}
                      style={{ textAlign: 'center', marginBottom: '10px' }}
                    />
                    <Typography
                      variant='h5'
                      component='h2'
                      style={{
                        textAlign: 'center',
                        color: '#a12b70',
                        marginBottom: '10px',
                      }}
                    >
                      Kliniğin sizinle iletişime geçmesini isteyin
                    </Typography>
                    <Typography
                      variant='body2'
                      component='p'
                      style={{ color: '#7c7c7c' }}
                    >
                      Yolculuğunuz hakkında herhangi bir sorunuz varsa,
                      kliniğiniz yalnızca bir mesaj uzağınızda. Ayrıca yerel
                      ipuçları ve tavsiyeler de sunabilirler. İsteğinize cevap
                      vermelerini bekleyin.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className='body__gorusler'>
          <div className='body__gorusler__cards'>
            <p className='body__gorusler__title'>Görüşler</p>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <Card className={styles.roottt} variant='outlined'>
                  <CardContent>
                    <p style={{ fontSize: '12px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lectus penatibus cras senectus eros, et auctor ornare
                      rhoncus, tristique. Accumsan, elit gravida cursus nunc
                      nunc platea in elit. Sit facilisis feugiat velit eget
                      nulla. Viverra et sit est habitant arcu. Tristique eu
                      porttitor lectus mattis. Diam eu in amet, arcu enim donec
                      imperdiet.
                    </p>
                    <Typography variant='h5' component='h2'>
                      İhtiyacınız olan Kliniği bulun
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Tam olarak istediğinizi elde etmek için şehiri veya
                      departmanı seçerek aramanızı filtrelerle kişiselleştirin.
                      Hatta bunları sağlanan hizmetlere göre
                      filtreleyebilirsiniz.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={styles.roottt} variant='outlined'>
                  <CardContent>
                    <p style={{ fontSize: '12px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lectus penatibus cras senectus eros, et auctor ornare
                      rhoncus, tristique. Accumsan, elit gravida cursus nunc
                      nunc platea in elit. Sit facilisis feugiat velit eget
                      nulla. Viverra et sit est habitant arcu. Tristique eu
                      porttitor lectus mattis. Diam eu in amet, arcu enim donec
                      imperdiet.
                    </p>
                    <Typography variant='h5' component='h2'>
                      İhtiyacınız olan Kliniği bulun
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Tam olarak istediğinizi elde etmek için şehiri veya
                      departmanı seçerek aramanızı filtrelerle kişiselleştirin.
                      Hatta bunları sağlanan hizmetlere göre
                      filtreleyebilirsiniz.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={styles.roottt} variant='outlined'>
                  <CardContent>
                    <p style={{ fontSize: '12px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lectus penatibus cras senectus eros, et auctor ornare
                      rhoncus, tristique. Accumsan, elit gravida cursus nunc
                      nunc platea in elit. Sit facilisis feugiat velit eget
                      nulla. Viverra et sit est habitant arcu. Tristique eu
                      porttitor lectus mattis. Diam eu in amet, arcu enim donec
                      imperdiet.
                    </p>
                    <Typography variant='h5' component='h2'>
                      İhtiyacınız olan Kliniği bulun
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Tam olarak istediğinizi elde etmek için şehiri veya
                      departmanı seçerek aramanızı filtrelerle kişiselleştirin.
                      Hatta bunları sağlanan hizmetlere göre
                      filtreleyebilirsiniz.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className='body__references'>
          <p className='body__references__title'>Referanslarimiz</p>
          <div className='body__references__cards'>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <img src={ref1} />
              </Grid>
              <Grid item>
                <img src={ref2} />
              </Grid>
              <Grid item>
                <img src={ref3} />
              </Grid>
              <Grid item>
                <img src={ref4} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBody;
