import React, { Component } from "react";

/*** Styles ***/
import styles from "./rightMenu.scss";

/*** Icons ***/
import sendIcon from "../../icons/send.svg";
import checkpointIcon from "../../icons/Shape.svg";
import dentalImplantIcon from "../../icons/dental-implant.svg";
import dropdownIcon from "../../icons/dropdown-disabled.svg";
import dentHospitalIcon from "../../icons/dent-hospital-icon.svg";
import dentalAnalysisIcon from "../../icons/dental-analysis-icon.svg";

class Accordion extends Component {
  state = { classname_open: "" };

  onClickExpand = () => {
    this.setState({
      classname_open: this.state.classname_open === "" ? styles.open : "",
    });
  };

  render() {
    let { record } = this.props;
    let { classname_open } = this.state;

    return (
      <div className={`${styles.accordion_container} ${classname_open}`}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <img src={dentalImplantIcon} alt="" />
          </div>

          <div className={styles.content}>
            <div className={styles.title}>{record?.title}</div>

            <div className={styles.extras}>
              <div className={styles.date}>{record?.date}</div>
              <div className={styles.price}>{record?.price}</div>
            </div>
          </div>

          <div
            className={`${styles.toggler} ${classname_open}`}
            onClick={this.onClickExpand}
          >
            <img src={dropdownIcon} alt="" />
          </div>
        </div>

        <div className={`${styles.details} ${classname_open}`}>
          <div className={styles.clinicDetails}>
            <img src={dentHospitalIcon} alt="" />

            <div className={styles.metadata}>
              <div className={styles.clinic}>{record.Clinic.name}</div>
              <div
                className={styles.dentist}
              >{`${record.Dentist.name} ${record.Dentist.surname}`}</div>
            </div>
          </div>

          <div className={styles.header}>
            <img src={dentalAnalysisIcon} alt="" />
            <div className={styles.title}>Dental Analysis</div>
          </div>

          <div className={styles.details_image}>
            <img src={record.analysis} alt="" />
          </div>

          <div className={styles.title}>Description</div>

          <div className={styles.description}>{record.description}</div>

          {record.checkList.map((checkpoint, i) => {
            return (
              <div className={styles.checkpoint} key={i}>
                <div>
                  <img src={checkpointIcon} alt="" />
                </div>
                <div>{checkpoint.text}</div>
              </div>
            );
          })}

          <button>
            <img src={sendIcon} alt="" />
            Send Message to Doctor
          </button>
        </div>
      </div>
    );
  }
}

export default Accordion;
