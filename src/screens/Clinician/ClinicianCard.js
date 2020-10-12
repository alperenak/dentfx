import React, { useState } from "react";

/*** Styles ***/
import styles from "./cliniciancard.scss";

/*** Components ***/
import ReactStars from "react-rating-stars-component";

const ClinicianCard = ({ name, surname, avatar, rate }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.dentist}>{`${name} ${surname}`}</div>
        <ReactStars value={rate} size={20} edit={false} />
      </div>
    </div>
  );
};

export default ClinicianCard;
