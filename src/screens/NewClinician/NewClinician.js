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
      <div className={styles.container}>
        <div
          className={styles.backButton}
          onClick={() => (window.location = "/clinician")}
        >
          <img src={backButton} alt="" />
          <div>Back</div>
        </div>
        <div>
          <Input
            type="text"
            label="Ad"
            size={"full"}
            onChange={(value) => this.setState({ name: value })}
          />
          <Input
            type="text"
            label="Soyad"
            size={"full"}
            onChange={(value) => this.setState({ surname: value })}
          />
          <Input
            type="text"
            label="E-Posta"
            size={"full"}
            onChange={(value) => this.setState({ email: value })}
          />
          <Input
            type="password"
            label="Şifre"
            size={"full"}
            onChange={(value) => this.setState({ password: value })}
          />
          <Input
            type="number"
            label="Telefon Numarası"
            size={"full"}
            onChange={(value) => this.setState({ phone: value })}
          />
          <Input
            type="select"
            label="Treatment Types"
            multiple={true}
            size={"full"}
          />
          <button onClick={this.submit}>Create Clinician</button>
        </div>
      </div>
    );
  }
}

export default NewClinician;
