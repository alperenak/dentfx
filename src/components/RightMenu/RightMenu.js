import React, { useState } from "react";

/*** Styles ***/
import styles from "./rightMenu.scss";

/*** Icons ***/

import sendIcon from "../../icons/send.svg";
import checkpointIcon from "../../icons/Shape.svg";
import dentalImplantIcon from "../../icons/dental-implant.svg";
import dropdownIcon from "../../icons/dropdown-disabled.svg";
import dentHospitalIcon from "../../icons/dent-hospital-icon.svg";
import dentalAnalysisIcon from "../../icons/dental-analysis-icon.svg";

/*** Components ***/
import Message from "../Message/Message";

const renderMessages = () => {
  const tempMessages = [
    {
      title: "Eran Koca",
      image: "https://picsum.photos/200 ",
      content: "Lorem Ipsum dolor ames blah blah s adasdf asdfa ",
      time: "11:47",
    },
    {
      title: "Mehmet Akdeniz",
      image: "https://picsum.photos/200 ",
      content: "Lorem Ipsum...",
      time: "11:47",
    },
    {
      title: "İsmail Duru",
      image: "https://picsum.photos/200 ",
      content: "Lorem Ipsum...",
      time: "11:47",
    },
  ];

  const [messages, setMessages] = useState(tempMessages);

  return messages.map((message, i) => {
    return (
      <Message
        image={message.image}
        title={message.title}
        content={message.content}
        time={message.time}
        key={i}
      />
    );
  });
};

const renderHistory = () => {
  const tempHistory = [
    {
      title: "Arcu felis bibendum tristique egestas",
      date: "17 October 2020",
      price: "$70.00",
      details: {
        title: "Dental Analysis",
        clinic: "Hospitadent Dental Clinic",
        dentist: "Dt. Charlotte Welch",
        image: "https://picsum.photos/400",
        description:
          "Sed faucibus 24 turpis in bibendum neque accumsan la facilisis volutpat libero enim sed.",
        checkpoints: [
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
        ],
      },

      iconRight: dropdownIcon,
      iconLeft: dentalImplantIcon,
    },
    {
      title: "Arcu felis bibendum tristique egestas",
      date: "17 October 2020",
      price: "$70.00",
      details: {
        title: "Dental Analysis",
        clinic: "Hospitadent Dental Clinic",
        dentist: "Dt. Charlotte Welch",
        image: "https://picsum.photos/400",
        description:
          "Sed faucibus 24 turpis in bibendum neque accumsan la facilisis volutpat libero enim sed.",
        checkpoints: [
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
        ],
      },

      iconRight: dropdownIcon,
      iconLeft: dentalImplantIcon,
    },
    {
      title: "Arcu felis bibendum tristique egestas",
      date: "17 October 2020",
      price: "$70.00",
      details: {
        title: "Dental Analysis",
        clinic: "Hospitadent Dental Clinic",
        dentist: "Dt. Charlotte Welch",
        image: "https://picsum.photos/400",
        description:
          "Sed faucibus 24 turpis in bibendum neque accumsan la facilisis volutpat libero enim sed.",
        checkpoints: [
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
          "Checkpoint 1",
        ],
      },

      iconRight: dropdownIcon,
      iconLeft: dentalImplantIcon,
    },
  ];

  const [history, setHistory] = useState(tempHistory);

  const renderAccordion = (
    { title, date, details, price, iconLeft, iconRight },
    key
  ) => {
    const [classname_open, setClassname_open] = useState("");

    const onClickExpand = () => {
      classname_open == ""
        ? setClassname_open(styles.open)
        : setClassname_open("");
    };

    return (
      <div
        className={`${styles.accordion_container} ${classname_open}`}
        key={key}
      >
        <div className={styles.header}>
          <div className={styles.icon}>
            <img src={iconLeft} alt="" />
          </div>

          <div className={styles.content}>
            <div className={styles.title}>{title}</div>

            <div className={styles.extras}>
              <div className={styles.date}>{date}</div>
              <div className={styles.price}>{price}</div>
            </div>
          </div>

          <div
            className={`${styles.toggler} ${classname_open}`}
            onClick={onClickExpand}
          >
            <img src={iconRight} alt="" />
          </div>
        </div>

        <div className={`${styles.details} ${classname_open}`}>
          <div className={styles.clinicDetails}>
            <img src={dentHospitalIcon} alt="" />

            <div className={styles.metadata}>
              <div className={styles.clinic}>{details.clinic}</div>
              <div className={styles.dentist}>{details.dentist}</div>
            </div>
          </div>

          <div className={styles.header}>
            <img src={dentalAnalysisIcon} alt="" />
            <div className={styles.title}>{details.title}</div>
          </div>

          <div className={styles.details_image}>
            <img src={details.image} alt="" />
          </div>

          <div className={styles.title}>Description</div>

          <div className={styles.description}>{details.description}</div>

          {details.checkpoints.map((checkpoint, i) => {
            return (
              <div className={styles.checkpoint} key={i}>
                <div>
                  <img src={checkpointIcon} alt="" />
                </div>
                <div>{checkpoint}</div>
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
  };

  return history.map((record, i) => {
    return renderAccordion(record, i);
  });
};

const RightMenu = () => {
  return (
    <div className={styles.rightBar}>
      <div className={styles.sectionHeader}>Tedavi Geçmişi</div>
      <div className={styles.treatmentHistory}>{renderHistory()}</div>

      <div className={styles.sectionHeader}>
        New Messages <span>(2)</span>
      </div>
      <div className={styles.messages}>{renderMessages()}</div>
    </div>
  );
};

export default RightMenu;

//TODO_ERAN : TEDAVİ GEÇMİŞİ İKONLARI DÜZENLENECEK
//TODO_ERAN : HOVER STATE'I DÜZENLENECEK
