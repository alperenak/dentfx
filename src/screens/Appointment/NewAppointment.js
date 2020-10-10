import React, { Component } from "react";

/*** Styles ***/
import styles from "./appointment.scss";

/*** Components ***/
import Input from "../../components/Input";

/*** Icons ***/
import illustration from "../../icons/illustration_2.svg";

class NewAppointment extends Component {
  state = {
    searchParams: {
      dateStart: new Date().toLocaleDateString(),
      dateEnd: new Date().toLocaleDateString(),
      keyword: "",
      location: "",
    },
  };
  submitAppointment = () => {};

  render() {
    return (
      <div className={styles.newAppointment}>
        <div className={styles.header}>
          <img src={illustration} alt="" />
          <div className={styles.headerText}>
            <div className={styles.title}>Hi Peter,</div>
            <div className={styles.subtitle}>make an appointment easily!</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.inputContainer}>
            <Input
              type="text"
              size="full"
              label={"What are you looking for?"}
              placeholder="Ex.: Kanal Tedavisi"
              onChange={(keyword) => {
                console.log(keyword);
                this.setState({
                  searchParams: { ...this.state.searchParams, keyword },
                });
              }}
            />
          </div>

          <div className={styles.twoInputs}>
            <Input
              type="date"
              size="half"
              label={"From Date"}
              defaultValue={new Date().toLocaleDateString()}
              name={"dateStart"}
              onChange={(dateStart) => {
                dateStart = new Date(dateStart).toLocaleDateString();
                this.setState({
                  searchParams: { ...this.state.searchParams, dateStart },
                });
              }}
            />
            <Input
              type="date"
              size="half"
              label={"Until Date"}
              defaultValue={new Date().toLocaleDateString()}
              name={"dateEnd"}
              onChange={(dateEnd) => {
                dateEnd = new Date(dateEnd).toLocaleDateString();

                this.setState({
                  searchParams: { ...this.state.searchParams, dateEnd },
                });
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="select"
              size="full"
              label={"Select Location"}
              placeholder={"Istanbul"}
              onChange={(location) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, location },
                });
              }}
            />
          </div>

          <button className={styles.submitBtn} onClick={this.submitAppointment}>
            Randevu Ara
          </button>
        </div>
      </div>
    );
  }
}

export default NewAppointment;
