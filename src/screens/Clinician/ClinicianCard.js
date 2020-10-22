import React, { useState } from "react";

/*** Styles ***/
import styles from "./cliniciancard.scss";

/*** Components ***/
import ReactStars from "react-rating-stars-component";

const ClinicianCard = ({ name, surname, avatar, rate }) => {
	return (
		<div className="cardWrapper">
			<div className="cardWrapper__header">
				<div className="cardWrapper__header__avatar">
					<img src={avatar} alt="" />
				</div>
				<div className="cardWrapper__header__dentist">{`${name} ${surname}`}</div>
				<ReactStars value={rate} size={20} edit={false} />
			</div>
		</div>
	);
};

export default ClinicianCard;
