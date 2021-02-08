import React from 'react';
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
    backgroundColor: 'transparent',
  },
  roottt: {
    overflow: 'initial',
    maxWidth: 400,
  },
  title: {
    marginBottom: 0,
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
            <img
              className='body__banner__icons__icon'
              src='https://picsum.photos/100/100'
            />
            <img
              className='body__banner__icons__icon'
              src='https://picsum.photos/100/100'
            />
            <img
              className='body__banner__icons__icon'
              src='https://picsum.photos/100/100'
            />
          </div>
        </div>

        <div className='body__popular'>
          <p className='body__popular__title'>Popüler Klinikler</p>
          <div>
            <Slider {...settings}>
              <div>
                <img src='https://picsum.photos/400/400' />
              </div>
              <div>
                <img src='https://picsum.photos/400/400' />
              </div>
              <div>
                <img src='https://picsum.photos/400/400' />
              </div>
              <div>
                <img src='https://picsum.photos/400/400' />
              </div>
              <div>
                <img src='https://picsum.photos/400/400' />
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '50px',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h1>3</h1>
                  <h6>SehirI</h6>
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '50px',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h1>121</h1>
                  <h6>Klinik</h6>
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '50px',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h1>423</h1>
                  <h6>Doktor</h6>
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '50px',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
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
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia
                    classes={mediaStyles}
                    image={
                      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    }
                  />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>Colloseo</h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span>Rome</span>
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
                      Talking about travelling or new jobs, many people often
                      think of change of environment...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia
                    classes={mediaStyles}
                    image={
                      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    }
                  />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>Colloseo</h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span>Rome</span>
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
                      Talking about travelling or new jobs, many people often
                      think of change of environment...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card elevation={0} className={styles.root}>
                  <CardMedia
                    classes={mediaStyles}
                    image={
                      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    }
                  />
                  <CardContent className={(shadowStyles.root, styles.content)}>
                    <h3 className={styles.title}>Colloseo</h3>
                    <Box
                      color={'grey.500'}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                    >
                      <LocationOn className={styles.locationIcon} />
                      <span>Rome</span>
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
                      Talking about travelling or new jobs, many people often
                      think of change of environment...
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

        <div className='body__clinics'>
          <p className='body__clinics__title'>Nasıl Çalışır?</p>
          <div className='body__clinics__cards'>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <Card className={styles.roott} variant='outlined'>
                  <CardContent>
                    <img src='https://picsum.photos/275/150' />
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
                <Card className={styles.roott} variant='outlined'>
                  <CardContent>
                    <img src='https://picsum.photos/275/150' />
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
                <Card className={styles.roott} variant='outlined'>
                  <CardContent>
                    <img src='https://picsum.photos/275/150' />
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

        <div className='body__gorusler'>
          <div className='body__gorusler__cards'>
            <p className='body__gorusler__title'>Görüşler</p>
            <Grid container spacing={10} alignItems='flex-end'>
              <Grid item>
                <Card className={styles.roottt} variant='outlined'>
                  <CardContent>
                    <img src='https://picsum.photos/350/100' />
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
                    <img src='https://picsum.photos/350/100' />
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
                    <img src='https://picsum.photos/350/100' />
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
                <img src='https://picsum.photos/60/60' />
              </Grid>
              <Grid item>
                <img src='https://picsum.photos/60/60' />
              </Grid>
              <Grid item>
                <img src='https://picsum.photos/60/60' />
              </Grid>
              <Grid item>
                <img src='https://picsum.photos/60/60' />
              </Grid>
              <Grid item>
                <img src='https://picsum.photos/60/60' />
              </Grid>
              <Grid item>
                <img src='https://picsum.photos/60/60' />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBody;
