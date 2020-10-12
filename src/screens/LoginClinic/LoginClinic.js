import React, { useState } from "react";

/*** Components ***/
import Input from "../../components/Input";
import Button from "../../components/Button/button";

/*** Styles ***/
import styles from "./login.scss";

/*** Images ***/
import loginImage from "../../assets/images/login-photo.png";

/*** Icons ***/
import loginIcon from "../../assets/icons/login-icon.svg";
import dentfxIcon from "../../assets/icons/logo.svg";

/*** Utils ***/
import store from "../../store";
import { setCookie } from "../../utils/cookie";

async function login({ email, password }) {
  let res = await store.clinicLogin({ email, password });
  if (res.status === 200) {
    setCookie("token", res.data.token, {});
    setCookie("user_id", res.data.id, {});
    setCookie("user_type", "clinic", {});
    window.location.pathname = `/profile/${res.data.id}`;
  } else {
    //res.errorData.title
    //res.errorData.message
  }
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.Login}>
      <div className={styles.Container}>
        <div className={styles.image}>
          <img className={styles.loginImage} src={loginImage} alt={"image"} />
          <img className={styles.loginIcon} src={dentfxIcon} alt={"icon"} />
          <div className={styles.loginText}>
            <div className={styles.header}>Urna et pharetra</div>
            <div className={styles.text}>
              Nunc congue nisi vitae suscipit tellus mauris. Laoreet non
              curabitur gravida arcu ac tortor dignissim convallis aenean.
              Ultrices eros in cursus massa tincidunt dui ut ornare.
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.signUp}
              type={"ghost"}
              title={"Kaydol"}
              mission={"link"}
              to={"/signup"}
            />
          </div>
          <div className={styles.welcomingSection}>
            <img src={loginIcon} alt={"loginIcon"} />
            <div className={styles.textContainer}>
              <span className={styles.header}>DentFX’e Giriş Yap!</span>
              <span className={styles.text}>Hoşgeldin!</span>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={"text"}
              size={"large"}
              className={styles.input}
              label={"E-Posta"}
              placeholder={"e-posta"}
              onChange={(value) => setEmail(value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={"password"}
              size={"large"}
              className={styles.input}
              label={"Şifre"}
              placeholder={"şifre"}
              onChange={(value) => setPassword(value)}
            />
          </div>
          <div className={styles.forgotPassword}>
            <Button type={"primary"} title={"Şifreni mi Unuttun?"} />
          </div>
          <div className={styles.signInButtons}>
            <Button
              type={"tertiary"}
              title={"Giriş Yap"}
              className={styles.signInButton}
              onClick={() => login({ email, password })}
            />
            <div className={styles.strokeContainer}>
              <div className={styles.stroke} />
              <div className={styles.strokeText}>veya</div>
              <div className={styles.stroke} />
            </div>
            <Button
              type={"ghost"}
              title={"Facebook ile giriş yap?"}
              className={styles.signInButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
