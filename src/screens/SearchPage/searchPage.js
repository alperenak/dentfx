import React, { useEffect, useState } from 'react';

/*** Components ***/
import ClinicListItem from '../../components/ClinicListItem/clinicListItem';

/*** Utils ***/
import store from '../../store';

/*** Styles ***/
import './searchPage.scss';
import Map from '../../components/Map/map';

export default function SearchPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const keyword = urlParams.get('keyword');
  const city = urlParams.get('city');
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    async function getClinics() {
      let res = await store.getClinics({
        keyword: keyword ? keyword : '',
        city: city ? city : '',
        latitude: '',
        longitude: '',
        range: '',
        rate: '',
      });
      setClinics(res.data);
    }
    getClinics();
  }, []);
  return (
    <div>
      <div className="home container">
        <div className="home__mapContainer">
          <Map clinics={clinics} />
        </div>
        {clinics &&
          Array.isArray(clinics) &&
          clinics.map((clinic, i) => {
            return <ClinicListItem key={i} clinic={clinic} />;
          })}
      </div>
    </div>
  );
}
