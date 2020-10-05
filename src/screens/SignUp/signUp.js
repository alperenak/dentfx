import React, {useState} from 'react';

/*** Components ***/
import Input from "../../components/Input";
import Button from "../../components/Button/button";

/*** Styles ***/
import styles from './signup.scss';

/*** Images ***/
import signUpImage from '../../assets/images/login-photo.png';

/*** Icons ***/
import signUpIcon from '../../assets/icons/login-icon.svg';
import dentfxIcon from '../../assets/icons/logo.svg';

/*** Utils ***/
import store from "../../store";
import {setCookie} from "../../utils/cookie";

async function signUp({name, surname, email, password, phone}) {
  let res = await store.createUser({name, surname, email, password, phone});
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
    <div className={styles.SignUp}>
      <div className={styles.Container}>
        <div className={styles.image}>
          <img className={styles.signUpImage} src={signUpImage} alt={'image'} />
          <img className={styles.signUpIcon} src={dentfxIcon} alt={'icon'} />
          <div className={styles.signUpText}>
            <div className={styles.header}>Urna et pharetra</div>
            <div className={styles.text}>Nunc congue nisi vitae suscipit tellus mauris. Laoreet non
              curabitur gravida arcu ac tortor dignissim convallis aenean.
              Ultrices eros in cursus massa tincidunt dui ut ornare.</div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.buttonContainer}>
            <Button className={styles.login} type={'ghost'} title={'Giriş Yap'} mission={'link'} to={'/login'} />
          </div>
          <div className={styles.welcomingSection}>
            <img src={signUpIcon} alt={"signUpIcon"}/>
            <div className={styles.textContainer}>
              <span className={styles.header}>DentFX’e Kaydol!</span>
              <span className={styles.text}>Hoşgeldin!</span>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'text'}
              size={'large'}
              className={styles.input}
              label={'Ad'}
              placeholder={'ad'}
              onChange={value => setName(value)}
            />
            <Input
              type={'text'}
              size={'large'}
              className={styles.input}
              label={'Soyad'}
              placeholder={'soyad'}
              onChange={value => setSurname(value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'text'}
              size={'large'}
              className={styles.input}
              label={'E-Posta'}
              placeholder={'e-posta'}
              onChange={value => setEmail(value)}
            />
            <Input
              type={'password'}
              size={'large'}
              className={styles.input}
              label={'Şifre'}
              placeholder={'şifre'}
              onChange={value => setPassword(value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'text'}
              className={styles.phone}
              size={'large'}
              label={'Telefon'}
              placeholder={'0(000)-00-00'}
              onChange={value => setPhone(value)}
            />
          </div>
          <div className={styles.forgotPassword}>
            <Button
              type={'primary'}
              title={'Şifreni mi Unuttun?'}
            />
          </div>
          <div className={styles.signInButtons}>
            <Button
              type={'tertiary'}
              title={'Kaydol'}
              className={styles.signInButton}
              onClick={() => signUp({name, surname, email, password, phone})}
            />
            <div className={styles.strokeContainer}>
              <div className={styles.stroke} />
              <div className={styles.strokeText}>veya</div>
              <div className={styles.stroke} />
            </div>
            <Button
              type={'ghost'}
              title={'Facebook ile giriş yap?'}
              className={styles.signInButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


