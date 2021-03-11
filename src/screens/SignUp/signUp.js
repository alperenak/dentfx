import React, { useState } from 'react';

/*** Components ***/
import { Link } from 'react-router-dom';
/*** Styles ***/
import './signup.scss';

/*** Images ***/
import signUpImage from '../../assets/images/login-photo.png';

/*** Icons ***/
import signUpIcon from '../../assets/icons/login-icon.svg';
import dentfxIcon from '../../assets/icons/logo.svg';

/*** Utils ***/
import store from '../../store';

async function signUp({ name, surname, email, password, phone }) {
  let res = await store.createUser({ name, surname, email, password, phone });
  if (res.status === 200) {
    window.location.pathname = '/login';
  } else {
    //res.errorData.title
    //res.errorData.message
  }
}

export default function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={'login'}>
      <div className={'container login__container'} style={{ height: '100vh' }}>
        <div className={'login__inner'}>
          <div
            className={'loginImageCol col-md-6'}
            style={{
              'background-image': 'url(' + signUpImage + ')',
              width: 'auto!important',
              height: 'auto!important',
            }}
          >
            <img
              className={'login__image__loginIcon'}
              src={dentfxIcon}
              alt={'icon'}
            />
            <div className={'login__image__loginText'}>
              <div className={'login__image__header'}>Urna et pharetra</div>
              <div className={'login__image__text'}>
                Nunc congue nisi vitae suscipit tellus mauris. Laoreet non
                curabitur gravida arcu ac tortor dignissim convallis aenean.
                Ultrices eros in cursus massa tincidunt dui ut ornare.
              </div>
            </div>
          </div>
          <div className={'login__formContainer col-xl-6 col-lg-12'}>
            <div className={'login__buttonContainer'}>
              <Link to={'/login'} className={'login__buttonContainer__signUp'}>
                Giriş Yap
              </Link>
            </div>
            <div className={'login__welcomingSection'}>
              <img src={signUpIcon} alt={'loginIcon'} />
              <div className={'login__welcomingSection__textContainer'}>
                <span className={'login__welcomingSection__header'}>
                  DentFX’e Kayıt Ol!
                </span>
                <span className={'login__welcomingSection__text'}>
                  Hoşgeldin!
                </span>
              </div>
            </div>
            <div className={'login__inputContainer'}>
              <div className="row">
                <div className="col-md-6">
                  <div className={'login__inputContainer__input'}>
                    <label>Ad</label>
                    <input
                      type="text"
                      placeholder={'ad'}
                      onChange={(value) => setName(value.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={'login__inputContainer__input'}>
                    <label>Soyad</label>
                    <input
                      type="text"
                      placeholder={'soyad'}
                      onChange={(value) => setSurname(value.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={'login__inputContainer__input'}>
                  <label>E-Posta</label>
                  <input
                    type="text"
                    placeholder={'e-posta'}
                    onChange={(value) => setEmail(value.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={'login__inputContainer__input'}>
                  <label>Şifre</label>
                  <input
                    type="text"
                    placeholder={'şifre'}
                    onChange={(value) => setPassword(value.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={'login__inputContainer__input'}>
                  <label>Telefon</label>
                  <input
                    type="text"
                    placeholder={'0(000)-00-00'}
                    onChange={(value) => setPhone(value.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={'login__signInButtons'}>
              <div className={'login__signInButtons__signInButton'}>
                <button
                  className={'login__buttonContainer__tertiary'}
                  onClick={() =>
                    signUp({ name, surname, email, password, phone })
                  }
                >
                  Kaydol
                </button>
              </div>
              <div className={'login__signInButtons__strokeContainer'}>
                <div
                  className={'login__signInButtons__strokeContainer__stroke'}
                />
                <div
                  className={
                    'login__signInButtons__strokeContainer__strokeText'
                  }
                >
                  veya
                </div>
                <div
                  className={'login__signInButtons__strokeContainer__stroke'}
                />
              </div>
              <div className={'login__signInButtons__signInButton'}>
                <button
                  className={'login__buttonContainer__ghost'}
                  onClick={() => null}
                >
                  Facebook ile giriş yap?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
