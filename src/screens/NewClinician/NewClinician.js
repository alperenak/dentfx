import React, { Component } from "react";

import styles from "./style.scss";

import store from "../../store";

import Input from "../../components/Input";

import backButton from "../../icons/Chevron-right.svg";
import { getCookie } from "../../utils/cookie";

class NewClinician extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    treatmentType: ["Canal treatment", "Filling Treatments", "Implant"],
  };

  submit = async () => {
    let { name, surname, email, password, phone, treatmentType } = this.state;

    let clinic = getCookie("user_id");
    let data = { name, surname, email, password, phone, clinic, treatmentType };

    await store.createDentist(data);
  };

	render() {
		return (
			<div className="cContainer">
				<div className="cContainer__backButton" onClick={() => (window.location = "/clinician")}>
					<img src={backButton} alt="" />
					<div>Back</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>Ad</label>
								<input type="text" placeholder={'Ad'} onChange={value => this.setState({ name: value.target.value })} />
							</div>
						</div>

					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>Soyad</label>
								<input type="text" placeholder={'Soyad'} onChange={value => this.setState({ surname: value.target.value })} />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>E-Posta</label>
								<input type="text" placeholder={'E-Posta'} onChange={value => this.setState({ email: value.target.value })} />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>Şifre</label>
								<input type="password" placeholder={'Şifre'} onChange={value => this.setState({ password: value.target.value })} />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>Telefon Numarası</label>
								<input type="text" placeholder={'Telefon Numarası'} onChange={value => this.setState({ phone: value.target.value })} />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<div className={"login__inputContainer__input"}>
								<label>Treatment Types</label>
								<input type="text" placeholder={'Treatment Types'} onChange={value => this.setState({ treatmentType: value.target.value })} />
							</div>
						</div>

					</div>
					<div class="col-md-12">
						<div className={"login__inputContainer"}>
							<button onClick={this.submit}>Create Clinician</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewClinician;
