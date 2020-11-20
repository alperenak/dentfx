import React, {Fragment, useEffect, useState} from 'react';

/*** Components ***/
import ClinicListItem from "../../components/ClinicListItem/clinicListItem";

/*** Utils ***/
import store from "../../store";
import {getCookie} from "../../utils/cookie";

/*** Styles ***/
import styles from './searchPage.scss';
import Map from "../../components/Map/map";

export default function SearchPage() {
	const [clinics, setClinics] = useState([]);
	useEffect(() => {
		async function getClinics() {
			let res = await store.getClinics({city: '', latitude: '', longitude: '', range: '', rate: ''});
			setClinics(res.data);
		}
		getClinics();
	}, []);
	return (
		<div className="home">
			<div className="home__mapContainer">
				<Map clinics={clinics}/>
			</div>
			{clinics.map((clinic, i) => {
				return (
					<ClinicListItem key={i} clinic={clinic} />
				);
			})}
		</div>
	);
};
