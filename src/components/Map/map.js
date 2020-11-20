import React from "react";
import GoogleMapReact from 'google-map-react';
import ReactStars from "react-rating-stars-component";

/*** Styles ***/
import styles from './map.scss';

function Clinic({clinic}) {
	return (
		<div className="map__clinicCard">
			<img className="map__clinicCard__avatar" src={clinic.avatar} alt="avatar"/>
			<div className="map__clinicCard__texts">
				<div className="map__clinicCard__texts__name">
					{clinic.name}
				</div>
				<div className="map__clinicCard__texts__rate">
					<ReactStars
						count={5}
						size={12}
						edit={false}
						value={clinic.rate}
						isHalf={true}
						activeColor="#ffd700"
					/>
				</div>
			</div>
		</div>
	);
}

export default function Map({clinics}) {
	const defaultProps = {
		center: {
			lat: 41.015137,
			lng: 28.979530
		},
		zoom: 11
	};

	return (
		<div className="map">
			<div style={{ height: '100%', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: '' /* YOUR KEY HERE */ }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					{clinics && Array.isArray(clinics) && clinics.map((clinic, i)=> {
						return (
							<Clinic
								key={i}
								lat={clinic.coordinate.latitude}
								lng={clinic.coordinate.longitude}
								clinic={clinic}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		</div>
);
};
