import React, { useState } from "react";

/*** Components ***/
import Input from "../../components/Input";
import Button from "../../components/Button/button";
import { Link } from "react-router-dom";
/*** Styles ***/
import "./login.scss";

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
	  <div className={"login"} >
  		<div className={"container login__container"} style={{"height":"100vh"}}>
  			<div className={"login__inner row"}>
  				<div className={"loginImageCol col-md-6"} style={{
					"background-image":"url("+loginImage+")",
					"width":"auto!important",
					"height":"auto!important"
				}}>
  					<img className={"login__image__loginIcon"} src={dentfxIcon} alt={'icon'} />
  					<div className={"login__image__loginText"}>
  						<div className={"login__image__header"}>Urna et pharetra</div>
  						<div className={"login__image__text"}>Nunc congue nisi vitae suscipit tellus mauris. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Ultrices eros in cursus massa tincidunt dui ut ornare.</div>
  					</div>
  				</div>
  				<div className={"login__formContainer col-xl-6 col-lg-12"}>
  					<div className={"login__buttonContainer"}>
  						<Link to={'/signup'} className={"login__buttonContainer__signUp"}>Kaydol</Link>
  					</div>
  					<div className={"login__welcomingSection"}>
  						<img src={loginIcon} alt={"loginIcon"}/>
  						<div className={"login__welcomingSection__textContainer"}>
  							<span className={"login__welcomingSection__header"}>DentFX’e Giriş Yap!</span>
  							<span className={"login__welcomingSection__text"}>Hoşgeldin!</span>
  						</div>
  					</div>
  					<div className={"login__inputContainer"}>
  						<div className={"login__inputContainer__input"}>
  							<label>E-Posta</label>
  							<input type="text" placeholder={'e-posta'} onChange={email => setEmail(email.target.value)} />
  						</div>
  					</div>
  					<div className={"login__inputContainer"}>
  						<div className={"login__inputContainer__input"}>
  							<label>Şifre</label>
  							<input type="password" placeholder={'şifre'} onChange={password => setPassword(password.target.value)} />
  						</div>
  					</div>
  					<div className={"login__forgotPassword"}>
  						<Link to={'/signup'} className={"login__buttonContainer__forgot"}>Şifreni mi Unuttun?</Link>
  					</div>
  					<div className={"login__signInButtons"}>
  						<div className={"login__signInButtons__signInButton"}>
  							<button className={"login__buttonContainer__tertiary"} onClick={() => login({email, password})}>Giriş Yap</button>
  						</div>
  						<div className={"login__signInButtons__strokeContainer"}>
  							<div className={"login__signInButtons__strokeContainer__stroke"}/>
  							<div className={"login__signInButtons__strokeContainer__strokeText"}>veya</div>
  							<div className={"login__signInButtons__strokeContainer__stroke"} />
  						</div>
  						<div className={"login__signInButtons__signInButton"}>
  							<button className={"login__buttonContainer__ghost"} onClick={() => login({email, password})}>Facebook ile giriş yap?</button>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  );
}
