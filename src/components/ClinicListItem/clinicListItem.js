import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

/*** Styles ***/
import styles from "./cliniclistitem.scss";

/*** Icons ***/
import locationIcon from "../../icons/location-icon-gray.svg";
import bookmarkIcon from "../../icons/bookmark.svg";
import bookmarkedIcon from "../../icons/bookmarked.svg";

export default function ClinicListItem({ clinic }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      className={styles.Clinic}
      onClick={() => {
        window.location = `/clinic/${clinic.id}`;
      }}
    >
      <img className={styles.avatar} src={clinic.avatar} alt="avatar" />
      <div className={styles.texts}>
        <div className={styles.name}>{clinic.name}</div>
        <div className={styles.location}>
          <img src={locationIcon} alt="icon" />
          {`${clinic.city}, ${clinic.country}`}
        </div>
        <div className={styles.rate}>
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
          className={styles.bookmark}
          src={bookmarkIcon}
          alt="bookmark"
        />
      )}
      {isBookmarked && (
        <img
          onClick={() => setIsBookmarked(false)}
          className={styles.bookmark}
          src={bookmarkedIcon}
          alt="bookmark"
        />
      )}
    </div>
  );
}
