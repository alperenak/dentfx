import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

/*** Styles ***/
import './cliniclistitem.scss';
/*** Icons ***/
import locationIcon from '../../icons/location-icon-gray.svg';
import bookmarkIcon from '../../icons/bookmark.svg';
import bookmarkedIcon from '../../icons/bookmarked.svg';

export default function ClinicListItem({ clinic }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      className="clinic"
      onClick={() => {
        window.location = `/clinic/${clinic.id}`;
      }}
    >
      <img className="clinic__avatar" src={clinic.avatar} alt="avatar" />
      <div className="clinic__texts">
        <div className="clinic__texts__name">{clinic.name}</div>
        <div className="clinic__texts__location">
          <img src={locationIcon} alt="icon" />
          {`${clinic.city}, ${clinic.country}`}
        </div>
        <div className="clinic__texts__rate">
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
      {!isBookmarked && (
        <img
          onClick={() => setIsBookmarked(true)}
          className="clinic__bookmark"
          src={bookmarkIcon}
          alt="bookmark"
        />
      )}
      {isBookmarked && (
        <img
          onClick={() => setIsBookmarked(false)}
          className="clinic__bookmark"
          src={bookmarkedIcon}
          alt="bookmark"
        />
      )}
    </div>
  );
}
